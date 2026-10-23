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

export const defaultWa =
  "Hola Victoria, quiero agendar hora en el estudio. Vengo desde la página web.";

export type Faq = { q: string; a: string };

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Service = {
  slug: string;
  name: string;
  menu: string;
  group: "mirada" | "piel";
  seoTitle: string;
  description: string;
  h1: string;
  h1em: string;
  lead: string;
  includes: string[];
  blocks: Block[];
  faqs: Faq[];
  related: string[];
  waText: string;
};

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
    a: "Mirada y piel. En mirada: lash lifting, laminado de cejas, diseño de cejas y anime lashes. En piel: limpieza facial con el protocolo del estudio y rejuvenecimiento con dermapen y/o radiofrecuencia, cuando la piel lo permite.",
  },
  {
    q: "¿Cómo agendo hora?",
    a: "Por WhatsApp al +56 9 2602 6868. Indica el tratamiento, tu nombre y el día o el momento que te acomoda. La hora queda confirmada en el chat. En esta página no se guarda ningún dato.",
  },
  {
    q: "¿Publican los precios?",
    a: "El valor se confirma por WhatsApp según el tratamiento. Así evitas un número genérico que no corresponde a lo que tu pestaña o tu piel necesitan.",
  },
  {
    q: "¿El lash lifting usa mi pestaña?",
    a: "Sí. El lash lifting curva tu pestaña natural: no se agregan extensiones. Las anime lashes son otra técnica, con extensiones, volumen y definición. Si no tienes claro cuál te favorece, lo vemos por WhatsApp antes de agendar.",
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
    menu: "Curva tu pestaña natural y abre la mirada.",
    group: "mirada",
    seoTitle: "Lash lifting en Ovalle",
    description:
      "Lash lifting en Ovalle para curvar tu pestaña natural y lograr una mirada más abierta. Victoria Rivera Studio, Valle del Limarí. Agenda por WhatsApp.",
    h1: "Lash lifting",
    h1em: "en Ovalle",
    lead: "Una curva limpia sobre tu propia pestaña. La mirada se ve más abierta y despierta, sin el peso de una extensión y sin el maquillaje de todos los días.",
    includes: [
      "Valoración de tu pestaña antes de empezar",
      "Lifting de la pestaña natural",
      "Indicaciones de cuidado al salir",
    ],
    blocks: [
      {
        type: "p",
        text: "El lash lifting en Ovalle es el tratamiento de mirada de Victoria Rivera Studio para quien quiere realzar lo que ya tiene. Se trabaja la pestaña natural: se eleva y se curva para que el ojo se vea más abierto, con un acabado que se lee natural de cerca.",
      },
      {
        type: "h2",
        text: "Para quién tiene sentido",
      },
      {
        type: "ul",
        items: [
          "Quieres dejar la máscara para el diario, o usarla solo cuando te provoca.",
          "Tu pestaña es propia y buscas curva, no volumen agregado.",
          "Prefieres un resultado que acompañe tu cara y no una mirada recargada.",
        ],
      },
      {
        type: "p",
        text: "Si lo que buscas es volumen, picos y un efecto más marcado, el camino es [anime lashes](/servicios/anime-lashes-ovalle/). Son técnicas distintas y no se improvisan una sobre la otra el mismo día: lo definimos antes.",
      },
      {
        type: "h2",
        text: "Cómo es la sesión",
      },
      {
        type: "p",
        text: "Partimos mirando el estado de tu pestaña y la forma de tu ojo. El lifting se hace sobre la pestaña natural, con la curva que a tu mirada le sienta. No es un molde igual para todas. Al salir quedan claros los cuidados de las primeras horas.",
      },
      {
        type: "h2",
        text: "Cuidados después",
      },
      {
        type: "ul",
        items: [
          "Evita agua, vapor y sauna durante las primeras 24 horas.",
          "No frotes el párpado ni duermas de cara contra la almohada esa noche.",
          "Deja la máscara a prueba de agua para más adelante.",
          "Si hay ardor o enrojecimiento que no cede, escríbenos. No lo tapes con otro producto.",
        ],
      },
      {
        type: "p",
        text: careNote,
      },
      {
        type: "h2",
        text: "Cuánto dura el efecto",
      },
      {
        type: "p",
        text: "El resultado acompaña el ciclo de crecimiento de tu pestaña y suele mantenerse varias semanas. No es permanente: cuando la pestaña se renueva, la curva se va. Por eso el retoque se conversa según tu crecimiento, no con una fecha rígida de calendario.",
      },
      {
        type: "p",
        text: "Suele combinarse muy bien con [laminado de cejas](/servicios/laminado-de-cejas-ovalle/) cuando quieres que ceja y pestaña hablen el mismo idioma. Si además quieres perfilar la forma, mira el [diseño de cejas](/servicios/diseno-de-cejas-ovalle/).",
      },
    ],
    faqs: [
      {
        q: "¿El lash lifting daña la pestaña?",
        a: "Hecho sobre una pestaña en buen estado, y con la curva justa, busca realzarla sin quebrarla. Si la pestaña está muy frágil, teñida de más o irritada, se posterga. Eso se ve al inicio de la cita, no a mitad del procedimiento.",
      },
      {
        q: "¿Puedo hacerme lifting si uso extensiones?",
        a: "No sobre extensiones puestas. Primero se retiran y se evalúa cómo quedó tu pestaña natural. Si no está en condiciones, esperamos.",
      },
      {
        q: "¿Hacen lash lifting en Monte Patria o Punitaqui?",
        a: "La atención es en Ovalle. Si vienes desde Monte Patria, Punitaqui, Combarbalá o Río Hurtado, agendas por WhatsApp y coordinamos la hora.",
      },
    ],
    related: ["anime-lashes-ovalle", "laminado-de-cejas-ovalle", "diseno-de-cejas-ovalle"],
    waText:
      "Hola Victoria, quiero agendar lash lifting en Ovalle. ¿Qué días tienes hora?",
  },
  {
    slug: "laminado-de-cejas-ovalle",
    name: "Laminado de cejas",
    menu: "Orden y definición, sin ceja rígida.",
    group: "mirada",
    seoTitle: "Laminado de cejas en Ovalle",
    description:
      "Laminado de cejas y brow lamination en Ovalle. Cejas más ordenadas y definidas con Victoria Rivera Studio. Agenda tu hora por WhatsApp.",
    h1: "Laminado de cejas",
    h1em: "en Ovalle",
    lead: "El brow lamination ordena el vello que ya tienes: la ceja se ve más nutrida, peinada y definida, sin el trazo dibujado de un tatuaje.",
    includes: [
      "Lectura de la dirección de tu vello",
      "Laminado de cejas",
      "Peinado y forma al terminar",
    ],
    blocks: [
      {
        type: "p",
        text: "El laminado de cejas en Ovalle —también lo buscan como brow lamination— es para la ceja que crece hacia abajo, con huecos visuales o sin forma clara al despertar. Se redirige el vello para que la ceja se vea más llena y ordenada, usando el pelo propio.",
      },
      {
        type: "h2",
        text: "Qué no es",
      },
      {
        type: "ul",
        items: [
          "No es microblading ni micropigmentación. No se implanta pigmento.",
          "No reemplaza un diseño si la forma está fuera de lugar: a veces conviene partir por el [diseño de cejas](/servicios/diseno-de-cejas-ovalle/).",
          "No deja la ceja “congelada”. El objetivo es orden, no una pieza rígida.",
        ],
      },
      {
        type: "h2",
        text: "Cómo queda el conjunto",
      },
      {
        type: "p",
        text: "La ceja laminada enmarca el lifting. Si quieres las dos cosas, lo habitual en el estudio es pensarlas juntas: [lash lifting](/servicios/lash-lifting-ovalle/) para la curva de la pestaña y laminado para la ceja. En el mensaje de WhatsApp dinos si buscas solo ceja o el conjunto.",
      },
      {
        type: "h2",
        text: "Cuidados después",
      },
      {
        type: "ul",
        items: [
          "No mojes la ceja durante las primeras 24 horas. Eso incluye vapor y ejercicio fuerte.",
          "Evita dormir de lado apretando la ceja esa primera noche.",
          "Después, un cepillado suave mantiene la dirección.",
          "No apliques ácidos, retinol ni cera sobre la ceja recién laminada.",
        ],
      },
      {
        type: "p",
        text: `${careNote} El efecto suele durar varias semanas y se va con el crecimiento del vello. El siguiente laminado se agenda cuando la ceja lo pide, no antes.`,
      },
    ],
    faqs: [
      {
        q: "¿El laminado duele?",
        a: "Se siente el trabajo sobre la ceja, no un procedimiento invasivo. Si hay corte, irritación o un producto activo en la zona, se evalúa antes de seguir.",
      },
      {
        q: "¿Sirve si tengo poca ceja?",
        a: "Ordena y peina el vello que existe. No crea pelo donde no hay. Si la falta de ceja es marcada, te lo digo con honestidad antes de hacer el laminado.",
      },
      {
        q: "¿Puedo maquillar la ceja después?",
        a: "El primer día, no. Cuando ya pasó el plazo de cuidado, un gel suave basta: la idea del laminado es que necesites menos lápiz, no más capas.",
      },
    ],
    related: ["diseno-de-cejas-ovalle", "lash-lifting-ovalle", "anime-lashes-ovalle"],
    waText:
      "Hola Victoria, quiero agendar laminado de cejas en Ovalle. ¿Lo vemos solo o con lash lifting?",
  },
  {
    slug: "anime-lashes-ovalle",
    name: "Anime lashes",
    menu: "Volumen y picos suaves, mirada abierta.",
    group: "mirada",
    seoTitle: "Anime lashes en Ovalle",
    description:
      "Anime lashes en Ovalle: extensiones con volumen y definición, efecto de mirada abierta. Victoria Rivera Studio. Agenda por WhatsApp.",
    h1: "Anime lashes",
    h1em: "en Ovalle",
    lead: "Extensiones con técnica anime: volumen donde la mirada lo pide y picos que dibujan un ojo más abierto, definido, sin una cortina pareja.",
    includes: [
      "Diseño según tu ojo",
      "Aplicación de anime lashes",
      "Pauta de mantenimiento",
    ],
    blocks: [
      {
        type: "p",
        text: "Las anime lashes en Ovalle son extensiones. A diferencia del [lash lifting](/servicios/lash-lifting-ovalle/), aquí sí se agrega pelo para construir volumen y una definición en picos, el efecto de mirada amplia que se reconoce en la técnica. No es un abanico uniforme: los largos cambian para que el ojo se vea abierto y con carácter.",
      },
      {
        type: "h2",
        text: "Cómo se decide el diseño",
      },
      {
        type: "p",
        text: "Se mira la forma del ojo, la densidad de tu pestaña y qué tanto efecto quieres en el día a día. Un anime suave y uno más marcado no se aplican igual. Llegar con una referencia ayuda; la adaptación a tu ojo manda más que la foto.",
      },
      {
        type: "h2",
        text: "Mantenimiento",
      },
      {
        type: "p",
        text: "Las extensiones se van con la caída natural de tu pestaña. El relleno se agenda según ese ritmo, no cuando ya quedó la mitad. En la primera cita te decimos una ventana razonable para tu caso.",
      },
      {
        type: "h2",
        text: "Cuidados después",
      },
      {
        type: "ul",
        items: [
          "Las primeras horas, evita agua y vapor sobre los ojos.",
          "No uses aceite ni desmaquillante oleoso en la línea de las pestañas.",
          "No tires, no frotes y no duermas de cara contra la almohada.",
          "Cepilla con suavidad cuando esté indicado. No las pellizques para “ordenarlas”.",
        ],
      },
      {
        type: "p",
        text: careNote,
      },
      {
        type: "p",
        text: "Si tu búsqueda es la curva de la pestaña propia, sin mantenimiento de relleno, vuelve al [lash lifting](/servicios/lash-lifting-ovalle/). Si quieres enmarcar el resultado, el [laminado de cejas](/servicios/laminado-de-cejas-ovalle/) ordena la ceja en la misma lógica de mirada.",
      },
    ],
    faqs: [
      {
        q: "¿Las anime lashes se sienten pesadas?",
        a: "El peso depende del diseño y de tu pestaña. Un mapeo bien hecho no debería tirar del párpado. Si en la valoración la pestaña no sostiene el efecto que quieres, se baja la densidad o se elige otra técnica.",
      },
      {
        q: "¿Puedo mojarme la cara?",
        a: "Después del plazo inicial, sí, sin remojar ni frotar la línea de las pestañas. El vapor directo y los aceites son lo que más acorta la duración.",
      },
      {
        q: "¿Hacen anime lashes para quienes vienen de La Serena?",
        a: "La atención es en Ovalle, a unos 90 kilómetros de La Serena. Si vienes desde la costa o desde otra comuna del Limarí, se coordina la hora por WhatsApp.",
      },
    ],
    related: ["lash-lifting-ovalle", "laminado-de-cejas-ovalle", "diseno-de-cejas-ovalle"],
    waText:
      "Hola Victoria, quiero agendar anime lashes en Ovalle. Busco volumen y definición.",
  },
  {
    slug: "diseno-de-cejas-ovalle",
    name: "Diseño de cejas",
    menu: "La forma que le sienta a tu rostro.",
    group: "mirada",
    seoTitle: "Diseño de cejas en Ovalle",
    description:
      "Diseño de cejas en Ovalle: forma y perfilado según tu rostro, en Victoria Rivera Studio. Agenda por WhatsApp en el Valle del Limarí.",
    h1: "Diseño de cejas",
    h1em: "en Ovalle",
    lead: "Antes de depilar, se lee el rostro. El diseño deja una ceja que acompaña tu ojo y tu frente, no una plantilla repetida.",
    includes: [
      "Lectura de proporciones",
      "Diseño de la forma",
      "Perfilado de la ceja",
    ],
    blocks: [
      {
        type: "p",
        text: "El diseño de cejas en Ovalle parte por mirar: nacimiento, arco, cola y el espacio con el ojo. Recién ahí se limpia lo que sobra. El resultado tiene que seguir viéndose como tu ceja, solo que en su sitio.",
      },
      {
        type: "h2",
        text: "Diseño y laminado no son lo mismo",
      },
      {
        type: "p",
        text: "El diseño define la forma y perfila. El [laminado de cejas](/servicios/laminado-de-cejas-ovalle/) peina y fija la dirección del vello. Hay cejas que necesitan las dos cosas y cejas que con el diseño bastan. Si llegas con la ceja muy depilada, no se promete un laminado milagroso encima: primero se recupera forma.",
      },
      {
        type: "h2",
        text: "Qué esperar de la cita",
      },
      {
        type: "ul",
        items: [
          "Llega con la ceja sin lápiz reciente, o avisa si vienes maquillada para limpiar la zona.",
          "Se acuerda la forma antes de sacar vello. Lo que se depila no vuelve ese día.",
          "Si usas ácidos o retinoides cerca de la ceja, dilo al agendar.",
        ],
      },
      {
        type: "p",
        text: "Una ceja bien puesta cambia cómo se lee el [lash lifting](/servicios/lash-lifting-ovalle/) y las [anime lashes](/servicios/anime-lashes-ovalle/). La mirada es el conjunto, no una sola técnica aislada.",
      },
    ],
    faqs: [
      {
        q: "¿Hacen microblading?",
        a: "No. El diseño del estudio es forma y perfilado sobre tu ceja. No es un tatuaje ni una micropigmentación.",
      },
      {
        q: "¿Duele el perfilado?",
        a: "Se siente, y en piel sensible un poco más. Si la piel está irritada, con acné activo en la zona o recién exfoliada, se mueve la cita.",
      },
      {
        q: "¿Cada cuánto se rediseña?",
        a: "El perfilado de mantención sigue el crecimiento de tu vello. La primera visita es la más decisiva porque ahí queda la estructura; después se mantiene la forma, no se reinventa cada mes.",
      },
    ],
    related: ["laminado-de-cejas-ovalle", "lash-lifting-ovalle", "limpieza-facial-ovalle"],
    waText: "Hola Victoria, quiero agendar un diseño de cejas en Ovalle.",
  },
  {
    slug: "limpieza-facial-ovalle",
    name: "Limpieza facial",
    menu: "Protocolo completo, de la higiene al protector.",
    group: "piel",
    seoTitle: "Limpieza facial en Ovalle",
    description:
      "Limpieza facial en Ovalle con vaporozono, extracción, alta frecuencia, dermabrasión y masaje linfático. Victoria Rivera Studio. Agenda por WhatsApp.",
    h1: "Limpieza facial",
    h1em: "en Ovalle",
    lead: "Un protocolo de estudio, en orden: preparar la piel, extraer con criterio, calmar y cerrar siempre con hidratación y protector solar.",
    includes: [
      "Cleanser gel extra-suave",
      "Exfoliación",
      "Vaporozono",
      "Extracción de impurezas",
      "Alta frecuencia",
      "Dermabrasión",
      "Hidratación",
      "Masaje linfático",
      "Shock vitamínico con dermapen y/o radiofrecuencia, según la piel",
      "Protector solar",
    ],
    blocks: [
      {
        type: "p",
        text: "La limpieza facial en Ovalle de Victoria Rivera Studio no es un vapor y una crema. Es la secuencia del estudio: cleanser gel extra-suave, exfoliación, vaporozono, extracción de impurezas, alta frecuencia, dermabrasión, hidratación, masaje linfático y cierre con protector solar. El shock vitamínico con dermapen y/o radiofrecuencia entra solo si ese día tu piel lo permite.",
      },
      {
        type: "h2",
        text: "El orden importa",
      },
      {
        type: "p",
        text: "Primero se baja la barrera de célula muerta y se abre el poro con vaporozono (vapor con ozono). Recién ahí tiene sentido la extracción. La alta frecuencia viene después, como apoyo de higiene sobre la piel ya trabajada. La dermabrasión, la hidratación y el masaje linfático devuelven calma y luminosidad. Saltar pasos para “ir a lo rápido” deja la piel irritada y a medias.",
      },
      {
        type: "h2",
        text: "Qué hace cada paso",
      },
      {
        type: "ul",
        items: [
          "Cleanser gel extra-suave: saca el día sin dejar la piel tirante.",
          "Exfoliación: retira la célula opaca para que lo que viene penetre parejo.",
          "Vaporozono: ablanda y prepara la extracción.",
          "Extracción de impurezas: solo lo que está listo. No se fuerza un poro cerrado.",
          "Alta frecuencia: apoyo de higiene después de extraer.",
          "Dermabrasión: renueva textura de forma superficial.",
          "Hidratación: repone lo que la limpieza movió.",
          "Masaje linfático: descongestiona y baja la cara hinchada.",
          "Shock vitamínico con dermapen y/o radiofrecuencia: opcional, según valoración.",
          "Protector solar: la sesión no termina sin él.",
        ],
      },
      {
        type: "h2",
        text: "Para quién es",
      },
      {
        type: "p",
        text: "Para piel con poros cargados, opacidad o esa cara de cansancio que no se va con agua. No es un tratamiento médico ni promete borrar acné, manchas o arrugas. Si hay una dermatitis activa, un brote fuerte o un procedimiento dermatológico reciente, se posterga. Si buscas el foco en dermapen o radiofrecuencia, está desarrollado en [rejuvenecimiento facial](/servicios/rejuvenecimiento-facial-ovalle/).",
      },
      {
        type: "h2",
        text: "Después de la limpieza",
      },
      {
        type: "ul",
        items: [
          "Ese día evita sol directo, sauna y maquillaje pesado.",
          "No toques la zona extraída.",
          "Reaplica protector si vas a seguir al aire.",
          "Si hubo dermapen o radiofrecuencia, los cuidados de los días siguientes se explican antes de que salgas.",
        ],
      },
      {
        type: "p",
        text: careNote,
      },
    ],
    faqs: [
      {
        q: "¿La extracción deja la cara roja?",
        a: "Puede verse rosada al salir, sobre todo si había bastante poro cargado. Tiene que ir bajando. Enrojecimiento que arde o se extiende no es lo esperado: escríbenos.",
      },
      {
        q: "¿Siempre incluyen dermapen?",
        a: "No. En el protocolo va como shock vitamínico con dermapen y/o radiofrecuencia, según lo que la piel aguante ese día. Hay limpiezas que cierran sin ese paso y quedan bien hechas.",
      },
      {
        q: "¿Cada cuánto conviene una limpieza facial en Ovalle?",
        a: "Depende de tu piel y del sol del valle, no de una promo mensual. En la cita te decimos una frecuencia razonable. Más seguido no significa mejor.",
      },
    ],
    related: ["rejuvenecimiento-facial-ovalle", "diseno-de-cejas-ovalle", "lash-lifting-ovalle"],
    waText:
      "Hola Victoria, quiero agendar una limpieza facial en Ovalle. ¿Qué días tienes?",
  },
  {
    slug: "rejuvenecimiento-facial-ovalle",
    name: "Rejuvenecimiento facial",
    menu: "Dermapen y radiofrecuencia, solo si la piel lo pide.",
    group: "piel",
    seoTitle: "Rejuvenecimiento facial en Ovalle",
    description:
      "Rejuvenecimiento facial en Ovalle con dermapen y radiofrecuencia, dentro de un protocolo de piel. Victoria Rivera Studio. Agenda por WhatsApp.",
    h1: "Rejuvenecimiento facial",
    h1em: "en Ovalle",
    lead: "Dermapen y radiofrecuencia para una piel más luminosa y descansada. Se indican sobre una piel preparada, no como un aparato suelto.",
    includes: [
      "Valoración de la piel ese día",
      "Preparación previa del protocolo facial",
      "Dermapen y/o radiofrecuencia, según indicación",
      "Hidratación y protector solar",
    ],
    blocks: [
      {
        type: "p",
        text: "El rejuvenecimiento facial en Ovalle se apoya en el mismo criterio de la [limpieza facial](/servicios/limpieza-facial-ovalle/): primero la piel se limpia y se prepara, después se decide si entra un shock vitamínico con dermapen, radiofrecuencia, o ninguno. El “y/o” es parte del método. No todas las pieles reciben los dos el mismo día.",
      },
      {
        type: "h2",
        text: "Qué puedes esperar",
      },
      {
        type: "p",
        text: "Una piel de aspecto más parejo, luminoso y descansado. No es un tratamiento médico, no rellena surcos y no reemplaza una indicación dermatológica. Quien promete borrar arrugas en una sesión está vendiendo otra cosa.",
      },
      {
        type: "h2",
        text: "Cómo se elige la técnica",
      },
      {
        type: "ul",
        items: [
          "Dermapen: microestimulación. Se usa si la barrera de tu piel está en condiciones de recibirlo.",
          "Radiofrecuencia: calor controlado, buscando un aspecto más firme y descansado.",
          "Si la piel está sensible, bronceada de más o con un activo irritante encima, se hace la higiene y se deja el aparato para otro día.",
        ],
      },
      {
        type: "h2",
        text: "Antes de venir",
      },
      {
        type: "ul",
        items: [
          "Cuéntanos si usas retinoides, ácidos, isotretinoína o si tuviste un procedimiento reciente.",
          "Llega con la cara limpia, sin maquillaje de base.",
          "Si estás embarazada o con una infección cutánea, este tratamiento se posterga.",
        ],
      },
      {
        type: "p",
        text: "Los cuidados de los días siguientes —sol, maquillaje, activos— se entregan al cerrar la sesión, porque dependen de qué se hizo de verdad. No hay una receta única publicada que reemplace esa indicación.",
      },
    ],
    faqs: [
      {
        q: "¿Duele el dermapen?",
        a: "Se siente la pasada. La intensidad se ajusta. Si el dolor sale de lo tolerable, se detiene. No es una prueba de resistencia.",
      },
      {
        q: "¿Puedo tomar sol después en Ovalle?",
        a: "El sol del Limarí no perdona una piel recién trabajada. Protector, sombra y nada de exposición directa mientras dure el cuidado que te indiquemos.",
      },
      {
        q: "¿En una sesión se ve el cambio?",
        a: "La luminosidad inmediata puede notarse. Un cambio de textura, cuando ocurre, se construye con constancia y con la piel cuidada entre medio. No se agenda “el milagro” de una sola visita.",
      },
    ],
    related: ["limpieza-facial-ovalle", "diseno-de-cejas-ovalle", "lash-lifting-ovalle"],
    waText:
      "Hola Victoria, quiero consultar por rejuvenecimiento facial en Ovalle (dermapen / radiofrecuencia).",
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

export const businessId = `${siteUrl.replace(/\/$/, "")}/#studio`;

export function businessJsonLd() {
  return {
    "@type": "BeautySalon",
    "@id": businessId,
    name: site.name,
    alternateName: [site.shortName, site.handle],
    description:
      "Estudio de lash lifting, laminado de cejas, anime lashes, diseño de cejas y estética facial en Ovalle, Valle del Limarí.",
    url: absoluteUrl("/"),
    telephone: site.phoneTel,
    image: absoluteUrl("/og.png"),
    currenciesAccepted: "CLP",
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
      name: "Tratamientos de mirada y piel",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          url: absoluteUrl(`/servicios/${service.slug}/`),
          areaServed: "Ovalle, Coquimbo, Chile",
          provider: { "@id": businessId },
        },
      })),
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
