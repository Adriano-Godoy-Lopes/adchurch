import { images } from "../../data/content";
import { Button, Container, Reveal } from "../UI";

export default function PrayerCta() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-24 text-white sm:py-28">
      <img src={images.bibleTable} alt="" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/50" />
      <Container>
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.28em] text-gold-light uppercase">Pedido de oração</p>
          <h2 className="mt-5 text-4xl leading-tight font-semibold sm:text-5xl">Você não precisa enfrentar isso sozinho.</h2>
          <p className="mt-6 text-lg leading-8 text-white/70">Compartilhe seu pedido com nossa equipe de intercessão. Vamos orar por você com carinho e sigilo.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button to="/oracao">Enviar pedido</Button>
            <Button to="/contato" variant="outline">Falar com um pastor</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
