// Dados institucionais centralizados. Campos vazios ficam ocultos no site.
const church = {
  name: "AD Vida Church",
  shortName: "AD Vida",
  slogan: "Uma igreja para toda a família",
  motto: "Paixão por vidas",
  tagline: "Vivendo o amor de Deus e transformando vidas.",
  yearTheme: { year: "2026", title: "O Ano da Colheita" },

  address: {
    street: "Rua Antônio Pinto Vieira, 135",
    district: "",
    city: "São Paulo - SP",
  },

  contact: {
    phone: "",
    whatsapp: "",
    email: "",
  },

  social: {
    instagram: "https://www.instagram.com/somosadvida/",
    youtube: "",
  },

  services: [
    { day: "Domingo", name: "Escola Bíblica", time: "10:00", description: "Estudo da Palavra para todas as idades." },
    { day: "Domingo", name: "Culto da Família", time: "18:00", description: "Celebração com louvor, Palavra e comunhão." },
    { day: "Quinta-feira", name: "Culto de Ensino", time: "20:00", description: "Ensino bíblico aplicado à vida." },
  ],
};

const { street, district, city } = church.address;
export const fullAddress = [street, [district, city].filter(Boolean).join(", ")].filter(Boolean).join(" — ");
export const whatsappLink = (text = "Olá! Gostaria de saber mais sobre a AD Vida Church.") =>
  church.contact.whatsapp ? `https://wa.me/${church.contact.whatsapp}?text=${encodeURIComponent(text)}` : null;
export const mapsLink = fullAddress ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}` : null;
export const mapsEmbed = fullAddress ? `https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed` : null;
export const socialLinks = Object.entries(church.social).filter(([, href]) => href);

export default church;
