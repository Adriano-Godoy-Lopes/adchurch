import { Clock, Mail, MapPin, Phone } from "lucide-react";

import church, { fullAddress, mapsEmbed, mapsLink, whatsappLink } from "../../data/church";
import { Button, Container, Reveal, SectionTitle } from "../UI";

export default function LocationSection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <SectionTitle eyebrow="Visite-nos" title="Estamos esperando por você" />
          <ul className="mt-10 space-y-6">
            <li className="flex gap-4">
              <MapPin className="mt-1 shrink-0 text-gold-dark" size={20} />
              <div><p className="font-semibold">Endereço</p><p className="mt-1 text-sm leading-6 text-stone">{fullAddress}</p></div>
            </li>
            <li className="flex gap-4">
              <Clock className="mt-1 shrink-0 text-gold-dark" size={20} />
              <div>
                <p className="font-semibold">Horários</p>
                {church.services.map((s) => (
                  <p key={s.name} className="mt-1 text-sm text-stone">{s.day} · {s.time} — {s.name}</p>
                ))}
              </div>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-1 shrink-0 text-gold-dark" size={20} />
              <div><p className="font-semibold">Telefone / WhatsApp</p><p className="mt-1 text-sm text-stone">{church.contact.phone}</p></div>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-1 shrink-0 text-gold-dark" size={20} />
              <div><p className="font-semibold">E-mail</p><p className="mt-1 text-sm break-all text-stone">{church.contact.email}</p></div>
            </li>
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button to={mapsLink} variant="dark">Como chegar</Button>
            <Button to={whatsappLink()} variant="ghost">WhatsApp</Button>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-3xl border border-ink/10 bg-sand shadow-[0_30px_80px_-40px_rgba(15,13,10,0.45)]">
            <iframe title="Mapa" src={mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[420px] w-full grayscale-[35%]" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
