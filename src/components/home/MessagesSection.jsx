import { useState } from "react";
import { Play } from "lucide-react";

import { messages } from "../../data/content";
import { Button, Container, Reveal, SectionTitle } from "../UI";

export const VideoCard = ({ message }) => {
  const [playing, setPlaying] = useState(false);
  return (
    <article className="group">
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-ink">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${message.youtubeId}?autoplay=1`}
            title={message.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button type="button" onClick={() => setPlaying(true)} className="absolute inset-0 h-full w-full" aria-label={`Assistir: ${message.title}`}>
            <img src={`https://img.youtube.com/vi/${message.youtubeId}/hqdefault.jpg`} alt="" loading="lazy" className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100" />
            <span className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
            <span className="absolute top-1/2 left-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold text-ink shadow-xl transition group-hover:scale-110">
              <Play size={24} className="ml-1" fill="currentColor" />
            </span>
          </button>
        )}
      </div>
      <p className="mt-5 text-[11px] font-semibold tracking-[0.2em] text-gold-dark uppercase">{message.date} · {message.speaker}</p>
      <h3 className="mt-2 text-2xl font-semibold">{message.title}</h3>
    </article>
  );
};

export default function MessagesSection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionTitle eyebrow="Mensagens" title="Palavra para a sua semana" copy="Perdeu algum culto? Assista às mensagens recentes onde estiver." />
          <Button to="/mensagens" variant="ghost" className="self-start lg:self-auto">Ver todas</Button>
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {messages.slice(0, 2).map((m, i) => (
            <Reveal key={`${m.title}-${i}`} delay={i * 0.08}>
              <VideoCard message={m} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
