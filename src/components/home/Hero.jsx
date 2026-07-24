import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden bg-neutral-950 px-6 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.18),_transparent_45%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-5xl text-center"
      >
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.45em] text-amber-400 md:text-base">
          AD Vida Church
        </p>

        <h1 className="text-5xl font-bold leading-tight md:text-7xl">
          2026
          <span className="mt-2 block text-amber-400">
            O Ano da Colheita
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-neutral-300 md:text-xl">
          Uma igreja para toda a família, vivendo o amor de Deus e
          transformando vidas.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/contato"
            className="rounded-full bg-amber-400 px-8 py-4 font-semibold text-neutral-950 transition hover:bg-amber-300"
          >
            Visite-nos
          </Link>

          <Link
            to="/oracao"
            className="rounded-full border border-white/40 px-8 py-4 font-semibold text-white transition hover:border-amber-400 hover:text-amber-400"
          >
            Pedido de oração
          </Link>
        </div>
      </motion.div>
    </section>
  );
}