// Dados institucionais centralizados: atualize endereço, contatos e redes aqui.
const church = {
  name: "AD Vida Church",
  shortName: "AD Vida",
  slogan: "Uma igreja para toda a família",
  tagline: "Vivendo o amor de Deus e transformando vidas.",
  yearTheme: { year: "2026", title: "O Ano da Colheita", verse: "“A seara é realmente grande.” — Mateus 9:37" },

  address: {
    street: "Rua da Igreja, 100",
    district: "Centro",
    city: "São Paulo - SP",
  },

  contact: {
    phone: "(11) 90000-0000",
    whatsapp: "5511900000000",
    email: "contato@advidachurch.com.br",
  },

  social: {
    instagram: "#",
    youtube: "#",
    facebook: "#",
  },

  services: [
    { day: "Domingo", name: "Escola Bíblica", time: "10:00", description: "Estudo da Palavra para todas as idades." },
    { day: "Domingo", name: "Culto da Família", time: "18:00", description: "Celebração com louvor, Palavra e comunhão." },
    { day: "Quinta-feira", name: "Culto de Ensino", time: "20:00", description: "Ensino bíblico profundo e aplicado à vida." },
  ],
};

export const fullAddress = `${church.address.street} — ${church.address.district}, ${church.address.city}`;
export const whatsappLink = (text = "Olá! Gostaria de saber mais sobre a AD Vida Church.") =>
  `https://wa.me/${church.contact.whatsapp}?text=${encodeURIComponent(text)}`;
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
export const mapsEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;

export default church;
