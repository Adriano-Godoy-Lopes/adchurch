import { CalendarDays, Clock, MapPin, Navigation } from "lucide-react";

import church, { fullAddress, mapsLink } from "../../data/church";
import { Button, Container, Reveal, SectionTitle } from "../UI";

export default function ServiceTimes() {
  return (
    <section id="encontros" className="scroll-mt-20 bg-cream py-24 sm:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionTitle
            eyebrow="Participe conosco"
            title="Nossos encontros"
            copy="Você e sua família são muito bem-vindos. Prepare o coração — nós cuidamos do resto."
          />
          <Button to="/agenda" variant="ghost" className="self-start lg:self-auto">Ver agenda completa</Button>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {church.services.map((service, i) => (
            <Reveal key={service.name} delay={i * 0.08}>
              <article className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_24px_60px_-30px_rgba(15,13,10,0.4)]">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold/12 text-gold-dark transition group-hover:bg-gold group-hover:text-ink">
                    <CalendarDays size={22} />
                  </span>
                  <span className="text-xs font-semibold tracking-[0.2em] text-stone uppercase">{service.day}</span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold">{service.name}</h3>
                <p className="mt-3 text-sm leading-7 text-stone">{service.description}</p>
                <p className="mt-auto flex items-center gap-2 pt-8 font-serif text-3xl text-ink">
                  <Clock size={20} className="text-gold-dark" />
                  {service.time}
                </p>
              </article>
            </Reveal>
          ))}

          <Reveal delay={0.24}>
            <article className="flex h-full flex-col rounded-2xl bg-ink p-8 text-white">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold text-ink">
                <MapPin size={22} />
              </span>
              <h3 className="mt-8 text-2xl font-semibold">Primeira vez aqui?</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">{fullAddress}</p>
              <a href={mapsLink} target="_blank" rel="noreferrer" className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-gold-light transition hover:text-gold">
                <Navigation size={16} /> Como chegar
              </a>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
