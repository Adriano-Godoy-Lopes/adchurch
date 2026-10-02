import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { whatsappLink } from "../data/church";
import { ministries } from "../data/content";
import { Button, Container, PageHero, Reveal } from "../components/UI";
import { MinistryCard } from "../components/home/MinistriesSection";
import NotFound from "./NotFound";

export default function Ministry() {
  const { slug } = useParams();
  const ministry = ministries.find((m) => m.slug === slug);
  if (!ministry) return <NotFound />;
  const others = ministries.filter((m) => m.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow={ministry.tag} title={ministry.name} copy={ministry.desc} image={ministry.image} />
      <section className="bg-white py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <Link to="/ministerios" className="inline-flex items-center gap-2 text-sm font-semibold text-gold-dark hover:text-ink">
              <ArrowLeft size={16} /> Todos os ministérios
            </Link>
            <h2 className="mt-8 text-3xl font-semibold sm:text-4xl">Faça parte do ministério {ministry.name}</h2>
            <p className="mt-6 text-base leading-8 text-stone">{ministry.desc} Nossos encontros acontecem ao longo do mês, com momentos de comunhão, estudo da Palavra e serviço. Fale com a liderança para saber os próximos passos.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-ink p-8 text-white">
              <h3 className="text-2xl font-semibold">Quero participar</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">Envie uma mensagem e nossa equipe entrará em contato com você.</p>
              <Button to={whatsappLink(`Olá! Quero participar do ministério ${ministry.name}.`)} className="mt-8 w-full">Falar no WhatsApp</Button>
            </div>
          </Reveal>
        </Container>
      </section>
      <section className="bg-cream py-24">
        <Container>
          <h2 className="text-3xl font-semibold">Outros ministérios</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {others.map((m) => <MinistryCard key={m.slug} ministry={m} />)}
          </div>
        </Container>
      </section>
    </>
  );
}
