import church from "../data/church";
import { images, messages } from "../data/content";
import { Button, Container, PageHero, Reveal } from "../components/UI";
import { VideoCard } from "../components/home/MessagesSection";

export default function Messages() {
  return (
    <>
      <PageHero eyebrow="Mensagens" title="Palavra que alimenta a fé" copy="Assista às pregações e estudos da AD Vida Church onde você estiver." image={images.bibleTable} />
      <section className="bg-white py-24 sm:py-32">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            {messages.map((m, i) => (
              <Reveal key={`${m.title}-${i}`} delay={(i % 2) * 0.08}><VideoCard message={m} /></Reveal>
            ))}
          </div>
          {church.social.youtube && (
          <div className="mt-20 flex flex-col items-start justify-between gap-6 rounded-2xl bg-cream p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">Inscreva-se no nosso canal</h2>
              <p className="mt-2 text-sm text-stone">Receba as novas mensagens assim que forem publicadas.</p>
            </div>
            <Button to={church.social.youtube} variant="dark">Abrir YouTube</Button>
          </div>
          )}
        </Container>
      </section>
    </>
  );
}
