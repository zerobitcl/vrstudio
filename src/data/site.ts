import { siteUrl } from "../../site.config.mjs";

export { siteUrl };

export const site = {
  name: "Victoria Rivera Studio",
  shortName: "VR Studio",
  person: "Victoria Rivera",
  handle: "@vr.studio_oficial",
  instagram: "https://www.instagram.com/vr.studio_oficial/",
  phoneE164: "56926026868",
  phoneDisplay: "+56 9 2602 6868",
  phoneTel: "+56926026868",
  city: "Ovalle",
  region: "Coquimbo",
  country: "CL",
  locale: "es_CL",
} as const;

export function waLink(message: string) {
  return `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(message)}`;
}

export function absoluteUrl(path: string) {
  const base = siteUrl.replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  let clean = path.startsWith("/") ? path : `/${path}`;
  const isFile = /\.[a-z0-9]+$/i.test(clean);
  if (!isFile && !clean.endsWith("/")) clean += "/";
  return `${base}${clean}`;
}

export function formatPrice(value: number) {
  return `$${value.toLocaleString("es-CL")}`;
}

export const defaultWa =
  "Hola Victoria, quiero agendar hora en el estudio. Vengo desde la página web.";

export type Faq = { q: string; a: string };

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type ServiceGroup = "mirada" | "piel" | "depilacion" | "cuerpo";

export type Service = {
  slug: string;
  name: string;
  menu: string;
  group: ServiceGroup;
  seoTitle: string;
  description: string;
  h1: string;
  h1em: string;
  lead: string;
  price?: number | null;
  priceNote?: string;
  variants?: { name: string; price: number | null; note?: string }[];
  includes: string[];
  blocks: Block[];
  faqs: Faq[];
  related: string[];
  waText: string;
  image?: string;
};

export const groupLabels: Record<ServiceGroup, string> = {
  mirada: "Mirada",
  piel: "Piel",
  depilacion: "Depilación",
  cuerpo: "Cuerpo",
};

export const gallery = [
  {
    src: "/galeria/lash-lifting-coriano-brow-lamination-01.jpg",
    alt: "Resultado de lash lifting coriano y brow lamination con diseño y tinte en Ovalle",
    caption: "Lash lifting coriano + brow lamination, diseño y tinte",
  },
  {
    src: "/galeria/lash-lifting-coriano-brow-lamination-02.jpg",
    alt: "Mirada con pestaña elevada y ceja laminada en Victoria Rivera Studio Ovalle",
    caption: "Mirada abierta, ceja definida",
  },
] as const;

export const areas = [
  {
    name: "Ovalle",
    text: "El estudio está en Ovalle. La dirección exacta se confirma por WhatsApp al agendar, para que llegues directo.",
  },
  {
    name: "Monte Patria",
    text: "Si vienes desde Monte Patria, escribe con el día que te acomoda y dejamos la hora coordinada.",
  },
  {
    name: "Punitaqui",
    text: "Desde Punitaqui se agenda igual: un mensaje con el tratamiento y un par de opciones de horario.",
  },
  {
    name: "Combarbalá",
    text: "Si el viaje es desde Combarbalá, conviene agendar con tiempo para que la visita quede en un solo trayecto.",
  },
  {
    name: "Río Hurtado",
    text: "Desde Río Hurtado también se coordina por WhatsApp. Cuéntanos el tratamiento y el día posible.",
  },
] as const;

