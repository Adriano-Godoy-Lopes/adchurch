import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, MapPin, Menu, X } from "lucide-react";

import church, { fullAddress, mapsLink, socialLinks } from "../../data/church";
import { Logo, SocialIcon } from "../Brand";
import { Container } from "../UI";

export const links = [
  { name: "Início", path: "/" },
  { name: "Sobre", path: "/sobre" },
  { name: "Pastores", path: "/pastores" },
  { name: "Ministérios", path: "/ministerios" },
  { name: "Agenda", path: "/agenda" },
  { name: "Galeria", path: "/galeria" },
  { name: "Mensagens", path: "/mensagens" },
  { name: "Contato", path: "/contato" },
];

const nextService = church.services.map((s) => `${s.day.slice(0, 3)} ${s.time}`).join(" · ");

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const solid = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={`hidden border-b border-white/10 bg-ink text-xs text-white/60 transition-all duration-300 md:block ${scrolled ? "h-0 overflow-hidden border-transparent" : "h-10"}`}>
        <Container className="flex h-10 items-center justify-between">
          <div className="flex items-center gap-6">
            {fullAddress && (
              <a href={mapsLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-gold-light">
                <MapPin size={14} className="text-gold" />
                {fullAddress}
              </a>
            )}
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-gold" />
              Cultos: {nextService}
            </span>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map(([name, href]) => (
              <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name} className="transition hover:text-gold-light">
                <SocialIcon name={name} size={15} />
              </a>
            ))}
          </div>
        </Container>
      </div>

      <div className={`transition-all duration-300 ${solid ? "border-b border-white/10 bg-ink/95 shadow-lg shadow-black/20 backdrop-blur-md" : "bg-gradient-to-b from-ink/80 to-transparent"}`}>
        <Container className="flex h-20 items-center justify-between gap-6">
          <Link to="/" aria-label={church.name}>
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `relative rounded-full px-3.5 py-2 text-sm font-medium transition ${isActive ? "text-gold-light" : "text-white/80 hover:text-white"}`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && <span className="absolute inset-x-3.5 -bottom-0.5 h-px bg-gold" />}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/oracao"
              className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-gold-light sm:inline-flex"
            >
              Pedido de oração
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white transition hover:border-gold xl:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </Container>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="h-[calc(100dvh-80px)] overflow-y-auto bg-ink xl:hidden"
          >
            <Container className="flex flex-col py-6">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `border-b border-white/10 py-4 font-serif text-2xl transition ${isActive ? "text-gold-light" : "text-white hover:text-gold-light"}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link to="/oracao" className="mt-8 rounded-full bg-gold px-6 py-4 text-center font-semibold text-ink">
                Pedido de oração
              </Link>
              <p className="mt-8 text-sm leading-7 text-white/50">
                {fullAddress && (
                  <>
                    {fullAddress}
                    <br />
                  </>
                )}
                Cultos: {nextService}
              </p>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
