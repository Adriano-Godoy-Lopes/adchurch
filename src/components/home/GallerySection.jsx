import church from "../../data/church";
import { gallery } from "../../data/content";
import { Button, Container, Reveal, SectionTitle } from "../UI";

export const GalleryGrid = ({ items }) => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {items.map((item, i) => (
      <Reveal key={item.src} delay={(i % 3) * 0.06}>
        <figure className="group overflow-hidden rounded-2xl bg-sand">
          <img src={item.src} alt={item.alt} loading="lazy" className="aspect-[4/5] w-full object-cover object-top transition duration-700 group-hover:scale-105" />
        </figure>
      </Reveal>
    ))}
  </div>
);

export default function GallerySection() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionTitle eyebrow="Galeria" title="Momentos da nossa família" />
          <div className="flex flex-wrap gap-3 self-start lg:self-auto">
            <Button to="/galeria" variant="ghost">Abrir galeria</Button>
            {church.social.instagram && <Button to={church.social.instagram} variant="dark">Siga no Instagram</Button>}
          </div>
        </div>
        <div className="mt-14">
          <GalleryGrid items={gallery.slice(0, 6)} />
        </div>
      </Container>
    </section>
  );
}
