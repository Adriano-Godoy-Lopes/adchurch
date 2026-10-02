import { gallery } from "../../data/content";
import { Button, Container, Reveal, SectionTitle } from "../UI";

export const GalleryGrid = ({ items }) => (
  <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
    {items.map((item, i) => (
      <Reveal key={item.src} delay={(i % 3) * 0.06} className="mb-4 break-inside-avoid">
        <figure className="group overflow-hidden rounded-2xl bg-sand">
          <img src={item.src} alt={item.alt} loading="lazy" className={`w-full object-cover transition duration-700 group-hover:scale-105 ${i % 3 === 1 ? "aspect-[4/5]" : "aspect-[4/3]"}`} />
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
          <Button to="/galeria" variant="ghost" className="self-start lg:self-auto">Abrir galeria</Button>
        </div>
        <div className="mt-14">
          <GalleryGrid items={gallery.slice(0, 6)} />
        </div>
      </Container>
    </section>
  );
}
