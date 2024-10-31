export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background text-muted-foreground py-4 text-sm">
            <div className="container mx-auto max-w-screen-lg px-2">
                <div className="flex flex-col items-center justify-center gap-2">
                    <span>
                        Made with 🤍 by Jose Familia | {currentYear} | Inspired on{' '}
                        <a
                            href="https://portfolio-magicui.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            MagicUI Portfolio
                        </a>{' '}
                    </span>
                </div>
            </div>
            <meta name="keywords" content="Jose Rene Familia, web developer, frontend developer, portfolio" />
            <meta name="author" content="Jose Rene Familia" />
        </footer>
    );
}
