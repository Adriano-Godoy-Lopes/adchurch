import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-black p-5 text-white">
      <nav className="flex gap-5">
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
    </header>
  );
}