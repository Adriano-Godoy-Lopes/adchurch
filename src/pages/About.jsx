import { Compass, Eye, Target } from "lucide-react";

import church from "../data/church";
import { images, values } from "../data/content";
import { Button, Container, icons, PageHero, Reveal, SectionTitle } from "../components/UI";
import PrayerCta from "../components/home/PrayerCta";

const pillars = [
  { icon: Target, title: "Missão", text: "Anunciar o evangelho de Jesus Cristo, fazer discípulos e cuidar de pessoas e famílias." },
  { icon: Eye, title: "Visão", text: "Ser uma igreja relevante, acolhedora e cheia da presença de Deus, que transforma a cidade." },
  { icon: Compass, title: "Propósito", text: "Levar cada pessoa a conhecer a Deus, crescer na fé, servir e alcançar outras vidas." },
];

export default function About() {
  return (
    <>
      <PageHero eyebrow="Sobre nós" title="Uma família reunida pelo amor de Deus" copy={`${church.slogan}. ${church.tagline}`} image={images.sanctuary} />

      <section className="bg-white py-24 sm:py-32">
        <Container className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionTitle eyebrow="Nossa história" title="Começamos com poucos, sonhando com muitos" />
            <div className="mt-8 space-y-5 text-base leading-8 text-stone">
              <p>A {church.name} nasceu do desejo de ser uma igreja simples, acolhedora e fiel à Palavra — um lugar onde qualquer pessoa pudesse se sentir em casa.</p>
              <p>Ao longo dos anos, vimos famílias restauradas, vidas transformadas e uma comunidade crescer servindo à cidade. Em {church.yearTheme.year}, vivemos <strong className="text-ink">{church.yearTheme.title}</strong>: tempo de colher os frutos do que Deus plantou.</p>
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
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pillars.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <article className="h-full rounded-2xl border border-ink/10 bg-white p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-ink text-gold"><Icon size={22} /></span>
                  <h3 className="mt-6 text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 grid gap-8 border-t border-ink/10 pt-16 sm:grid-cols-2 lg:grid-cols-4">
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

      <PrayerCta />
    </>
  );
}
