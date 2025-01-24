package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"strings"
)

// Definir la estructura de un repositorio
type Repo struct {
	Name        string   `json:"name"`
	Description string   `json:"description"`
	Topics      []string `json:"topics"`
	HTMLURL     string   `json:"html_url"`
}

// Mapa de tecnologías
var iconMap = map[string]string{
	"typescript": "SiTypescript",
	"astro":      "SiAstro",
	"python":     "SiPython",
	"postgresql": "SiPostgresql",
	"github":     "FaGithub",
	"nodejs":     "FaNodeJs",
}

// Obtener repositorios de GitHub
func getRepos() ([]Repo, error) {
	token := os.Getenv("GITHUB_TOKEN")
	username := os.Getenv("GITHUB_USERNAME")
	apiURL := os.Getenv("GITHUB_API_URL") + "/users/" + username + "/repos"

	req, _ := http.NewRequest("GET", apiURL, nil)
	req.Header.Set("Authorization", "token "+token)

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	body, _ := ioutil.ReadAll(resp.Body)

	var repos []Repo
	json.Unmarshal(body, &repos)
	return repos, nil
}

// Categorizar proyectos en Frontend, Backend y DevOps
func categorizeProjects(repos []Repo) map[string][]Repo {
	categories := map[string][]Repo{
		"Frontend": {},
		"Backend":  {},
		"DevOps":   {},
	}

	for _, repo := range repos {
		for _, topic := range repo.Topics {
			if topic == "frontend" {
				categories["Frontend"] = append(categories["Frontend"], repo)
			} else if topic == "backend" {
				categories["Backend"] = append(categories["Backend"], repo)
			} else if topic == "devops" {
				categories["DevOps"] = append(categories["DevOps"], repo)
			}
		}
	}
	return categories
}

// Generar el archivo `projects.tsx`
func generateProjectsTSX(categories map[string][]Repo) {
	// Recolectar iconos únicos para importar
	uniqueIcons := map[string]bool{}

	// Inicio del contenido de `projects.tsx`
	content := `import { Code } from "lucide-react";` + "\n"

	// Construir las importaciones dinámicas de react-icons
	for _, repos := range categories {
		for _, repo := range repos {
			for _, topic := range repo.Topics {
				if icon, exists := iconMap[topic]; exists {
					uniqueIcons[icon] = true
				}
			}
		}
	}

	// Agregar importaciones únicas
	if len(uniqueIcons) > 0 {
		content += `import { ` + strings.Join(getKeys(uniqueIcons), ", ") + ` } from "react-icons/si";` + "\n"
	}

	content += `\nconst projectCategories = [` + "\n"

	// Construcción de las categorías de proyectos
	for category, repos := range categories {
		content += fmt.Sprintf(`
		{
			name: "%s",
			icon: <Code className="w-5 h-5" />,
			projects: [`, category)

		for _, repo := range repos {
			techIcons := []string{}
			for _, topic := range repo.Topics {
				if icon, exists := iconMap[topic]; exists {
					techIcons = append(techIcons, fmt.Sprintf(`{ name: "%s", icon: <%s /> }`, topic, icon))
				}
			}

			if len(techIcons) > 0 {
				content += fmt.Sprintf(`
				{
					name: "%s",
					description: "%s",
					technologies: [%s],
					githubUrl: "%s"
				},`, repo.Name, repo.Description, strings.Join(techIcons, ","), repo.HTMLURL)
			}
		}

		content += `]
		},`
	}

	content += `];\n\nexport default projectCategories;`

	ioutil.WriteFile("../src/components/projects.tsx", []byte(content), 0644)
}

// Obtener las claves de un mapa
func getKeys(m map[string]bool) []string {
	keys := []string{}
	for k := range m {
		keys = append(keys, k)
	}
	return keys
}

func main() {
	repos, err := getRepos()
	if err != nil {
		fmt.Println("Error obteniendo repositorios:", err)
		return
	}

	categories := categorizeProjects(repos)
	generateProjectsTSX(categories)
	fmt.Println("✅ Archivo projects.tsx actualizado con éxito!")
}
