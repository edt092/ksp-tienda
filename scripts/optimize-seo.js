/**
 * Script de Optimización SEO para Productos
 * - Reasigna productos de "variedades" a categorías correctas
 * - Genera descripciones únicas y persuasivas
 * - Mejora keywords y SEO
 */

const fs = require('fs');
const path = require('path');

// Cargar datos
const productsPath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log(`\n📦 Total de productos: ${products.length}`);

// ==========================================
// MAPEO DE CATEGORÍAS POR PALABRAS CLAVE
// ==========================================
const categoryMapping = [
  {
    keywords: ['termo', 'mug', 'vaso', 'botella', 'botilito', 'taza', 'jarra', 'cup'],
    categoryId: 'mugs-vasos-termos'
  },
  {
    keywords: ['morral', 'backpack', 'maletin', 'maletín', 'bolso', 'canguro', 'trolley', 'mochila', 'portafolio', 'neceser', 'cosmetiquera', 'lonchera', 'cooler bag'],
    categoryId: 'bolsos-mochilas'
  },
  {
    keywords: ['boligrafo', 'bolígrafo', 'lapicero', 'pluma', 'lapiz', 'lápiz', 'marcador', 'resaltador', 'portaminas', 'set escritura', 'stylus'],
    categoryId: 'escritura'
  },
  {
    keywords: ['paraguas', 'sombrilla', 'parasol'],
    categoryId: 'paraguas'
  },
  {
    keywords: ['llavero', 'keychain'],
    categoryId: 'llaveros'
  },
  {
    keywords: ['usb', 'power bank', 'powerbank', 'audifono', 'audífono', 'auricular', 'parlante', 'speaker', 'cargador', 'cable', 'mouse', 'teclado', 'hub', 'memoria', 'pendrive', 'bluetooth', 'smartwatch', 'reloj inteligente', 'tablet', 'soporte celular', 'porta celular'],
    categoryId: 'tecnologia'
  },
  {
    keywords: ['camiseta', 'polo', 'gorra', 'cachucha', 'chaleco', 'chaqueta', 'delantal', 'mandil', 'toalla', 'bufanda', 'pañuelo', 'bandana', 'sombrero', 'visera', 'guante'],
    categoryId: 'textiles'
  },
  {
    keywords: ['destornillador', 'herramienta', 'tool', 'linterna', 'lampara', 'lámpara', 'cinta metrica', 'cinta métrica', 'martillo', 'alicate', 'pinza', 'llave inglesa', 'multiherramienta', 'navaja', 'cutter'],
    categoryId: 'herramientas'
  },
  {
    keywords: ['auto', 'carro', 'vehiculo', 'vehículo', 'coche', 'llanta', 'neumático', 'parasol auto', 'ambientador auto', 'porta vaso auto'],
    categoryId: 'accesorios-auto'
  },
  {
    keywords: ['agenda', 'libreta', 'cuaderno', 'block', 'notas', 'organizador', 'carpeta', 'folder', 'porta documentos', 'clipboard', 'calculadora', 'reloj escritorio', 'porta lapices', 'portalápices'],
    categoryId: 'oficina'
  },
  {
    keywords: ['bambú', 'bambu', 'ecológico', 'ecologico', 'reciclado', 'biodegradable', 'corcho', 'fibra trigo', 'paja trigo', 'rPET', 'sostenible'],
    categoryId: 'ecologicos'
  },
  {
    keywords: ['gel antibacterial', 'jabón', 'jabon', 'crema', 'protector solar', 'bálsamo', 'balsamo', 'espejo', 'peine', 'cepillo dental', 'kit viaje', 'kit aseo', 'pastillero', 'botiquín', 'botiquin', 'vendas', 'kit primeros auxilios', 'lima', 'cortauñas', 'manicure'],
    categoryId: 'pharma-cuidado-personal'
  },
  {
    keywords: ['plato', 'bowl', 'cubiertos', 'cuchillo', 'tenedor', 'cuchara', 'tabla picar', 'abridor', 'destapador', 'sacacorchos', 'rallador', 'exprimidor', 'porta alimentos', 'lonchera', 'individuales', 'servilletas', 'mantel'],
    categoryId: 'hogar'
  }
];

