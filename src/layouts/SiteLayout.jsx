import { Link } from "react-router-dom";

export default function SiteLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-black text-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            AD Vida Church
          </Link>

          <nav className="flex gap-6">
            <Link to="/">Início</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/pastores">Pastores</Link>
            <Link to="/ministerios">Ministérios</Link>
            <Link to="/agenda">Agenda</Link>
            <Link to="/galeria">Galeria</Link>
            <Link to="/mensagens">Mensagens</Link>
            <Link to="/oracao">Oração</Link>
            <Link to="/contato">Contato</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-black text-white text-center py-6">
        © {new Date().getFullYear()} AD Vida Church • Todos os direitos reservados.
      </footer>
    </div>
  );
}