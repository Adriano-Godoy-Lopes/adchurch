const img = (id, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: img("photo-1478147427282-58a87a120781", 2000),
  worship: img("photo-1438232992991-995b7058bbb3", 1400),
  community: img("photo-1511632765486-a01980e01a18", 1200),
  fellowship: img("photo-1491438590914-bc09fcaaf77a", 1000),
  bible: img("photo-1504052434569-70ad5836ab65", 1200),
  bibleTable: img("photo-1445445290350-18a3b86e0b5a", 1200),
  sanctuary: img("photo-1519491050282-cf00c82424b4", 1400),
  study: img("photo-1529070538774-1843cb3265df", 1200),
};

export const values = [
  { icon: "Heart", title: "Amor", description: "Cuidamos de pessoas e famílias com fé, respeito e acolhimento." },
  { icon: "Users", title: "Comunhão", description: "Construímos relacionamentos e caminhamos juntos." },
  { icon: "BookOpen", title: "Palavra", description: "Ensinamos a Bíblia de maneira clara e transformadora." },
];

export const ministries = [
  { slug: "life-kids", name: "Life Kids", tag: "Crianças", desc: "Um lugar seguro e criativo para cada criança descobrir o amor de Jesus.", icon: "Sparkles", image: img("photo-1503454537195-1dcabb73ffb9") },
  { slug: "jovens", name: "Jovens", tag: "Nova geração", desc: "Uma geração apaixonada por Deus, pessoas e propósito.", icon: "Flame", image: img("photo-1529156069898-49953e39b3ac") },
  { slug: "mulheres", name: "Mulheres", tag: "Comunhão", desc: "Mulheres fortalecidas pela fé e conectadas em comunidade.", icon: "Heart", image: img("photo-1517841905240-472988babdf9") },
  { slug: "homens", name: "Homens", tag: "Propósito", desc: "Homens que lideram seus lares e sua cidade com integridade.", icon: "Shield", image: img("photo-1521737711867-e3b97375f902") },
  { slug: "louvor", name: "Louvor", tag: "Adoração", desc: "Servindo à igreja e celebrando a presença de Deus com música.", icon: "Music", image: img("photo-1516280440614-37939bbacd81") },
  { slug: "voluntarios", name: "Voluntários", tag: "Serviço", desc: "Talentos e dons em ação para tornar cada encontro inesquecível.", icon: "HandHeart", image: img("photo-1559027615-cd4628902d4a") },
  { slug: "projeto-cuide", name: "Projeto Cuide", tag: "Ação social", desc: "Amor prático que alcança e cuida de pessoas na nossa comunidade.", icon: "HandHelping", image: img("photo-1488521787991-ed7bbaae773c") },
];

export const events = [
  { title: "Culto dos Jovens", date: "Sábado, 03 de outubro", time: "18h00", type: "Jovens", description: "Uma noite especial na presença de Deus. Não venha sozinho: convide mais um!" },
  {
    title: "Conferência de Mulheres — Lapidadas",
    date: "23 e 24 de outubro",
    time: "19h30 · 18h30",
    type: "Conferência",
    description: "3ª Conferência de Mulheres da AD Vida Church: dois dias de palavra, louvor e comunhão na presença do Senhor.",
    image: "/images/conferencia-mulheres.jpg",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSffiV5BZjU41xCXJNo6RARPQY5fMp1u3XwfJfYcFfpQXaykNg/viewform",
    cta: "Fazer inscrição",
  },
];

export const pastors = [
  { name: "Pr. Douglas Garcia", role: "Pastor Sênior", bio: "“Em tudo Deus tem um propósito.”", image: "/images/pr-douglas-garcia.jpg", instagram: "https://www.instagram.com/pastordouglasgarcia/" },
  { name: "Pra. Barbara Garcia", role: "Pastora", bio: "Formada em Administração e Teologia.", image: "/images/pra-barbara-garcia.jpg", instagram: "https://www.instagram.com/barbaragarciia_/" },
];

export const messages = [
  { title: "Uma fé que transforma", speaker: "AD Vida Church", date: "Mensagem", youtubeId: "ScMzIvxBSi4" },
  { title: "Esperança para hoje", speaker: "AD Vida Church", date: "Mensagem", youtubeId: "ScMzIvxBSi4" },
];

export const gallery = [
  { src: "/images/culto-louvor.jpg", alt: "Louvor no culto da AD Vida Church" },
  { src: "/images/culto-oracao.jpg", alt: "Momento de oração na AD Vida Church" },
  { src: "/images/culto-pregacao.jpg", alt: "Pregação da Palavra na AD Vida Church" },
];
