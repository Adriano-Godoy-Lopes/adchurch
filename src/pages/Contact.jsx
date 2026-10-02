import { whatsappLink } from "../data/church";
import { images } from "../data/content";
import { contactService } from "../services/api";
import { Container, PageHero, Reveal, SectionTitle } from "../components/UI";
import ContactForm from "../components/ContactForm";
import LocationSection from "../components/home/LocationSection";

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contato" title="Vamos conversar" copy="Tem alguma dúvida, quer planejar sua visita ou conhecer melhor a igreja? Fale com a gente." image={images.fellowship} />
      <section className="bg-cream py-24 sm:py-32">
        <Container className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionTitle eyebrow="Fale conosco" title="Responderemos o mais breve possível" copy={`Preencha o formulário${whatsappLink() ? " ou, se preferir, chame no WhatsApp" : ""}. Será um prazer atender você.`} />
          <Reveal className="rounded-3xl border border-ink/10 bg-white p-6 shadow-[0_30px_80px_-50px_rgba(15,13,10,0.5)] sm:p-10">
            <ContactForm
              submit={contactService.create}
              submitLabel="Enviar mensagem"
              successTitle="Mensagem enviada"
              successText="Obrigado pelo contato! Retornaremos em breve."
              whatsappText="Olá! Gostaria de falar com a AD Vida Church."
              fields={[
                { name: "name", label: "Nome", required: true, placeholder: "Seu nome completo" },
                { name: "email", label: "E-mail", type: "email", required: true, placeholder: "voce@email.com" },
                { name: "phone", label: "Telefone", type: "tel", full: true, placeholder: "(00) 00000-0000" },
                { name: "message", label: "Mensagem", type: "textarea", required: true, placeholder: "Como podemos ajudar?" },
              ]}
            />
          </Reveal>
        </Container>
      </section>
      <LocationSection />
    </>
  );
}
