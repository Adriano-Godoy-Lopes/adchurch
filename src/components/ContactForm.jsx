import { useState } from "react";
import { CircleCheck, LoaderCircle, Send } from "lucide-react";

import { whatsappLink } from "../data/church";
import { Field } from "./UI";

export default function ContactForm({ fields, submit, submitLabel, successTitle, successText, whatsappText }) {
  const empty = Object.fromEntries(fields.map((f) => [f.name, f.type === "checkbox" ? false : ""]));
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("idle");

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await submit(form);
      setStatus("success");
      setForm(empty);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-start rounded-2xl border border-gold/40 bg-gold/10 p-8">
        <CircleCheck className="text-gold-dark" size={36} />
        <h3 className="mt-5 text-2xl font-semibold">{successTitle}</h3>
        <p className="mt-2 text-sm leading-7 text-stone">{successText}</p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-6 text-sm font-semibold text-gold-dark hover:text-ink">Enviar outra mensagem</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      {fields.map(({ name, label, type = "text", full, ...rest }) =>
        type === "checkbox" ? (
          <label key={name} className="flex items-start gap-3 text-sm text-stone sm:col-span-2">
            <input type="checkbox" name={name} checked={form[name]} onChange={onChange} className="mt-1 h-4 w-4 accent-[#c9a14a]" />
            {label}
          </label>
        ) : (
          <Field
            key={name}
            label={label}
            name={name}
            type={type === "textarea" ? undefined : type}
            as={type === "textarea" ? "textarea" : "input"}
            rows={type === "textarea" ? 6 : undefined}
            value={form[name]}
            onChange={onChange}
            className={full || type === "textarea" ? "sm:col-span-2" : ""}
            {...rest}
          />
        ),
      )}

      {status === "error" && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 sm:col-span-2">
          Não foi possível enviar agora.{" "}
          {whatsappLink(whatsappText) ? (
            <>
              <a href={whatsappLink(whatsappText)} target="_blank" rel="noreferrer" className="font-semibold underline">Fale conosco pelo WhatsApp</a>.
            </>
          ) : (
            "Tente novamente em alguns instantes."
          )}
        </p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white transition hover:bg-coal disabled:opacity-60"
        >
          {status === "sending" ? <LoaderCircle size={16} className="animate-spin" /> : <Send size={16} />}
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
