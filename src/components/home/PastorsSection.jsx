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
      <p className="text-xs font-semibold tracking-[0.22em] text-gold-light uppercase">{pastor.role}</p>
      <h3 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{pastor.name}</h3>
      <p className="mt-8 max-w-lg border-t border-white/10 pt-8 text-lg leading-8 text-white/70">{pastor.bio}</p>
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
