import { HeartHandshake, Lock, Users } from "lucide-react";

import { images } from "../data/content";
import { prayerService } from "../services/api";
import { Container, PageHero, Reveal } from "../components/UI";
import ContactForm from "../components/ContactForm";

const promises = [
  { icon: HeartHandshake, title: "Oramos por você", text: "Nossa equipe de intercessão ora por cada pedido recebido." },
  { icon: Lock, title: "Sigilo total", text: "Seu pedido é tratado com respeito e confidencialidade." },
  { icon: Users, title: "Acompanhamento", text: "Se desejar, um pastor pode entrar em contato com você." },
];

export default function Prayer() {
  return (
    <>
      <PageHero eyebrow="Pedido de oração" title="Como podemos orar por você?" copy="“Lancem sobre Ele toda a sua ansiedade, porque Ele tem cuidado de vocês.” — 1 Pedro 5:7" image={images.bible} />
      <section className="bg-cream py-24 sm:py-32">
        <Container className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-8">
            {promises.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.08} className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ink text-gold"><Icon size={20} /></span>
                <div><h3 className="font-sans text-lg font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-stone">{text}</p></div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1} className="rounded-3xl border border-ink/10 bg-white p-6 shadow-[0_30px_80px_-50px_rgba(15,13,10,0.5)] sm:p-10">
            <ContactForm
              submit={prayerService.create}
              submitLabel="Enviar pedido"
              successTitle="Pedido recebido"
              successText="Obrigado por confiar em nós. Estaremos orando por você."
              whatsappText="Olá! Gostaria de deixar um pedido de oração."
              fields={[
                { name: "name", label: "Seu nome", required: true, placeholder: "Como podemos te chamar?" },
                { name: "phone", label: "Telefone (opcional)", type: "tel", placeholder: "(00) 00000-0000" },
                { name: "request", label: "Pedido de oração", type: "textarea", required: true, placeholder: "Compartilhe o que está no seu coração..." },
                { name: "wantsContact", label: "Gostaria que um pastor entrasse em contato comigo.", type: "checkbox" },
              ]}
            />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
