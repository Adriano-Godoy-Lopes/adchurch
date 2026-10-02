import { gallery, images } from "../data/content";
import { Container, PageHero } from "../components/UI";
import { GalleryGrid } from "../components/home/GallerySection";

export default function Gallery() {
  return (
    <>
      <PageHero eyebrow="Galeria" title="Momentos que contam nossa história" copy="Cultos, encontros e celebrações da família AD Vida." image={images.fellowship} />
      <section className="bg-cream py-24">
        <Container>
          <GalleryGrid items={gallery} />
        </Container>
      </section>
    </>
  );
}
