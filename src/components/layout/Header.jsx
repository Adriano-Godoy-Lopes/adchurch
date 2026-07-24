import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

import church from "../../data/church";

const links = [
  { name: "Início", path: "/" },
  { name: "Sobre", path: "/sobre" },
  { name: "Pastores", path: "/pastores" },
  { name: "Ministérios", path: "/ministerios" },
  { name: "Agenda", path: "/agenda" },
  { name: "Galeria", path: "/galeria" },
  { name: "Mensagens", path: "/mensagens" },
  { name: "Contato", path: "/contato" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950 text-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide text-amber-400"
        >
          {church.name}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition hover:text-amber-400 ${
                  isActive ? "text-amber-400" : "text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <button className="lg:hidden">
          <Menu size={30} />
        </button>
      </div>
    </header>
  );
}