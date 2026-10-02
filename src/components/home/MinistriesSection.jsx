import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { ministries } from "../../data/content";
import { Button, Container, icons, Reveal, SectionTitle } from "../UI";

export const MinistryCard = ({ ministry, className = "" }) => {
  const Icon = icons[ministry.icon];
  return (
    <Link
      to={`/ministerios/${ministry.slug}`}
      className={`group relative isolate flex min-h-[340px] flex-col justify-end overflow-hidden rounded-2xl bg-ink p-7 text-white ${className}`}
    >
      <img src={ministry.image} alt="" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/60 to-ink/5" />
      <span className="absolute top-6 right-6 grid h-10 w-10 place-items-center rounded-full bg-white/10 backdrop-blur transition group-hover:bg-gold group-hover:text-ink">
        <ArrowUpRight size={18} />
      </span>
      <span className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-gold-light uppercase">
        {Icon && <Icon size={14} />}
        {ministry.tag}
      </span>
      <h3 className="mt-3 text-3xl font-semibold">{ministry.name}</h3>
      <p className="mt-2 max-w-sm text-sm leading-6 text-white/70">{ministry.desc}</p>
    </Link>
  );
};

export default function MinistriesSection() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionTitle
            eyebrow="Ministérios"
            title="Um lugar para você servir e pertencer"
            copy="Em cada fase da vida, existe um grupo para caminhar junto com você."
          />
          <Button to="/ministerios" variant="ghost" className="self-start lg:self-auto">Todos os ministérios</Button>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ministries.slice(0, 6).map((ministry, i) => (
            <Reveal key={ministry.slug} delay={(i % 3) * 0.08}>
              <MinistryCard ministry={ministry} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
