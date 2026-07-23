import { Instagram } from "lucide-react";
import { pastors } from "../data/content";
import { SectionTitle } from "../components/UI";

export default function Pastors() {
  return (
    <main className="container-site py-20">
      <SectionTitle
        eyebrow="Liderança"
        title="Pastores que servem com amor."
      />

      <div className="grid max-w-4xl gap-8 md:grid-cols-2">
        {pastors?.map((p) => (
          <article
            key={p.name}
            className="overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900"
          >
            <img
              src={p.image}
              alt={p.name}
              className="h-96 w-full object-cover"
              onError={(e) => {
                e.target.src = "https://placehold.co/600x800?text=Pastor";
              }}
            />

            <div className="p-7">
              <p className="text-sm text-yellow-600">{p.role}</p>

              <h2 className="mt-2 text-2xl font-bold">
                {p.name}
              </h2>

              <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                {p.bio}
              </p>

              <a
                href="https://instagram.com/ad_vidaoficial"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-yellow-600 hover:underline"
              >
                <Instagram size={18} />
                Instagram
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}