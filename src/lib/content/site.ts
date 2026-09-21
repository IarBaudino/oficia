/**
 * Copy institucional aprobado.
 * Fuente: Manual de Identidad de Marca OFICIA + Propuesta de alcance.
 * No reescribir misión, visión ni frases de marca sin autorización.
 */

export const site = {
  name: "OFICIA",
  domain: "oficia.ar",
  tagline: "Saber hacer. Trabajar seguras. Crecer en red.",
  claim: "El oficio también es nuestro.",
  founders: "Danae y Estrella Salinas",

  whoWeAre:
    "Somos una empresa familiar fundada por Danae y Estrella Salinas. Como hermanas, emprendemos nuestro propio camino en el mundo de los oficios, aportando una mirada moderna, profesional e integral al mantenimiento y cuidado del hogar.",

  mission:
    "En Oficia brindamos servicios para el hogar de alta calidad, garantizando comodidad, tranquilidad y seguridad a nuestras clientas. Somos una empresa creada y conformada por mujeres profesionales, orientada a resolver las necesidades de cada vivienda, al tiempo que impulsamos el trabajo técnico femenino, la capacitación continua y la creación de redes de colaboración en el rubro.",

  vision:
    "Ser una plataforma de trabajo segura, profesional y en constante crecimiento para mujeres técnicas, donde la formación continua retroalimente la excelencia de nuestros servicios y consolidemos la confianza de quienes nos eligen día a día.",

  nucleus: [
    "Profesionalismo",
    "Confianza",
    "Seguridad",
    "Red",
    "Formación",
    "Calidad",
  ] as const,

  personality: [
    {
      title: "Profesional",
      text: "La marca transmite preparación, orden y criterio.",
    },
    {
      title: "Resolutiva",
      text: "Habla desde la acción y la capacidad de resolver.",
    },
    {
      title: "Confiable",
      text: "La claridad, la mediación y la seguridad son centrales.",
    },
    {
      title: "Contemporánea",
      text: "Visualmente actual, limpia y sin códigos anticuados de género.",
    },
    {
      title: "Cercana",
      text: "Acompaña y explica con claridad y respeto.",
    },
    {
      title: "Colaborativa",
      text: "El crecimiento individual se fortalece dentro de una red.",
    },
  ],

  phrases: {
    request:
      "Contanos qué necesitás. Nosotras te ayudamos a encontrar a la profesional indicada.",
    directory:
      "Conocé su especialidad, experiencia y zona de cobertura.",
    join: "Sumate a una red profesional para trabajar, aprender y crecer.",
  },

  audiences: {
    clients: {
      title: "Para las clientas",
      text: "Comodidad, tranquilidad, seguridad, calidad y confianza en quien ingresa a su hogar.",
    },
    professionals: {
      title: "Para las profesionales",
      text: "Trabajo técnico, capacitación continua, colaboración y una plataforma segura para crecer.",
    },
    difference: {
      title: "Diferencial",
      text: "OFICIA media el vínculo y construye una experiencia profesional alrededor del oficio.",
    },
  },

  ctas: {
    needService: "Necesito un servicio",
    join: "Quiero formar parte de OFICIA",
  },
} as const;

export const navLinks = [
  { href: "/servicios", label: "Servicios" },
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/como-funciona", label: "Cómo funciona" },
  { href: "/blog", label: "Blog" },
  { href: "/testimonios", label: "Testimonios" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const legalLinks = [
  { href: "/legal/privacidad", label: "Privacidad" },
  { href: "/legal/terminos", label: "Términos" },
  { href: "/legal/cookies", label: "Cookies" },
  { href: "/legal/datos-personales", label: "Datos personales" },
] as const;
