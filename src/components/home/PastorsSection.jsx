import { pastors } from "../../data/content";
import { Button, Container, Reveal, SectionTitle } from "../UI";

const initials = (name) =>
  name
    .replace(/^(Pr|Pra)\.\s*/, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

const PastorPhoto = ({ pastor }) =>
  pastor.image ? (
    <img src={pastor.image} alt={pastor.name} loading="lazy" className="relative aspect-[4/5] w-full rounded-3xl object-cover" />
  ) : (
    <div role="img" aria-label={pastor.name} className="relative grid aspect-[4/5] w-full place-items-center rounded-3xl bg-gradient-to-br from-coal to-night">
      <span className="font-serif text-8xl text-gold/80">{initials(pastor.name)}</span>
    </div>
  );

export const PastorFeature = ({ pastor, reverse = false }) => (
  <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
    <Reveal className={reverse ? "lg:order-2" : ""}>
      <div className="relative mx-auto max-w-md">
        <div className="absolute -inset-3 rounded-[2rem] border border-gold/30" />
        <PastorPhoto pastor={pastor} />
      </div>
    </Reveal>
    <Reveal delay={0.1}>
      <p className="text-xs font-semibold tracking-[0.22em] text-gold-light uppercase">{pastor.role}</p>
      <h3 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{pastor.name}</h3>
      {pastor.bio && <p className="mt-8 max-w-lg border-t border-white/10 pt-8 text-lg leading-8 text-white/70">{pastor.bio}</p>}
    </Reveal>
  </div>
);

export default function PastorsSection() {
  return (
    <section className="bg-ink py-24 text-white sm:py-32">
      <Container>
        <SectionTitle light eyebrow="Liderança" title="Pastores que caminham com você" className="mb-16" />
        <div className="grid gap-10 sm:grid-cols-2 lg:gap-16">
          {pastors.map((pastor, i) => (
            <Reveal key={pastor.name} delay={i * 0.1}>
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-3 rounded-[2rem] border border-gold/30" />
                <PastorPhoto pastor={pastor} />
              </div>
              <div className="mx-auto mt-8 max-w-md">
                <p className="text-xs font-semibold tracking-[0.22em] text-gold-light uppercase">{pastor.role}</p>
                <h3 className="mt-3 text-3xl font-semibold text-white">{pastor.name}</h3>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-16">
          <Button to="/pastores" variant="outline">Conheça a liderança</Button>
        </div>
      </Container>
    </section>
  );
}
