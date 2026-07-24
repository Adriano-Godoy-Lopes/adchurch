import { Link } from "react-router-dom";
import {
  Baby,
  Music,
  Users,
  Heart,
  Handshake,
  Church,
} from "lucide-react";

const ministries = [
  {
    title: "Infantil",
    description: "Ensino bíblico para crianças.",
    icon: Baby,
  },
  {
    title: "Louvor",
    description: "Adoração através da música.",
    icon: Music,
  },
  {
    title: "Jovens",
    description: "Comunhão e crescimento espiritual.",
    icon: Users,
  },
  {
    title: "Casais",
    description: "Fortalecendo famílias.",
    icon: Heart,
  },
  {
    title: "Evangelismo",
    description: "Compartilhando o Evangelho.",
    icon: Handshake,
  },
  {
    title: "Intercessão",
    description: "Oração e cuidado espiritual.",
    icon: Church,
  },
];

export default function MinistriesSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.35em] text-sm font-semibold text-amber-500">
            Ministérios
          </p>

          <h2 className="mt-4 text-4xl font-bold text-neutral-900">
            Servindo com propósito
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ministries.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-3xl border border-neutral-200 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <Icon className="text-amber-500" size={40} />

              <h3 className="mt-5 text-2xl font-bold">
                {title}
              </h3>

              <p className="mt-3 text-neutral-600">
                {description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/ministerios"
            className="rounded-full bg-amber-400 px-8 py-4 font-semibold text-neutral-900 transition hover:bg-amber-300"
          >
            Conheça todos os ministérios
          </Link>
        </div>
      </div>
    </section>
  );
}