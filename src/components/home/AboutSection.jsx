import { values, images } from "../../data/content";
import { Button, Container, icons, Reveal, SectionTitle } from "../UI";

export default function AboutSection() {
  return (
    <section className="overflow-hidden bg-white py-24 sm:py-32">
      <Container className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <img src={images.community} alt="Comunidade AD Vida reunida" className="aspect-[4/5] w-full rounded-3xl object-cover sm:aspect-[5/5] lg:w-[85%]" />
          <img src={images.bible} alt="Bíblia aberta" className="absolute -right-2 -bottom-10 hidden w-[46%] rounded-2xl border-8 border-white object-cover shadow-2xl sm:block lg:right-0" />
          <div className="absolute top-8 -left-3 rounded-2xl bg-gold px-6 py-5 text-ink shadow-xl sm:left-6">
            <p className="font-serif text-4xl font-semibold">+ Fé</p>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase">+ Família · + Propósito</p>
          </div>
        </Reveal>

        <div>
          <SectionTitle
            eyebrow="Quem somos"
            title="Uma igreja que ama a Deus e cuida de pessoas"
            copy="Somos uma comunidade cristã formada por pessoas e famílias que desejam viver o evangelho, crescer na fé e servir ao próximo"
          />

          <div className="mt-10 grid gap-6">
            {values.map(({ icon, title, description }, i) => {
              const Icon = icons[icon];
              return (
                <Reveal key={title} delay={i * 0.06}>
                  <div className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/40 text-gold-dark">
                      <Icon size={19} />
                    </span>
                    <div>
                      <h3 className="font-sans text-base font-semibold">{title}</h3>
                      <p className="mt-1.5 text-sm leading-6 text-stone">{description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Button to="/sobre" variant="dark" className="mt-12">Conheça nossa história</Button>
        </div>
      </Container>
    </section>
  );
}
