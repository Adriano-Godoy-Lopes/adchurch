import { Clock, Mail, MapPin, Phone } from "lucide-react";

import church, { fullAddress, mapsEmbed, mapsLink, whatsappLink } from "../../data/church";
import { images } from "../../data/content";
import { Button, Container, Reveal, SectionTitle } from "../UI";

const Item = ({ icon: Icon, title, children }) => (
  <li className="flex gap-4">
    <Icon className="mt-1 shrink-0 text-gold-dark" size={20} />
    <div>
      <p className="font-semibold">{title}</p>
      {children}
    </div>
  </li>
);

export default function LocationSection() {
  const { phone, email } = church.contact;
  const whatsapp = whatsappLink();

  return (
    <section className="bg-white py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <SectionTitle eyebrow="Visite-nos" title="Estamos esperando por você" />
          <ul className="mt-10 space-y-6">
            {fullAddress && (
              <Item icon={MapPin} title="Endereço">
                <p className="mt-1 text-sm leading-6 text-stone">{fullAddress}</p>
              </Item>
            )}
            <Item icon={Clock} title="Horários">
              {church.services.map((s) => (
                <p key={s.name} className="mt-1 text-sm text-stone">{s.day} · {s.time} — {s.name}</p>
              ))}
            </Item>
            {phone && (
              <Item icon={Phone} title="Telefone">
                <p className="mt-1 text-sm text-stone">{phone}</p>
              </Item>
            )}
            {email && (
              <Item icon={Mail} title="E-mail">
                <p className="mt-1 text-sm break-all text-stone">{email}</p>
              </Item>
            )}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            {mapsLink && <Button to={mapsLink} variant="dark">Como chegar</Button>}
            {whatsapp && <Button to={whatsapp} variant="ghost">WhatsApp</Button>}
            {!mapsLink && !whatsapp && <Button to="/contato" variant="dark">Fale conosco</Button>}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-3xl border border-ink/10 bg-sand shadow-[0_30px_80px_-40px_rgba(15,13,10,0.45)]">
            {mapsEmbed ? (
              <iframe title="Mapa" src={mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[420px] w-full grayscale-[35%]" />
            ) : (
              <img src={images.sanctuary} alt="Templo" loading="lazy" className="h-[420px] w-full object-cover" />
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