// ==========================================
// PLANTILLAS DE DESCRIPCIONES POR CATEGORÍA
// ==========================================
const descriptionTemplates = {
  'mugs-vasos-termos': {
    shortDescriptions: [
      (name) => `${name} personalizado con tu logo. Mantiene bebidas a temperatura ideal. Perfecto para regalos corporativos en Ecuador.`,
      (name) => `Promociona tu marca con ${name}. Diseño premium y personalización profesional. Envíos a todo Ecuador.`,
      (name) => `${name} con grabado de tu logo. Ideal para campañas de marketing y obsequios empresariales en Quito y Guayaquil.`,
      (name) => `Impacta a tus clientes con ${name} personalizado. Calidad premium para regalos corporativos memorables.`,
      (name) => `${name}: el regalo corporativo perfecto. Personalización de alta calidad. Cotiza ahora en Ecuador.`
    ],
    stories: [
      (name) => `${name} no es solo un recipiente, es una herramienta de marketing que acompaña a tus clientes durante todo el día. Cada vez que toman un sorbo, tu marca está presente. Fabricado con materiales de primera calidad, ofrece durabilidad excepcional y un acabado que refleja la excelencia de tu empresa. Ideal para programas de fidelización, onboarding de empleados o regalos a clientes VIP.`,
      (name) => `Transforma cada momento del café en una oportunidad de branding con ${name}. Su diseño ergonómico y materiales premium garantizan que tus clientes lo usen diariamente, generando cientos de impresiones de marca. Perfecto para empresas que valoran la calidad y buscan diferenciarse en el mercado ecuatoriano.`,
      (name) => `${name} combina funcionalidad superior con elegancia corporativa. Diseñado para profesionales exigentes, mantiene las bebidas a la temperatura perfecta mientras proyecta una imagen de calidad. Tu logo grabado con precisión asegura una presencia de marca duradera que tus clientes apreciarán.`
    ]
  },
  'bolsos-mochilas': {
    shortDescriptions: [
      (name) => `${name} personalizado para tu empresa. Diseño profesional y amplio espacio. Ideal para regalos corporativos en Ecuador.`,
      (name) => `Promociona tu marca con ${name}. Resistente, funcional y personalizable. Envíos a Quito, Guayaquil y todo Ecuador.`,
      (name) => `${name} con tu logo bordado o estampado. Perfecto para equipos de trabajo y eventos corporativos.`,
      (name) => `Impresiona a tus clientes con ${name} de alta calidad. Personalización premium para tu marca.`,
      (name) => `${name}: funcionalidad y estilo para tu equipo. Múltiples compartimentos y personalización profesional.`
    ],
    stories: [
      (name) => `${name} es más que un accesorio, es un embajador móvil de tu marca. Diseñado con compartimentos inteligentes y materiales resistentes, acompaña a profesionales en su día a día. Tu logo visible en cada trayecto genera exposición constante, convirtiendo a cada usuario en promotor de tu empresa.`,
      (name) => `Cada detalle de ${name} está pensado para el profesional moderno. Costuras reforzadas, cierres de calidad y diseño ergonómico que cuida la espalda. Al personalizar con tu marca, entregas un regalo que será usado diariamente, maximizando el retorno de tu inversión en marketing.`,
      (name) => `${name} representa la perfecta combinación de practicidad y branding efectivo. Sus múltiples bolsillos organizan todo lo esencial mientras tu logo viaja por la ciudad. Un regalo corporativo que tus empleados y clientes realmente apreciarán y usarán constantemente.`
    ]
  },
  'escritura': {
    shortDescriptions: [
      (name) => `${name} personalizado con tu logo. Escritura suave y diseño elegante. El clásico regalo corporativo en Ecuador.`,
      (name) => `Promociona tu marca con ${name}. Miles de impresiones garantizadas. Ideal para ferias y eventos.`,
      (name) => `${name} grabado con tu logo. Calidad premium para una impresión duradera en tus clientes.`,
      (name) => `El ${name} perfecto para tu marca. Personalización profesional y precios competitivos en Ecuador.`,
      (name) => `${name}: el regalo promocional más efectivo. Alto impacto, bajo costo. Cotiza ahora.`
    ],
    stories: [
      (name) => `${name} es el artículo promocional por excelencia: económico, útil y con alto potencial de impresiones. Cada vez que alguien escribe con él, tu marca está presente. Su mecanismo suave y tinta de calidad garantizan una experiencia de escritura premium que refleja los valores de tu empresa.`,
      (name) => `Con ${name} personalizado, tu marca viaja de mano en mano. Es el regalo perfecto para ferias, conferencias y eventos corporativos. Su relación costo-beneficio es imbatible: miles de impresiones de marca por una inversión mínima. Disponible en múltiples colores para alinearse con tu identidad visual.`,
      (name) => `${name} transforma cada firma, cada nota, cada lista en una oportunidad de branding. Fabricado con materiales de calidad, ofrece una escritura fluida que tus clientes apreciarán. Un clásico del merchandising que nunca pasa de moda y siempre genera resultados.`
    ]
  },
  'tecnologia': {
    shortDescriptions: [
      (name) => `${name} personalizado con tu logo. Tecnología útil que tus clientes amarán. Regalos corporativos premium en Ecuador.`,
      (name) => `Impacta con ${name} de alta tecnología. Personalización profesional para marcas innovadoras.`,
      (name) => `${name}: el regalo tech que genera recordación. Logo grabado con precisión. Envíos a todo Ecuador.`,
      (name) => `Promociona tu marca con ${name}. Funcionalidad moderna y diseño atractivo. Cotiza ahora.`,
      (name) => `${name} personalizado para empresas innovadoras. Calidad premium y tecnología de punta.`
    ],
    stories: [
      (name) => `${name} posiciona tu marca en la vanguardia tecnológica. En la era digital, regalar tecnología útil demuestra que tu empresa entiende las necesidades modernas. Cada uso refuerza la asociación de tu marca con innovación y calidad. Perfecto para clientes tech-savvy y equipos jóvenes.`,
      (name) => `Con ${name}, tu marca se integra en la vida digital de tus clientes. Este gadget combina funcionalidad real con presencia de marca constante. Ideal para startups, empresas de tecnología o cualquier marca que quiera proyectar una imagen moderna e innovadora en el mercado ecuatoriano.`,
      (name) => `${name} es el regalo corporativo que realmente impresiona. Alta percepción de valor, uso frecuente y excelente superficie para tu logo. Transforma cada carga, cada conexión, cada uso en una impresión de marca que perdura en la mente de tus clientes.`
    ]
  },
  'textiles': {
    shortDescriptions: [
      (name) => `${name} personalizado con bordado o estampado de tu logo. Convierte a tu equipo en embajadores de marca.`,
      (name) => `Promociona tu marca con ${name} de calidad. Telas premium y personalización profesional en Ecuador.`,
      (name) => `${name} corporativo con tu identidad visual. Ideal para uniformes, eventos y merchandising.`,
      (name) => `Impacta con ${name} personalizado. Alta visibilidad de marca en cada uso. Cotiza en Ecuador.`,
      (name) => `${name}: publicidad móvil para tu empresa. Bordado premium y materiales duraderos.`
    ],
    stories: [
      (name) => `${name} transforma a cada usuario en un embajador móvil de tu marca. Fabricado con telas de calidad que resisten múltiples lavados manteniendo colores vibrantes y forma impecable. El bordado o estampado profesional asegura que tu logo luzca perfecto en cada ocasión.`,
      (name) => `Con ${name} personalizado, tu marca recorre las calles, oficinas y eventos. Es publicidad que la gente realmente quiere usar. Comodidad, estilo y durabilidad se combinan para crear un producto promocional de alto impacto. Ideal para uniformes corporativos o regalos a clientes especiales.`,
      (name) => `${name} es la forma más visible de promocionar tu marca. Cada vez que alguien lo usa, genera decenas de impresiones. Nuestros materiales premium garantizan comodidad duradera, mientras tu logo bordado o estampado mantiene una presencia impecable lavado tras lavado.`
    ]
  },
  'herramientas': {
    shortDescriptions: [
      (name) => `${name} personalizado con tu logo. Útil, duradero y memorable. Regalo corporativo práctico en Ecuador.`,
      (name) => `Promociona tu marca con ${name}. Herramienta de calidad que tus clientes conservarán por años.`,
      (name) => `${name} grabado con tu logo. Perfecto para industrias, construcción y servicios técnicos.`,
      (name) => `Impacta con ${name} personalizado. Utilidad real que genera recordación de marca duradera.`,
      (name) => `${name}: el regalo promocional que nunca se olvida. Calidad profesional, precio accesible.`
    ],
    stories: [
      (name) => `${name} es el regalo promocional que demuestra el compromiso de tu marca con la calidad y la utilidad. Cada vez que se use para resolver un problema, tu empresa será recordada como la que proporcionó la solución. Fabricado con materiales resistentes para años de uso confiable.`,
      (name) => `Con ${name} personalizado, tu marca se asocia con profesionalismo y practicidad. Es el tipo de regalo que nunca se descarta: siempre hay un momento en que resulta indispensable. Tu logo grabado o impreso permanece visible en talleres, hogares y oficinas de tus clientes.`,
      (name) => `${name} combina funcionalidad profesional con branding efectivo. Ideal para empresas de construcción, servicios técnicos o cualquier industria que valore herramientas de calidad. Cada uso refuerza la asociación de tu marca con soluciones prácticas y duraderas.`
    ]
  },
  'oficina': {
    shortDescriptions: [
      (name) => `${name} personalizado con tu logo. Organiza el escritorio mientras promocionas tu marca en Ecuador.`,
      (name) => `Promociona tu marca con ${name}. Presente en el día a día de tus clientes y colaboradores.`,
      (name) => `${name} corporativo con personalización premium. Ideal para onboarding y regalos empresariales.`,
      (name) => `Impacta con ${name} personalizado. Funcionalidad que mantiene tu marca siempre visible.`,
      (name) => `${name}: organización y branding en uno. Calidad premium para empresas exigentes.`
    ],
    stories: [
      (name) => `${name} mantiene tu marca presente en el espacio de trabajo más importante: el escritorio. Cada vez que un cliente o colaborador organiza sus tareas, tu logo está ahí. Fabricado con materiales premium que reflejan la calidad de tu empresa.`,
      (name) => `Con ${name} personalizado, tu marca se integra en la rutina diaria de profesionales. Es el tipo de artículo que se usa constantemente, generando exposición continua. Perfecto para programas de bienvenida a empleados o regalos a clientes frecuentes.`,
      (name) => `${name} es funcionalidad que habla de tu marca. Diseño profesional y materiales de calidad que elevan cualquier espacio de trabajo mientras tu logo genera impresiones constantes durante toda la jornada laboral.`
    ]
  },
  'ecologicos': {
    shortDescriptions: [
      (name) => `${name} ecológico personalizado. Demuestra el compromiso ambiental de tu marca en Ecuador.`,
      (name) => `Promociona tu marca con ${name} sostenible. Materiales eco-friendly y personalización premium.`,
      (name) => `${name}: regalo corporativo que cuida el planeta. Bambú, corcho o materiales reciclados con tu logo.`,
      (name) => `Impacta con ${name} ecológico. Asocia tu marca con responsabilidad ambiental y calidad.`,
      (name) => `${name} sostenible: el regalo que tus clientes conscientes amarán. Cotiza en Ecuador.`
    ],
    stories: [
      (name) => `${name} demuestra que tu marca se preocupa por el futuro del planeta. Fabricado con materiales sostenibles como bambú, corcho o plástico reciclado, ofrece funcionalidad premium con huella ecológica reducida. Conecta con la creciente audiencia de consumidores conscientes en Ecuador.`,
      (name) => `Con ${name}, tu marca hace una declaración de principios. Los productos ecológicos no son solo tendencia, son el futuro del merchandising responsable. Cada vez que un cliente lo use, refuerza la asociación de tu empresa con sostenibilidad y conciencia ambiental.`,
      (name) => `${name} combina responsabilidad ambiental con calidad excepcional. Materiales naturales o reciclados que no comprometen funcionalidad. El regalo perfecto para empresas que quieren liderar con el ejemplo en sostenibilidad mientras promocionan su marca efectivamente.`
    ]
  },
  'paraguas': {
    shortDescriptions: [
      (name) => `${name} personalizado con tu logo. Gran visibilidad de marca en días lluviosos. Envíos en Ecuador.`,
      (name) => `Promociona tu marca con ${name}. Amplia superficie para tu logo y protección de calidad.`,
      (name) => `${name} corporativo con estampado de alta definición. Ideal para regalos empresariales premium.`,
      (name) => `Impacta con ${name} personalizado. Tu marca visible en calles y eventos. Cotiza ahora.`,
      (name) => `${name}: publicidad móvil en cualquier clima. Estructura resistente y personalización profesional.`
    ],
    stories: [
      (name) => `${name} ofrece la mayor superficie de branding disponible en un artículo promocional. En días lluviosos, tu logo se convierte en un anuncio móvil visible a metros de distancia. Estructura resistente al viento y tela impermeable de calidad garantizan durabilidad y satisfacción del usuario.`,
      (name) => `Con ${name} personalizado, cada día de lluvia es una oportunidad de marketing. La amplia superficie permite diseños creativos que realmente destacan. Es el regalo que tus clientes usarán temporada tras temporada, generando impresiones de marca en cada uso.`,
      (name) => `${name} combina protección confiable con visibilidad excepcional de marca. Apertura suave, varillas resistentes y tela de calidad que mantiene los colores vibrantes. Un clásico del merchandising que nunca pasa de moda, especialmente en el clima variado de Ecuador.`
    ]
  },
  'llaveros': {
    shortDescriptions: [
      (name) => `${name} personalizado con tu logo. Económico y de alto impacto. El favorito para eventos en Ecuador.`,
      (name) => `Promociona tu marca con ${name}. Uso diario garantizado y máxima exposición de logo.`,
      (name) => `${name} grabado o impreso con tu marca. Perfecto para grandes volúmenes y presupuestos ajustados.`,
      (name) => `Impacta con ${name} personalizado. Pequeño en tamaño, grande en recordación de marca.`,
      (name) => `${name}: el regalo promocional clásico que siempre funciona. Miles de impresiones por centavos.`
    ],
    stories: [
      (name) => `${name} es el artículo promocional con mejor relación costo-impresión del mercado. Viaja en bolsillos y bolsos, acompañando a tus clientes en cada momento. Cada vez que buscan sus llaves, tu marca está ahí. Ideal para distribución masiva en ferias y eventos.`,
      (name) => `Con ${name} personalizado, tu marca se vuelve parte esencial del día a día. Es el regalo que nadie descarta porque cumple una función indispensable. Múltiples diseños y materiales permiten alinearlo perfectamente con la identidad visual de tu empresa.`,
      (name) => `${name} demuestra que el tamaño no importa cuando se trata de branding efectivo. Este pequeño embajador de marca genera impresiones constantes con una inversión mínima. Perfecto para startups, pequeñas empresas o grandes corporaciones con campañas de alto volumen.`
    ]
  },
  'pharma-cuidado-personal': {
    shortDescriptions: [
      (name) => `${name} personalizado con tu logo. Demuestra que tu marca se preocupa por el bienestar. Ecuador.`,
      (name) => `Promociona tu marca con ${name}. Regalo útil que genera conexión emocional con tus clientes.`,
      (name) => `${name} corporativo con personalización premium. Ideal para sector salud y bienestar.`,
      (name) => `Impacta con ${name} personalizado. Cuidado personal con la imagen de tu marca.`,
      (name) => `${name}: el regalo que demuestra empatía. Calidad premium para marcas que cuidan a sus clientes.`
    ],
    stories: [
      (name) => `${name} comunica que tu marca se preocupa por el bienestar de sus clientes. Es el tipo de regalo que genera conexión emocional: útil, personal y thoughtful. Perfecto para empresas del sector salud, farmacias o cualquier marca que quiera proyectar cuidado genuino.`,
      (name) => `Con ${name} personalizado, tu marca acompaña momentos de autocuidado. Es un regalo que se usa en la intimidad, creando asociaciones positivas duraderas. Calidad premium que refleja el compromiso de tu empresa con el bienestar de sus clientes y colaboradores.`,
      (name) => `${name} transforma productos de cuidado personal en embajadores de marca. Cada uso refuerza la idea de que tu empresa se preocupa por sus clientes más allá de lo comercial. Ideal para programas de fidelización y regalos corporativos con significado.`
    ]
  },
  'hogar': {
    shortDescriptions: [
      (name) => `${name} personalizado con tu logo. Tu marca presente en el hogar de tus clientes. Ecuador.`,
      (name) => `Promociona tu marca con ${name}. Uso diario en cocina y hogar garantiza alta exposición.`,
      (name) => `${name} corporativo con personalización premium. Ideal para campañas de fidelización.`,
      (name) => `Impacta con ${name} personalizado. Funcionalidad hogareña con presencia de marca.`,
      (name) => `${name}: tu marca en el corazón del hogar. Calidad premium para uso diario.`
    ],
    stories: [
      (name) => `${name} lleva tu marca al espacio más íntimo: el hogar. Cada vez que se prepara una comida o se organiza la cocina, tu logo está presente. Es el tipo de regalo que se integra en la rutina familiar, generando impresiones constantes en un ambiente positivo.`,
      (name) => `Con ${name} personalizado, tu marca se vuelve parte de los momentos especiales en casa. Fabricado con materiales seguros y duraderos que resisten el uso diario. Perfecto para campañas dirigidas a familias o programas de fidelización de largo plazo.`,
      (name) => `${name} combina utilidad práctica con branding efectivo en el hogar. Cada preparación, cada comida compartida se convierte en una exposición de marca. Un regalo que realmente se usa y se aprecia, generando asociaciones positivas duraderas con tu empresa.`
    ]
  },
  'accesorios-auto': {
    shortDescriptions: [
      (name) => `${name} personalizado con tu logo. Tu marca viaja con tus clientes. Envíos en Ecuador.`,
      (name) => `Promociona tu marca con ${name}. Presente en cada viaje y trayecto diario.`,
      (name) => `${name} corporativo para flotas y clientes. Visibilidad de marca en movimiento.`,
      (name) => `Impacta con ${name} personalizado. Funcionalidad automotriz con presencia de marca.`,
      (name) => `${name}: tu marca en cada kilómetro. Calidad premium para conductores exigentes.`
    ],
    stories: [
      (name) => `${name} mantiene tu marca presente en cada trayecto. Ya sea el commute diario o viajes de carretera, tu logo acompaña a tus clientes. Ideal para concesionarios, empresas de transporte o cualquier marca que quiera asociarse con movilidad y libertad.`,
      (name) => `Con ${name} personalizado, tu marca viaja miles de kilómetros. Es el tipo de regalo práctico que los conductores realmente aprecian y usan constantemente. Materiales resistentes a las condiciones del vehículo garantizan durabilidad y exposición prolongada.`,
      (name) => `${name} transforma el interior del vehículo en espacio de branding. Cada vez que un cliente conduce, tu marca está presente. Perfecto para campañas dirigidas a profesionales en movimiento, flotas empresariales o programas de fidelización de concesionarios.`
    ]
  },
  'novedades': {
    shortDescriptions: [
      (name) => `${name} personalizado: lo más nuevo en productos promocionales. Sorprende a tus clientes en Ecuador.`,
      (name) => `Promociona tu marca con ${name}. Innovación y diseño único que destaca en cualquier evento.`,
      (name) => `${name}: la última tendencia en regalos corporativos. Personalización premium disponible.`,
      (name) => `Impacta con ${name} personalizado. Producto novedoso que genera conversación y recordación.`,
      (name) => `${name}: sé el primero en sorprender a tus clientes. Diseño innovador y calidad premium.`
    ],
    stories: [
      (name) => `${name} representa lo último en tendencias de productos promocionales. Ser el primero en ofrecer algo novedoso posiciona a tu marca como innovadora y a la vanguardia. El factor sorpresa genera conversaciones y compartidos en redes sociales, amplificando tu alcance.`,
      (name) => `Con ${name}, tu marca demuestra que está atenta a las últimas tendencias. Los productos novedosos generan mayor impacto porque destacan entre los regalos corporativos tradicionales. Es la forma de decir "pensamos diferente" sin palabras.`,
      (name) => `${name} ofrece el elemento sorpresa que todo marketero busca. Cuando un regalo promocional es diferente, genera conversación. Cuando genera conversación, amplifica tu mensaje. Posiciona tu marca como líder en innovación con productos que nadie más está ofreciendo aún.`
    ]
  },
  'variedades': {
    shortDescriptions: [
      (name) => `${name} personalizado con tu logo. Versatilidad y calidad para tu marca en Ecuador.`,
      (name) => `Promociona tu marca con ${name}. Diseño funcional y personalización profesional.`,
      (name) => `${name} corporativo: el regalo promocional versátil. Múltiples opciones de personalización.`,
      (name) => `Impacta con ${name} personalizado. Calidad premium para cualquier ocasión.`,
      (name) => `${name}: flexibilidad y calidad en un solo producto. Cotiza ahora en Ecuador.`
    ],
    stories: [
      (name) => `${name} ofrece la versatilidad que tu campaña promocional necesita. Su diseño adaptable y funcionalidad práctica lo hacen ideal para múltiples ocasiones y audiencias. Personalización de calidad que refleja los valores de tu empresa.`,
      (name) => `Con ${name} personalizado, tienes flexibilidad sin comprometer calidad. Es el tipo de producto promocional que funciona en diversos contextos: ferias, eventos corporativos, regalos a clientes o programas de incentivos para empleados.`,
      (name) => `${name} combina practicidad universal con oportunidad de branding efectivo. Fabricado con materiales de calidad y múltiples opciones de personalización, se adapta a las necesidades específicas de tu marca y audiencia objetivo.`
    ]
  }
};

