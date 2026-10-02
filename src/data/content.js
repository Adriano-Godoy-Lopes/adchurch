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
  { icon: "Users", title: "Comunhão", description: "Construímos relacionamentos verdadeiros e caminhamos juntos." },
  { icon: "BookOpen", title: "Palavra", description: "Ensinamos a Bíblia de maneira clara, fiel e transformadora." },
  { icon: "HandHeart", title: "Serviço", description: "Servimos nossa cidade com generosidade e amor prático." },
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
  { title: "Culto da Família", date: "Todo domingo", time: "18h00", type: "Culto", description: "Nosso principal encontro semanal, para toda a família." },
  { title: "Culto de Ensino", date: "Toda quinta-feira", time: "20h00", type: "Culto", description: "Uma noite dedicada ao estudo da Palavra." },
  { title: "Conexão Jovem", date: "Em breve", time: "A confirmar", type: "Evento", description: "Encontro especial da nova geração com louvor e comunhão." },
];

export const pastors = [
  { name: "Pr. Douglas Garcia", role: "Pastor Presidente", bio: "Líder comprometido em servir pessoas e anunciar o evangelho com graça, fé e simplicidade.", image: img("photo-1560250097-0b93528c311a", 1000) },
];

export const messages = [
  { title: "Uma fé que transforma", speaker: "AD Vida Church", date: "Mensagem", youtubeId: "ScMzIvxBSi4" },
  { title: "Esperança para hoje", speaker: "AD Vida Church", date: "Mensagem", youtubeId: "ScMzIvxBSi4" },
];

export const gallery = [
  { src: images.worship, alt: "Momento de louvor" },
  { src: images.community, alt: "Comunhão entre irmãos" },
  { src: images.bible, alt: "Leitura da Bíblia" },
  { src: images.fellowship, alt: "Encontro de amigas" },
  { src: images.sanctuary, alt: "Templo" },
  { src: images.study, alt: "Estudo bíblico" },
  { src: img("photo-1529156069898-49953e39b3ac", 1200), alt: "Jovens reunidos" },
  { src: images.hero, alt: "Adoração" },
  { src: images.bibleTable, alt: "Bíblia aberta" },
];
