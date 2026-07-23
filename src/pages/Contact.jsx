import { useState } from "react";
import { Instagram, MapPin, MessageCircle } from "lucide-react";
import church from "../data/church";
import { SubmitButton } from "../components/UI";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function submit(e) {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  }

  return (
    <main className="container-site py-20">
      <p className="text-xs uppercase tracking-[.2em] text-yellow-600">
        Contato
      </p>

      <h1 className="mt-3 text-4xl font-bold">
        Vamos conversar
      </h1>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">

        <div className="space-y-6">

          <div className="flex gap-3">
            <MapPin className="text-yellow-600" />
            <p>{church.address}</p>
          </div>

          <a
            href={church.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex gap-3 hover:text-yellow-600"
          >
            <MessageCircle />
            WhatsApp
          </a>

          <a
            href={church.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex gap-3 hover:text-yellow-600"
          >
            <Instagram />
            Instagram
          </a>

          <iframe
            title="Mapa"
            className="h-72 w-full rounded-2xl"
            loading="lazy"
            src="https://www.google.com/maps?q=Rua%20Joaquim%20Afonso%20de%20Souza%20701%20Sao%20Paulo&output=embed"
          />
        </div>

        <form
          onSubmit={submit}
          className="rounded-3xl bg-zinc-100 p-8 dark:bg-zinc-900"
        >
          <label className="block mb-5">
            Nome
            <input
              className="mt-2 w-full border-b py-2 bg-transparent"
              required
            />
          </label>

          <label className="block mb-5">
            E-mail
            <input
              type="email"
              className="mt-2 w-full border-b py-2 bg-transparent"
              required
            />
          </label>

          <label className="block mb-6">
            Mensagem
            <textarea
              rows="5"
              className="mt-2 w-full border-b py-2 bg-transparent"
              required
            />
          </label>

          <SubmitButton>
            Enviar mensagem
          </SubmitButton>

          {sent && (
            <p className="mt-5 text-green-600">
              ✅ Mensagem enviada com sucesso!
            </p>
          )}
        </form>
      </div>
    </main>
  );
}