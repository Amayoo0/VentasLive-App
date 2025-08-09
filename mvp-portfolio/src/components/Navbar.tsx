export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
            <div className="max-w-5xl mx-auto px-4 py-4 flex items-center gap-6">
                <a href="#intro" className="font-bold">MiPortfolio</a>
                <a href="#solicitud" className="hover:underline">Solicitar proyecto</a>
            </div>
        </nav>
    )
}