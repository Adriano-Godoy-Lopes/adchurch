import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, BookOpen } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Amor",
    description: "Cuidamos de pessoas e famílias com fé, respeito e acolhimento.",
  },
  {
    icon: Users,
    title: "Comunhão",
    description: "Construímos relacionamentos e caminhamos juntos.",
  },
  {
    icon: BookOpen,
    title: "Palavra",
    description: "Ensinamos a Bíblia de maneira clara e transformadora.",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-neutral-950 px-6 py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
            Quem somos
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Uma igreja que ama Deus e cuida de pessoas
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
            Somos uma comunidade cristã formada por pessoas e famílias que
            desejam viver o evangelho, crescer na fé e servir ao próximo.
          </p>

          <Link
            to="/sobre"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-3 font-semibold text-neutral-950 transition hover:bg-amber-300"
          >
            Conheça nossa história
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
          {values.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <Icon className="text-amber-400" size={32} />

              <h3 className="mt-4 text-xl font-bold">{title}</h3>

              <p className="mt-2 leading-7 text-neutral-400">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}