// ==========================================
// FUNCIÓN PARA DETERMINAR CATEGORÍA
// ==========================================
function determineCategory(product) {
  const nameLower = product.name.toLowerCase();
  const idLower = product.id.toLowerCase();

  for (const mapping of categoryMapping) {
    for (const keyword of mapping.keywords) {
      if (nameLower.includes(keyword.toLowerCase()) || idLower.includes(keyword.toLowerCase())) {
        return mapping.categoryId;
      }
    }
  }

  return product.categoryId; // Mantener categoría actual si no hay match
}

// ==========================================
// FUNCIÓN PARA GENERAR DESCRIPCIONES
// ==========================================
function generateDescriptions(product, index) {
  const categoryId = product.categoryId;
  const templates = descriptionTemplates[categoryId] || descriptionTemplates['variedades'];

  // Usar índice para variar las descripciones
  const shortIndex = index % templates.shortDescriptions.length;
  const storyIndex = index % templates.stories.length;

  return {
    shortDescription: templates.shortDescriptions[shortIndex](product.name),
    story: templates.stories[storyIndex](product.name)
  };
}

// ==========================================
// PROCESAR PRODUCTOS
// ==========================================
let categoryChanges = 0;
let descriptionChanges = 0;

const updatedProducts = products.map((product, index) => {
  const updated = { ...product };

  // Reasignar categoría si está en "variedades"
  if (product.categoryId === 'variedades') {
    const newCategory = determineCategory(product);
    if (newCategory !== 'variedades') {
      updated.categoryId = newCategory;
      categoryChanges++;
    }
  }

  // Generar nuevas descripciones
  const descriptions = generateDescriptions(updated, index);

  // Solo actualizar si la descripción actual es genérica
  const genericPhrases = [
    'combina calidad, diseño',
    'Cada detalle está pensado',
    'Más que un artículo promocional',
    'transforma cada interacción',
    'la elección perfecta para empresas'
  ];

  const isGeneric = genericPhrases.some(phrase =>
    (product.shortDescription && product.shortDescription.includes(phrase)) ||
    (product.story && product.story.includes(phrase))
  );

  if (isGeneric || !product.shortDescription || product.shortDescription.length < 50) {
    updated.shortDescription = descriptions.shortDescription;
    updated.story = descriptions.story;
    descriptionChanges++;
  }

  return updated;
});

// ==========================================
// GUARDAR RESULTADOS
// ==========================================
fs.writeFileSync(productsPath, JSON.stringify(updatedProducts, null, 2), 'utf8');

console.log(`\n✅ Optimización completada:`);
console.log(`   - Categorías reasignadas: ${categoryChanges}`);
console.log(`   - Descripciones mejoradas: ${descriptionChanges}`);
console.log(`\n📁 Archivo actualizado: data/products.json`);

// Mostrar resumen de cambios de categoría
console.log(`\n📊 Resumen de reasignación de categorías:`);
const categoryCounts = {};
updatedProducts.forEach(p => {
  categoryCounts[p.categoryId] = (categoryCounts[p.categoryId] || 0) + 1;
});
Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]).forEach(([cat, count]) => {
  console.log(`   ${cat}: ${count} productos`);
});
