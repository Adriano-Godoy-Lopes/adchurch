import { images, ministries } from "../data/content";
import { Container, PageHero, Reveal } from "../components/UI";
import { MinistryCard } from "../components/home/MinistriesSection";

export default function Ministries() {
  return (
    <>
      <PageHero eyebrow="Ministérios" title="Encontre o seu lugar" copy="Cada ministério é uma porta para crescer na fé, fazer amigos e servir com os dons que Deus te deu." image={images.community} />
      <section className="bg-cream py-24 sm:py-32">
        <Container className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ministries.map((m, i) => (
            <Reveal key={m.slug} delay={(i % 3) * 0.08}>
              <MinistryCard ministry={m} />
            </Reveal>
          ))}
        </Container>
      </section>
    </>
  );
}
