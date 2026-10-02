import church, { socialLinks } from "../data/church";

export const LogoMark = ({ className = "h-10 w-10" }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <rect width="48" height="48" rx="12" fill="currentColor" className="text-gold" />
    <path d="M24 9v30M15 19h18" stroke="#0f0d0a" strokeWidth="3.6" strokeLinecap="round" />
  </svg>
);

export const Logo = ({ light = true }) => (
  <span className="flex items-center gap-3">
    <LogoMark />
    <span className="leading-none">
      <span className={`block font-serif text-xl font-semibold ${light ? "text-white" : "text-ink"}`}>{church.shortName}</span>
      <span className={`mt-1 block text-[10px] font-semibold tracking-[0.42em] uppercase ${light ? "text-gold-light" : "text-gold-dark"}`}>Church</span>
    </span>
  </span>
);

const paths = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </>
  ),
  youtube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="m10 9.5 5 2.5-5 2.5z" fill="currentColor" />
    </>
  ),
};

export const SocialIcon = ({ name, size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {paths[name]}
  </svg>
);

export const SocialLinks = ({ className = "" }) =>
  socialLinks.length > 0 && (
  <div className={`flex gap-3 ${className}`}>
    {socialLinks.map(([name, href]) => (
      <a
        key={name}
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={name}
        className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition hover:border-gold hover:text-gold-light"
      >
        <SocialIcon name={name} />
      </a>
    ))}
  </div>
);
