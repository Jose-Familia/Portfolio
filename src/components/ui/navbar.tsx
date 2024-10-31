'use client'

import { useState, useEffect } from 'react'
import { Home, User, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const icons = [
  { href: "/", Icon: Home, label: "Home" },
  { href: "/about", Icon: User, label: "About" },
  { href: "https://github.com/Jose-Familia", Icon: Github, label: "GitHub", isExternal: true, target:"_blank"},
  { href: "https://www.linkedin.com/in/jrfamilia", Icon: Linkedin, label: "LinkedIn", isExternal: true,target:"_blank" },
  { href: "mailto:familiajoserene@gmail.com", Icon: Mail, label: "Email", isExternal: true, target:"_blank" },
]

export default function NavBar() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [atTop, setAtTop] = useState(true)

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true'
    setIsDarkMode(isDark)
    document.documentElement.classList.toggle('dark', isDark)

    const handleScroll = () => {
      setAtTop(window.scrollY < 10)  // Cambia este valor si quieres que se active más abajo.
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode
      localStorage.setItem('darkMode', newMode.toString())
      document.documentElement.classList.toggle('dark', newMode)
      return newMode
    })
  }

  return (
    <motion.nav
      className={`sticky inset-x-0 bottom-4 z-50 ${atTop ? 'bottom-4' : 'bottom-0'}`}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <motion.div
        className={`mx-auto w-max flex items-center justify-center space-x-1 rounded-full shadow-lg px-4 py-2 backdrop-blur-lg ${
          isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'
        }`}
        layout
      >
        {icons.map(({ href, Icon, label, isExternal }) => (
          <Link
            key={label}
            href={href}
            className={`transition-colors p-2 rounded-full hover:bg-gray-200/50 dark:hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              isDarkMode ? 'focus:ring-offset-gray-800' : 'focus:ring-offset-white'
            }`}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={20} />
              <span className="sr-only">{label}</span>
            </motion.div>
          </Link>
        ))}
        <motion.button
          onClick={toggleDarkMode}
          className={`transition-colors p-2 rounded-full hover:bg-gray-200/50 dark:hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
            isDarkMode ? 'focus:ring-offset-gray-800' : 'focus:ring-offset-white'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle theme"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>
      </motion.div>
      <meta name="keywords" content="Jose Rene Familia, web developer, frontend developer, portfolio" />
      <meta name="author" content="Jose Rene Familia" />
    </motion.nav>
  )
}
