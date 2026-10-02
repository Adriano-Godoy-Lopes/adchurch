import church from "../data/church";
import { events, images } from "../data/content";
import { Container, EventCard, PageHero, Reveal, SectionTitle } from "../components/UI";
import LocationSection from "../components/home/LocationSection";

export default function Agenda() {
  return (
    <>
      <PageHero eyebrow="Agenda" title="Programe-se para estar conosco" copy="Cultos semanais, encontros especiais e eventos para toda a família." image={images.worship} />
      <section className="bg-cream py-24 sm:py-32">
        <Container>
          <SectionTitle eyebrow="Toda semana" title="Cultos regulares" />
          <div className="mt-12 divide-y divide-ink/10 overflow-hidden rounded-2xl border border-ink/10 bg-white">
            {church.services.map((s) => (
              <div key={s.name} className="grid items-center gap-2 px-6 py-6 sm:grid-cols-[160px_1fr_auto] sm:gap-8 sm:px-8">
                <p className="text-xs font-semibold tracking-[0.2em] text-gold-dark uppercase">{s.day}</p>
                <div>
                  <p className="font-serif text-2xl">{s.name}</p>
                  <p className="mt-1 text-sm text-stone">{s.description}</p>
                </div>
                <p className="font-serif text-3xl">{s.time}</p>
              </div>
            ))}
          </div>

          <SectionTitle eyebrow="Destaques" title="Próximos eventos" className="mt-24" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {events.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.08}><EventCard event={e} /></Reveal>
            ))}
          </div>
        </Container>
      </section>
      <LocationSection />
    </>
  );
}
