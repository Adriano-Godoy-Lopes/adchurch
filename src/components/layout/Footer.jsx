import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Send } from "lucide-react";

import church, { fullAddress, mapsLink, whatsappLink } from "../../data/church";
import { Logo, SocialLinks } from "../Brand";
import { Button, Container } from "../UI";
import { links } from "./Header";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 py-14 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Você tem um lugar aqui.</h2>
            <p className="mt-3 max-w-xl text-white/60">Venha nos visitar neste domingo. Será uma alegria receber você e sua família.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button to="/contato">Planeje sua visita</Button>
            {whatsappLink() && <Button to={whatsappLink()} variant="outline">Fale no WhatsApp</Button>}
          </div>
        </div>

        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo className="h-14 w-auto" />
            <p className="mt-6 max-w-xs text-sm leading-7 text-white/60">{church.slogan}. {church.tagline}</p>
            <SocialLinks className="mt-6" />
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold tracking-[0.24em] text-gold-light uppercase">Navegação</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {links.map((l) => (
                <li key={l.path}><Link to={l.path} className="transition hover:text-gold-light">{l.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold tracking-[0.24em] text-gold-light uppercase">Cultos</h3>
            <ul className="mt-5 space-y-4 text-sm">
              {church.services.map((s) => (
                <li key={s.name}>
                  <p className="text-white">{s.name}</p>
                  <p className="text-white/55">{s.day} · {s.time}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold tracking-[0.24em] text-gold-light uppercase">Contato</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              {fullAddress && <li><a href={mapsLink} target="_blank" rel="noreferrer" className="flex gap-3 transition hover:text-gold-light"><MapPin size={17} className="mt-0.5 shrink-0 text-gold" />{fullAddress}</a></li>}
              {church.contact.phone && <li><a href={whatsappLink() ?? `tel:${church.contact.phone}`} target="_blank" rel="noreferrer" className="flex gap-3 transition hover:text-gold-light"><Phone size={17} className="mt-0.5 shrink-0 text-gold" />{church.contact.phone}</a></li>}
              {church.contact.email && <li><a href={`mailto:${church.contact.email}`} className="flex gap-3 break-all transition hover:text-gold-light"><Mail size={17} className="mt-0.5 shrink-0 text-gold" />{church.contact.email}</a></li>}
              <li><Link to="/contato" className="flex gap-3 transition hover:text-gold-light"><Send size={17} className="mt-0.5 shrink-0 text-gold" />Envie uma mensagem</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-white/45 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {church.name}. Todos os direitos reservados.</p>
          <p>{church.yearTheme.year} · {church.yearTheme.title}</p>
        </div>
      </Container>
    </footer>
  );
}
