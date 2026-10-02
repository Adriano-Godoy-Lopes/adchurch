import church, { socialLinks } from "../data/church";

export const logoSrc = "/images/logo-advida.png";

export const Logo = ({ className = "h-11 w-auto" }) => (
  <img src={logoSrc} alt={church.name} width="649" height="297" className={className} />
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
