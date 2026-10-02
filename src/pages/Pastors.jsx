import { pastors, images } from "../data/content";
import { Container, PageHero } from "../components/UI";
import { PastorFeature } from "../components/home/PastorsSection";

export default function Pastors() {
  return (
    <>
      <PageHero eyebrow="Liderança" title="Pastores e liderança" copy="Homens e mulheres chamados para servir, cuidar e conduzir a igreja com amor e fidelidade à Palavra." image={images.bible} />
      <section className="bg-ink py-24 text-white sm:py-32">
        <Container className="space-y-10">
          {pastors.map((p) => (
            <PastorFeature key={p.name} pastor={p} />
          ))}
        </Container>
      </section>
    </>
  );
}
