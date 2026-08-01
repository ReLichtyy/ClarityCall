export function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="mt-auto border-t border-border-subtle bg-sidebar p-6 text-center text-text-primary">
            <p className="text-sm text-text-muted">
                © {currentYear} <span className="font-medium text-text-secondary">ISW-613</span>.
                Casi todos los derechos reservados.
            </p>
        </footer>
    );
}
