import { pastors } from "../../data/content";
import { SocialIcon } from "../Brand";
import { Button, Container, Reveal, SectionTitle } from "../UI";

const initials = (name) =>
  name
    .replace(/^(Pr|Pra)\.\s*/, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

const PastorPhoto = ({ pastor, className = "h-40 w-40" }) => (
  <div className={`relative shrink-0 rounded-full p-1.5 ring-1 ring-gold/40 ${className}`}>
    {pastor.image ? (
      <img src={pastor.image} alt={pastor.name} loading="lazy" className="h-full w-full rounded-full object-cover" />
    ) : (
      <div role="img" aria-label={pastor.name} className="grid h-full w-full place-items-center rounded-full bg-gradient-to-br from-coal to-night">
        <span className="font-serif text-5xl text-gold/80">{initials(pastor.name)}</span>
      </div>
    )}
  </div>
);

const PastorInstagram = ({ pastor }) =>
  pastor.instagram ? (
    <a href={pastor.instagram} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-gold-light">
      <SocialIcon name="instagram" size={16} />
      @{pastor.instagram.replace(/^https:\/\/www\.instagram\.com\/|\/$/g, "")}
    </a>
  ) : null;

export const PastorFeature = ({ pastor }) => (
  <Reveal className="flex flex-col items-center gap-10 rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center sm:flex-row sm:items-center sm:p-14 sm:text-left">
    <PastorPhoto pastor={pastor} className="h-48 w-48" />
    <div>
      <p className="text-xs font-semibold tracking-[0.22em] text-gold-light uppercase">{pastor.role}</p>
      <h3 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{pastor.name}</h3>
      {pastor.bio && <p className="mt-6 max-w-lg font-serif text-xl leading-8 text-white/75 italic">{pastor.bio}</p>}
      <PastorInstagram pastor={pastor} />
    </div>
  </Reveal>
);

export default function PastorsSection() {
  return (
    <section className="bg-ink py-24 text-white sm:py-32">
      <Container>
        <SectionTitle light eyebrow="Liderança" title="Pastores que caminham com você" className="mb-16" />
        <div className="grid gap-8 sm:grid-cols-2">
          {pastors.map((pastor, i) => (
            <Reveal key={pastor.name} delay={i * 0.1} className="flex flex-col items-center rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-12 text-center">
              <PastorPhoto pastor={pastor} />
              <p className="mt-8 text-xs font-semibold tracking-[0.22em] text-gold-light uppercase">{pastor.role}</p>
              <h3 className="mt-3 text-3xl font-semibold text-white">{pastor.name}</h3>
              {pastor.bio && <p className="mt-4 font-serif text-lg text-white/70 italic">{pastor.bio}</p>}
              <PastorInstagram pastor={pastor} />
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