export const homeFaqs: Faq[] = [
  {
    q: "¿Dónde está Victoria Rivera Studio?",
    a: "En Ovalle, Región de Coquimbo. La dirección se envía al confirmar la hora por WhatsApp, así llegas sin vueltas. También se agenda desde Monte Patria, Punitaqui, Combarbalá, Río Hurtado, y desde La Serena o Coquimbo si prefieres venir al valle.",
  },
  {
    q: "¿Qué tratamientos hacen?",
    a: "Mirada, piel, depilación y cuerpo. En mirada: lash lifting tradicional y coriano, laminado de cejas, diseño con visagismo y anime lashes. En piel: limpieza facial profunda o express, y rejuvenecimiento. También epilación hindú, depilación con cera, depilación láser y masajes con piedras calientes.",
  },
  {
    q: "¿Cómo agendo hora?",
    a: "Por WhatsApp al +56 9 2602 6868. Indica el tratamiento, tu nombre y el día o el momento que te acomoda. La hora queda confirmada en el chat. En esta página no se guarda ningún dato.",
  },
  {
    q: "¿Cuáles son los precios?",
    a: "Los precios de mirada, piel, epilación hindú y masajes están publicados en esta página. Depilación con cera y depilación láser se confirman por WhatsApp. El valor de un pack o combinación también se confirma en el chat.",
  },
  {
    q: "¿Qué diferencia hay entre lifting tradicional y coriano?",
    a: "El lifting tradicional curva tu pestaña natural. El lash lifting coriano (con color) suma definición y color para una mirada más marcada, siempre sobre tu pestaña. Si no sabes cuál te favorece, lo vemos por WhatsApp.",
  },
  {
    q: "¿Atienden si estoy embarazada o con la piel irritada?",
    a: "Cuéntalo al escribir. Embarazo, una infección en ojos o piel, o un tratamiento dermatológico en curso pueden hacer que una técnica se postergue. La indicación se conversa antes de la sesión, no se fuerza.",
  },
];

const careNote =
  "Esto es una orientación general. Si tu piel o tu pestaña piden otro cuidado, te lo indicamos en la cita.";

