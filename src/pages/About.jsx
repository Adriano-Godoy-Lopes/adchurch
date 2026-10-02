import church from "../data/church";
import { images, values } from "../data/content";
import { Button, Container, icons, PageHero, Reveal, SectionTitle } from "../components/UI";

export default function About() {
  return (
    <>
      <PageHero eyebrow="Sobre nós" title="Uma família reunida pelo amor de Deus" copy={`${church.slogan}. ${church.tagline}`} image={images.sanctuary} />

      <section className="bg-white py-24 sm:py-32">
        <Container className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionTitle eyebrow="Quem somos" title="Uma igreja que ama a Deus e cuida de pessoas" />
            <div className="mt-8 space-y-5 text-base leading-8 text-stone">
              <p>Somos uma comunidade cristã formada por pessoas e famílias que desejam viver o evangelho, crescer na fé e servir ao próximo.</p>
              <p>Em {church.yearTheme.year}, vivemos <strong className="text-ink">{church.yearTheme.title}</strong>.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <img src={images.worship} alt="Culto na AD Vida Church" className="aspect-[4/3] w-full rounded-3xl object-cover" />
          </Reveal>
        </Container>
      </section>

      <section className="bg-cream py-24 sm:py-32">
        <Container>
          <SectionTitle center eyebrow="Identidade" title="O que nos move" />
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {values.map(({ icon, title, description }) => {
              const Icon = icons[icon];
              return (
                <div key={title}>
                  <Icon className="text-gold-dark" size={26} />
                  <h3 className="mt-4 font-sans text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-stone">{description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 flex flex-wrap gap-3">
            <Button to="/pastores" variant="dark">Conheça nossos pastores</Button>
            <Button to="/ministerios" variant="ghost">Nossos ministérios</Button>
          </div>
        </Container>
      </section>

    </>
  );
}
