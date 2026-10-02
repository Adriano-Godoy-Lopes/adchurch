import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock,
  Flame,
  HandHeart,
  HandHelping,
  Heart,
  Music,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";

export const icons = { BookOpen, Flame, HandHeart, HandHelping, Heart, Music, Shield, Sparkles, Users };

export const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>
);

const buttonStyles = {
  gold: "bg-gold text-ink hover:bg-gold-light",
  dark: "bg-ink text-white hover:bg-coal",
  outline: "border border-white/30 text-white hover:border-gold hover:text-gold-light",
  ghost: "border border-ink/15 text-ink hover:border-gold-dark hover:text-gold-dark",
};

export const Button = ({ children, to = "/", variant = "gold", className = "", icon = true, ...props }) => {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition duration-300 ${buttonStyles[variant]} ${className}`;
  const content = (
    <>
      {children}
      {icon && <ArrowRight size={16} />}
    </>
  );
  if (/^(https?:|mailto:|tel:)/.test(to)) {
    return (
      <a href={to} className={classes} target="_blank" rel="noreferrer" {...props}>
        {content}
      </a>
    );
  }
  return (
    <Link to={to} className={classes} {...props}>
      {content}
    </Link>
  );
};

export const Eyebrow = ({ children, light = false, className = "" }) => (
  <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] ${light ? "text-gold-light" : "text-gold-dark"} ${className}`}>
    <span className="h-px w-8 bg-current" />
    {children}
  </p>
);

export const SectionTitle = ({ eyebrow, title, copy, light = false, center = false, className = "" }) => (
  <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""} ${className}`}>
    {eyebrow && <Eyebrow light={light} className={center ? "justify-center" : ""}>{eyebrow}</Eyebrow>}
    <h2 className={`mt-4 text-3xl leading-tight font-semibold sm:text-4xl md:text-5xl ${light ? "text-white" : "text-ink"}`}>{title}</h2>
    {copy && <p className={`mt-5 text-base leading-8 ${light ? "text-white/70" : "text-stone"}`}>{copy}</p>}
  </div>
);

export const Reveal = ({ children, className = "", delay = 0 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const PageHero = ({ eyebrow, title, copy, image }) => (
  <section className="relative isolate overflow-hidden bg-ink pt-36 pb-20 text-white sm:pt-44 sm:pb-28">
    {image && <img src={image} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35" />}
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/70 via-ink/60 to-ink" />
    <Container>
      <Reveal className="max-w-3xl">
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1 className="mt-5 text-4xl leading-[1.1] font-semibold sm:text-5xl md:text-6xl">{title}</h1>
        {copy && <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{copy}</p>}
      </Reveal>
    </Container>
  </section>
);

export const EventCard = ({ event }) => (
  <article className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_20px_50px_-25px_rgba(15,13,10,0.35)]">
    <span className="w-fit rounded-full bg-gold/15 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-gold-dark uppercase">{event.type}</span>
    <h3 className="mt-5 text-2xl font-semibold">{event.title}</h3>
    {event.description && <p className="mt-3 text-sm leading-7 text-stone">{event.description}</p>}
    <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 border-t border-ink/10 pt-5 text-sm text-ink/80">
      <span className="flex items-center gap-2"><CalendarDays size={16} className="text-gold-dark" />{event.date}</span>
      <span className="flex items-center gap-2"><Clock size={16} className="text-gold-dark" />{event.time}</span>
    </div>
  </article>
);

export const Field = ({ label, as = "input", className = "", ...props }) => {
  const Tag = as;
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-xs font-semibold tracking-[0.14em] text-ink/70 uppercase">{label}</span>
      <Tag
        className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition placeholder:text-ink/35 focus:border-gold focus:ring-4 focus:ring-gold/15"
        {...props}
      />
    </label>
  );
};