export const services: Service[] = [
  {
    slug: "lash-lifting-ovalle",
    name: "Lash lifting",
    menu: "Tradicional o coriano, sobre tu pestaña natural.",
    group: "mirada",
    seoTitle: "Lash lifting en Ovalle",
    description:
      "Lash lifting tradicional y lash lifting coriano en Ovalle. Desde $20.000. Victoria Rivera Studio, Valle del Limarí. Agenda por WhatsApp.",
    h1: "Lash lifting",
    h1em: "en Ovalle",
    lead: "Curva limpia sobre tu propia pestaña. El tradicional abre la mirada; el coriano suma color y definición, sin extensiones.",
    price: 20000,
    priceNote: "Desde el lifting tradicional",
    variants: [
      { name: "Lifting tradicional", price: 20000 },
      { name: "Lash lifting coriano (con color)", price: 30000 },
    ],
    includes: [
      "Valoración de tu pestaña",
      "Lifting tradicional o coriano",
      "Indicaciones de cuidado al salir",
    ],
    image: "/galeria/lash-lifting-coriano-brow-lamination-01.jpg",
    blocks: [
      {
        type: "p",
        text: "El lash lifting en Ovalle de Victoria Rivera Studio trabaja tu pestaña natural: la eleva y la curva para que el ojo se vea más abierto. No se agregan extensiones.",
      },
      {
        type: "h2",
        text: "Dos opciones",
      },
      {
        type: "ul",
        items: [
          "Lifting tradicional ($20.000): curva limpia, mirada natural.",
          "Lash lifting coriano con color ($30.000): la misma base, con más definición y color en la pestaña.",
        ],
      },
      {
        type: "p",
        text: "Si buscas volumen con extensiones, el camino es [anime lashes](/servicios/anime-lashes-ovalle/). Se combinan muy bien con [laminado de cejas](/servicios/laminado-de-cejas-ovalle/) cuando quieres ceja y pestaña en el mismo lenguaje.",
      },
      {
        type: "h2",
        text: "Cuidados después",
      },
      {
        type: "ul",
        items: [
          "Evita agua, vapor y sauna las primeras 24 horas.",
          "No frotes el párpado ni duermas de cara contra la almohada esa noche.",
          "Deja la máscara a prueba de agua para más adelante.",
        ],
      },
      { type: "p", text: careNote },
    ],
    faqs: [
      {
        q: "¿Cuál elijo: tradicional o coriano?",
        a: "Si quieres solo curva, el tradicional. Si quieres más definición y color sin máscara, el coriano. En el chat te orientamos según tu pestaña.",
      },
      {
        q: "¿El lifting daña la pestaña?",
        a: "Sobre una pestaña en buen estado, y con la curva justa, busca realzarla. Si está frágil o irritada, se posterga.",
      },
      {
        q: "¿Atienden desde Monte Patria o Punitaqui?",
        a: "La atención es en Ovalle. Si vienes de otra comuna del Limarí, agendas por WhatsApp.",
      },
    ],
    related: ["laminado-de-cejas-ovalle", "anime-lashes-ovalle", "diseno-de-cejas-ovalle"],
    waText: "Hola Victoria, quiero agendar lash lifting en Ovalle. ¿Tradicional o coriano?",
  },
  {
    slug: "laminado-de-cejas-ovalle",
    name: "Laminado de cejas",
    menu: "Brow lamination: orden y definición.",
    group: "mirada",
    seoTitle: "Laminado de cejas en Ovalle",
    description:
      "Laminado de cejas y brow lamination en Ovalle desde $20.000. Con diseño y tinte de regalo desde $25.000. Victoria Rivera Studio.",
    h1: "Laminado de cejas",
    h1em: "en Ovalle",
    lead: "El brow lamination peina y fija el vello que ya tienes. La ceja se ve más llena y ordenada, sin tatuaje ni pigmento.",
    price: 20000,
    variants: [
      { name: "Brow lamination", price: 20000 },
      {
        name: "Brow lamination + diseño de cejas",
        price: 25000,
        note: "Con tinte de regalo",
      },
    ],
    includes: [
      "Lectura de la dirección del vello",
      "Laminado de cejas",
      "Opción con diseño y tinte de regalo",
    ],
    image: "/galeria/lash-lifting-coriano-brow-lamination-02.jpg",
    blocks: [
      {
        type: "p",
        text: "El laminado de cejas en Ovalle —también brow lamination— redirige el vello para una ceja más definida. No es microblading: usa el pelo propio.",
      },
      {
        type: "h2",
        text: "Opciones y precios",
      },
      {
        type: "ul",
        items: [
          "Brow lamination: $20.000.",
          "Brow lamination + diseño de cejas: $25.000, con tinte de regalo.",
        ],
      },
      {
        type: "p",
        text: "Si solo quieres forma y perfilado, mira el [diseño de cejas](/servicios/diseno-de-cejas-ovalle/) con visagismo. El laminado suele ir junto al [lash lifting](/servicios/lash-lifting-ovalle/) cuando buscas la mirada completa.",
      },
      {
        type: "h2",
        text: "Cuidados después",
      },
      {
        type: "ul",
        items: [
          "No mojes la ceja las primeras 24 horas.",
          "Evita vapor, ejercicio fuerte y dormir apretando la ceja esa noche.",
          "Después, un cepillado suave mantiene la dirección.",
        ],
      },
      { type: "p", text: careNote },
    ],
    faqs: [
      {
        q: "¿El pack incluye tinte?",
        a: "Sí: brow lamination + diseño de cejas ($25.000) incluye tinte de regalo.",
      },
      {
        q: "¿Sirve si tengo poca ceja?",
        a: "Ordena el vello que existe. No crea pelo donde no hay. Si la falta es marcada, te lo decimos antes.",
      },
      {
        q: "¿Duele?",
        a: "Se siente el trabajo sobre la ceja, no un procedimiento invasivo. Si hay irritación, se evalúa antes.",
      },
    ],
    related: ["diseno-de-cejas-ovalle", "lash-lifting-ovalle", "epilacion-hindu-ovalle"],
    waText:
      "Hola Victoria, quiero agendar laminado de cejas en Ovalle. ¿Solo brow o con diseño?",
  },
  {
    slug: "diseno-de-cejas-ovalle",
    name: "Diseño de cejas",
    menu: "Forma y visagismo, según tu rostro.",
    group: "mirada",
    seoTitle: "Diseño de cejas en Ovalle",
    description:
      "Diseño de cejas con visagismo en Ovalle por $7.000. Victoria Rivera Studio. Agenda por WhatsApp.",
    h1: "Diseño de cejas",
    h1em: "en Ovalle",
    lead: "Antes de depilar, se lee el rostro. Diseño con visagismo para una ceja que acompaña tu ojo y tu frente.",
    price: 7000,
    priceNote: "Diseño de cejas + visagismo",
    includes: ["Visagismo", "Diseño de la forma", "Perfilado de la ceja"],
    blocks: [
      {
        type: "p",
        text: "El diseño de cejas en Ovalle parte por mirar proporciones: nacimiento, arco, cola y el espacio con el ojo. Recién ahí se perfila. Incluye visagismo: la forma se decide para tu cara, no con una plantilla.",
      },
      {
        type: "ul",
        items: [
          "Diseño de cejas + visagismo: $7.000.",
          "Si quieres ordenar el vello después, el [laminado de cejas](/servicios/laminado-de-cejas-ovalle/) peina y fija la dirección.",
          "El retoque de cejas ($5.000) mantiene la forma entre citas.",
        ],
      },
      {
        type: "p",
        text: "No es microblading ni micropigmentación. Es forma y perfilado sobre tu ceja.",
      },
    ],
    faqs: [
      {
        q: "¿Qué es el visagismo?",
        a: "Es leer las proporciones de tu rostro para elegir la forma de ceja que te favorece, antes de sacar vello.",
      },
      {
        q: "¿Hacen microblading?",
        a: "No. Este servicio es diseño y perfilado, no tatuaje ni pigmentación.",
      },
      {
        q: "¿Cada cuánto se rediseña?",
        a: "La primera visita fija la estructura. Después el retoque sigue el crecimiento de tu vello.",
      },
    ],
    related: ["laminado-de-cejas-ovalle", "epilacion-hindu-ovalle", "lash-lifting-ovalle"],
    waText: "Hola Victoria, quiero agendar diseño de cejas con visagismo en Ovalle.",
  },
  {
    slug: "anime-lashes-ovalle",
    name: "Anime lashes",
    menu: "Extensiones con volumen y picos definidos.",
    group: "mirada",
    seoTitle: "Anime lashes en Ovalle",
    description:
      "Anime lashes en Ovalle: extensiones con volumen y definición. Victoria Rivera Studio. Agenda por WhatsApp.",
    h1: "Anime lashes",
    h1em: "en Ovalle",
    lead: "Extensiones con técnica anime: volumen donde la mirada lo pide y picos que abren el ojo, sin una cortina pareja.",
    price: null,
    priceNote: "Valor por WhatsApp",
    includes: ["Diseño según tu ojo", "Aplicación de anime lashes", "Pauta de mantenimiento"],
    blocks: [
      {
        type: "p",
        text: "Las anime lashes en Ovalle son extensiones. A diferencia del [lash lifting](/servicios/lash-lifting-ovalle/), aquí sí se agrega pelo para construir volumen y definición en picos.",
      },
      {
        type: "p",
        text: "El valor se confirma por WhatsApp según el diseño. Si prefieres curva sobre tu pestaña natural, vuelve al lifting tradicional o coriano.",
      },
      {
        type: "h2",
        text: "Cuidados",
      },
      {
        type: "ul",
        items: [
          "Las primeras horas, evita agua y vapor.",
          "No uses aceites en la línea de las pestañas.",
          "No tires ni frotes. El relleno se agenda según tu caída natural.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuánto cuestan?",
        a: "El valor se confirma por WhatsApp según el mapeo y la densidad. Escríbenos con una referencia si tienes una.",
      },
      {
        q: "¿Se sienten pesadas?",
        a: "Un diseño bien hecho no debería tirar del párpado. Si tu pestaña no sostiene el efecto, se baja la densidad o se elige otra técnica.",
      },
    ],
    related: ["lash-lifting-ovalle", "laminado-de-cejas-ovalle", "diseno-de-cejas-ovalle"],
    waText: "Hola Victoria, quiero agendar anime lashes en Ovalle. Busco volumen y definición.",
  },
  {
    slug: "limpieza-facial-ovalle",
    name: "Limpieza facial",
    menu: "Profunda o express, con protocolo de estudio.",
    group: "piel",
    seoTitle: "Limpieza facial en Ovalle",
    description:
      "Limpieza facial profunda ($30.000) y express ($25.000) en Ovalle. Victoria Rivera Studio. Agenda por WhatsApp.",
    h1: "Limpieza facial",
    h1em: "en Ovalle",
    lead: "Dos ritmos: profunda, con el protocolo completo del estudio, o express cuando necesitas higiene y luminosidad en menos tiempo.",
    price: 25000,
    priceNote: "Desde la express",
    variants: [
      { name: "Limpieza facial express", price: 25000 },
      { name: "Limpieza facial profunda", price: 30000 },
    ],
    includes: [
      "Cleanser gel extra-suave",
      "Exfoliación y vaporozono",
      "Extracción con criterio",
      "Hidratación y protector solar",
    ],
    blocks: [
      {
        type: "p",
        text: "La limpieza facial en Ovalle no es un vapor y una crema. La profunda sigue la secuencia del estudio: cleanser, exfoliación, vaporozono, extracción, alta frecuencia, dermabrasión, hidratación, masaje linfático y cierre con protector. El shock vitamínico con dermapen y/o radiofrecuencia entra solo si la piel lo permite.",
      },
      {
        type: "h2",
        text: "Precios",
      },
      {
        type: "ul",
        items: [
          "Limpieza facial express: $25.000.",
          "Limpieza facial profunda: $30.000.",
        ],
      },
      {
        type: "p",
        text: "Si el foco es dermapen o radiofrecuencia, mira [rejuvenecimiento facial](/servicios/rejuvenecimiento-facial-ovalle/).",
      },
      {
        type: "h2",
        text: "Después",
      },
      {
        type: "ul",
        items: [
          "Ese día evita sol directo, sauna y maquillaje pesado.",
          "No toques la zona extraída.",
          "Reaplica protector si vas a seguir al aire.",
        ],
      },
      { type: "p", text: careNote },
    ],
    faqs: [
      {
        q: "¿Cuál elijo: express o profunda?",
        a: "Express para higiene y luminosidad. Profunda cuando hay más poro cargado o quieres el protocolo completo. Si dudas, lo vemos por WhatsApp.",
      },
      {
        q: "¿Siempre incluyen dermapen?",
        a: "No. Entra como shock vitamínico solo si la piel lo aguanta ese día.",
      },
    ],
    related: ["rejuvenecimiento-facial-ovalle", "masajes-piedras-calientes-ovalle", "diseno-de-cejas-ovalle"],
    waText: "Hola Victoria, quiero agendar limpieza facial en Ovalle. ¿Express o profunda?",
  },
  {
    slug: "rejuvenecimiento-facial-ovalle",
    name: "Rejuvenecimiento facial",
    menu: "Dermapen y radiofrecuencia, según la piel.",
    group: "piel",
    seoTitle: "Rejuvenecimiento facial en Ovalle",
    description:
      "Rejuvenecimiento facial en Ovalle con dermapen y radiofrecuencia. Victoria Rivera Studio. Agenda por WhatsApp.",
    h1: "Rejuvenecimiento facial",
    h1em: "en Ovalle",
    lead: "Dermapen y radiofrecuencia sobre una piel preparada. Se buscan luminosidad y un aspecto más descansado, no milagros de una sola sesión.",
    price: null,
    priceNote: "Valor por WhatsApp",
    includes: [
      "Valoración ese día",
      "Preparación facial",
      "Dermapen y/o radiofrecuencia",
      "Hidratación y protector",
    ],
    blocks: [
      {
        type: "p",
        text: "El rejuvenecimiento en Ovalle se apoya en la [limpieza facial](/servicios/limpieza-facial-ovalle/): primero se prepara la piel, después se decide si entra dermapen, radiofrecuencia, o ninguno.",
      },
      {
        type: "p",
        text: "No es un tratamiento médico y no reemplaza una indicación dermatológica. El valor se confirma por WhatsApp según lo que se haga ese día.",
      },
    ],
    faqs: [
      {
        q: "¿Duele el dermapen?",
        a: "Se siente la pasada. La intensidad se ajusta. Si sale de lo tolerable, se detiene.",
      },
      {
        q: "¿Puedo tomar sol después?",
        a: "El sol del Limarí no perdona una piel recién trabajada. Protector y sombra mientras dure el cuidado indicado.",
      },
    ],
    related: ["limpieza-facial-ovalle", "masajes-piedras-calientes-ovalle", "lash-lifting-ovalle"],
    waText:
      "Hola Victoria, quiero consultar por rejuvenecimiento facial en Ovalle (dermapen / radiofrecuencia).",
  },
  {
    slug: "epilacion-hindu-ovalle",
    name: "Epilación hindú",
    menu: "Threading de rostro, cejas y bozo.",
    group: "depilacion",
    seoTitle: "Epilación hindú en Ovalle",
    description:
      "Epilación hindú en Ovalle: rostro completo desde $10.000, con diseño de cejas $20.000. Retoque y bozo. Victoria Rivera Studio.",
    h1: "Epilación hindú",
    h1em: "en Ovalle",
    lead: "Threading con hilo para depilar con precisión. Ideal para rostro, cejas y bozo, sin cera caliente sobre la piel.",
    price: 10000,
    priceNote: "Desde rostro completo",
    variants: [
      { name: "Rostro completo", price: 10000 },
      { name: "Rostro completo + diseño de cejas", price: 20000 },
      { name: "Retoque de cejas", price: 5000 },
      { name: "Bozo", price: 2000 },
    ],
    includes: [
      "Depilación con hilo",
      "Opciones de rostro, cejas o bozo",
      "Indicaciones post sesión",
    ],
    blocks: [
      {
        type: "p",
        text: "La epilación hindú en Ovalle usa hilo (threading) para retirar el vello con control. Es una opción limpia para el rostro y especialmente útil en cejas finas o zonas sensibles a la cera.",
      },
      {
        type: "h2",
        text: "Precios",
      },
      {
        type: "ul",
        items: [
          "Rostro completo: $10.000.",
          "Rostro completo + diseño de cejas: $20.000.",
          "Retoque de cejas: $5.000.",
          "Bozo: $2.000.",
        ],
      },
      {
        type: "p",
        text: "También ofrecemos [depilación con cera](/servicios/depilacion-ovalle/) y depilación láser; esos valores se confirman por WhatsApp.",
      },
    ],
    faqs: [
      {
        q: "¿Duele más que la cera?",
        a: "Se siente, sobre todo la primera vez. Muchas personas lo prefieren en el rostro porque es más preciso. Si la piel está irritada, se posterga.",
      },
      {
        q: "¿Sirve para cejas?",
        a: "Sí. El retoque de cejas y el pack con diseño están pensados para mantener la forma entre citas.",
      },
    ],
    related: ["diseno-de-cejas-ovalle", "depilacion-ovalle", "laminado-de-cejas-ovalle"],
    waText: "Hola Victoria, quiero agendar epilación hindú en Ovalle.",
  },
  {
    slug: "depilacion-ovalle",
    name: "Depilación con cera y láser",
    menu: "Cera y láser: valor por WhatsApp.",
    group: "depilacion",
    seoTitle: "Depilación con cera y láser en Ovalle",
    description:
      "Depilación con cera y depilación láser en Ovalle. Victoria Rivera Studio. Consulta el valor y agenda por WhatsApp.",
    h1: "Depilación",
    h1em: "en Ovalle",
    lead: "Depilación con cera y depilación láser. El valor se confirma por WhatsApp según zona y sesión.",
    price: null,
    priceNote: "Valor por WhatsApp",
    variants: [
      { name: "Depilación con cera", price: null, note: "Consultar" },
      { name: "Depilación láser", price: null, note: "Consultar" },
    ],
    includes: ["Valoración de la zona", "Indicación de técnica", "Cuidados posteriores"],
    blocks: [
      {
        type: "p",
        text: "En Victoria Rivera Studio también se agenda depilación con cera y depilación láser en Ovalle. Los precios se confirman por WhatsApp según la zona y el número de sesiones.",
      },
      {
        type: "p",
        text: "Para el rostro con hilo, mira [epilación hindú](/servicios/epilacion-hindu-ovalle/). Para cejas, el [diseño](/servicios/diseno-de-cejas-ovalle/) define la forma antes de mantener.",
      },
    ],
    faqs: [
      {
        q: "¿Por qué no publican el precio de cera y láser?",
        a: "Depende de la zona y, en láser, del plan de sesiones. Preferimos darte el valor exacto por WhatsApp.",
      },
      {
        q: "¿Atienden piernas y axilas?",
        a: "Escríbenos la zona que buscas y te confirmamos disponibilidad y valor.",
      },
    ],
    related: ["epilacion-hindu-ovalle", "diseno-de-cejas-ovalle", "limpieza-facial-ovalle"],
    waText: "Hola Victoria, quiero consultar por depilación con cera / láser en Ovalle.",
  },
  {
    slug: "masajes-piedras-calientes-ovalle",
    name: "Masajes con piedras calientes",
    menu: "Relajación profunda con piedras calientes.",
    group: "cuerpo",
    seoTitle: "Masajes con piedras calientes en Ovalle",
    description:
      "Masajes con piedras calientes en Ovalle por $35.000. Victoria Rivera Studio. Agenda por WhatsApp.",
    h1: "Masajes con piedras calientes",
    h1em: "en Ovalle",
    lead: "Calor y presión controlada para soltar tensión. Una sesión de $35.000 pensada para descansar de verdad.",
    price: 35000,
    includes: [
      "Sesión con piedras calientes",
      "Trabajo de relajación",
      "Indicaciones al salir",
    ],
    blocks: [
      {
        type: "p",
        text: "El masaje con piedras calientes en Ovalle combina el trabajo manual con el calor de las piedras para bajar la tensión muscular. No es un tratamiento médico; es una sesión de bienestar.",
      },
      {
        type: "ul",
        items: ["Valor: $35.000 por sesión."],
      },
      {
        type: "p",
        text: "Si además quieres cuidar la cara el mismo día, conversamos si cabe una [limpieza facial](/servicios/limpieza-facial-ovalle/) en otra hora.",
      },
    ],
    faqs: [
      {
        q: "¿Cuánto dura?",
        a: "La duración exacta se confirma al agendar. El valor publicado es $35.000 por sesión.",
      },
      {
        q: "¿Hay contraindicaciones?",
        a: "Embarazo, fiebre, heridas abiertas o una indicación médica reciente pueden postergar la sesión. Cuéntanos al escribir.",
      },
    ],
    related: ["limpieza-facial-ovalle", "rejuvenecimiento-facial-ovalle", "lash-lifting-ovalle"],
    waText: "Hola Victoria, quiero agendar masaje con piedras calientes en Ovalle.",
  },
];

export function serviceBySlug(slug: string) {
  return services.find((item) => item.slug === slug);
}

export function relatedServices(service: Service) {
  return service.related
    .map((slug) => serviceBySlug(slug))
    .filter((item): item is Service => Boolean(item));
}

export function servicesByGroup(group: ServiceGroup) {
  return services.filter((service) => service.group === group);
}

export const businessId = `${siteUrl.replace(/\/$/, "")}/#studio`;

export function businessJsonLd() {
  return {
    "@type": "BeautySalon",
    "@id": businessId,
    name: site.name,
    alternateName: [site.shortName, site.handle],
    description:
      "Estudio de lash lifting, laminado de cejas, diseño de cejas, limpieza facial, epilación hindú y masajes en Ovalle, Valle del Limarí.",
    url: absoluteUrl("/"),
    telephone: site.phoneTel,
    image: [absoluteUrl("/logo.jpg"), absoluteUrl("/og.png"), ...gallery.map((item) => absoluteUrl(item.src))],
    currenciesAccepted: "CLP",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    areaServed: areas.map((area) => ({
      "@type": "City",
      name: `${area.name}, ${site.region}, Chile`,
    })),
    sameAs: [site.instagram],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tratamientos Victoria Rivera Studio",
      itemListElement: services.flatMap((service) => {
        if (service.variants?.length) {
          return service.variants.map((variant) => ({
            "@type": "Offer",
            name: variant.name,
            price: variant.price ?? undefined,
            priceCurrency: variant.price != null ? "CLP" : undefined,
            availability: "https://schema.org/InStock",
            url: absoluteUrl(`/servicios/${service.slug}/`),
            itemOffered: {
              "@type": "Service",
              name: variant.name,
              areaServed: "Ovalle, Coquimbo, Chile",
              provider: { "@id": businessId },
            },
          }));
        }
        return [
          {
            "@type": "Offer",
            name: service.name,
            price: service.price ?? undefined,
            priceCurrency: service.price != null ? "CLP" : undefined,
            availability: "https://schema.org/InStock",
            url: absoluteUrl(`/servicios/${service.slug}/`),
            itemOffered: {
              "@type": "Service",
              name: service.name,
              areaServed: "Ovalle, Coquimbo, Chile",
              provider: { "@id": businessId },
            },
          },
        ];
      }),
    },
  };
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}
