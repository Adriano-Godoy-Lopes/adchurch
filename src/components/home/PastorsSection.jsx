import { Quote } from "lucide-react";

import { pastors } from "../../data/content";
import { Button, Container, Reveal, SectionTitle } from "../UI";

export const PastorFeature = ({ pastor }) => (
  <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
    <Reveal>
      <div className="relative">
        <div className="absolute -inset-3 rounded-[2rem] border border-gold/30" />
        <img src={pastor.image} alt={pastor.name} loading="lazy" className="relative aspect-[4/5] w-full rounded-3xl object-cover" />
      </div>
    </Reveal>
    <Reveal delay={0.1}>
      <Quote size={44} className="text-gold" />
      <blockquote className="mt-6 font-serif text-2xl leading-snug text-white sm:text-3xl">
        “Nosso desejo é que cada pessoa que entrar por nossas portas encontre uma família, descubra seu propósito e experimente o amor de Deus.”
      </blockquote>
      <div className="mt-10 border-t border-white/10 pt-8">
        <p className="font-serif text-2xl text-white">{pastor.name}</p>
        <p className="mt-1 text-xs font-semibold tracking-[0.22em] text-gold-light uppercase">{pastor.role}</p>
        <p className="mt-5 max-w-lg text-sm leading-7 text-white/65">{pastor.bio}</p>
      </div>
    </Reveal>
  </div>
);

export default function PastorsSection() {
  return (
    <section className="bg-ink py-24 text-white sm:py-32">
      <Container>
        <SectionTitle light eyebrow="Liderança" title="Pastores que caminham com você" className="mb-16" />
        <PastorFeature pastor={pastors[0]} />
        <div className="mt-16">
          <Button to="/pastores" variant="outline">Conheça a liderança</Button>
        </div>
      </Container>
    </section>
  );
}
