import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import church from "../../data/church";
import { images } from "../../data/content";
import { Button, Container } from "../UI";

const fade = (delay) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink text-white">
      <motion.img
        src={images.hero}
        alt=""
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: "easeOut" }}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-transparent to-ink/40" />

      <Container className="pt-32 pb-28">
        <div className="max-w-3xl">
          <motion.span {...fade(0.1)} className="inline-flex items-center gap-3 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-gold-light uppercase backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Tema {church.yearTheme.year} · {church.yearTheme.title}
          </motion.span>

          <motion.h1 {...fade(0.25)} className="mt-8 text-5xl leading-[1.05] font-semibold sm:text-6xl lg:text-7xl">
            Uma igreja para toda a <em className="text-gold-light">família</em>.
          </motion.h1>

          <motion.p {...fade(0.4)} className="mt-7 max-w-xl text-lg leading-8 text-white/75 sm:text-xl">
            {church.tagline}
          </motion.p>

          <motion.div {...fade(0.55)} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button to="/contato">Planeje sua visita</Button>
            <Button to="/mensagens" variant="outline">Assista às mensagens</Button>
          </motion.div>

          <motion.dl {...fade(0.7)} className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {church.services.map((s) => (
              <div key={s.name}>
                <dt className="text-[11px] font-semibold tracking-[0.18em] text-gold-light uppercase">{s.day}</dt>
                <dd className="mt-2 font-serif text-2xl sm:text-3xl">{s.time}</dd>
                <dd className="mt-1 text-xs text-white/60 sm:text-sm">{s.name}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </Container>

      <a href="#encontros" aria-label="Rolar para baixo" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-white/50 transition hover:text-gold-light md:block">
        <ChevronDown className="animate-bounce" />
      </a>
    </section>
  );
}
