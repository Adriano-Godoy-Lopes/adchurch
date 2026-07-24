import { CalendarDays, Clock } from "lucide-react";

const services = [
  {
    day: "Quinta-feira",
    name: "Culto de Ensino",
    time: "20:00",
  },
  {
    day: "Domingo",
    name: "Escola Bíblica",
    time: "10:00",
  },
  {
    day: "Domingo",
    name: "Culto da Família",
    time: "18:00",
  },
];

export default function ServiceTimes() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-500">
            Participe conosco
          </p>

          <h2 className="mt-3 text-4xl font-bold text-neutral-900">
            Horários dos cultos
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            Você e sua família são muito bem-vindos em nossos encontros.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={`${service.day}-${service.time}`}
              className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <CalendarDays className="text-amber-500" size={34} />

              <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-amber-600">
                {service.day}
              </p>

              <h3 className="mt-2 text-2xl font-bold text-neutral-900">
                {service.name}
              </h3>

              <div className="mt-5 flex items-center gap-2 text-neutral-600">
                <Clock size={20} />
                <span>{service.time}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}