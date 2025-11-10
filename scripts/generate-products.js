const fs = require('fs');
const path = require('path');

// Category mapping with Spanish names and descriptions
const categoryInfo = {
  'articulos-escritura': {
    id: 'articulos-escritura',
    name: 'Artículos de Escritura',
    description: 'Bolígrafos, marcadores y artículos de escritura personalizados'
  },
  'herramientas': {
    id: 'herramientas',
    name: 'Herramientas',
    description: 'Herramientas y kits personalizados'
  },
  'hogar': {
    id: 'hogar',
    name: 'Hogar',
    description: 'Artículos para el hogar personalizados'
  },
  'llaveros': {
    id: 'llaveros',
    name: 'Llaveros',
    description: 'Llaveros personalizados en múltiples materiales'
  },
  'memorias-usb': {
    id: 'memorias-usb',
    name: 'Memorias USB',
    description: 'Memorias USB personalizadas con tu logo'
  },
  'mugs-vasos-termos': {
    id: 'mugs-vasos-termos',
    name: 'Mugs/Vasos/Termos',
    description: 'Tazas, vasos y termos personalizados'
  },
  'oficina': {
    id: 'oficina',
    name: 'Oficina',
    description: 'Artículos de oficina personalizados'
  },
  'pharma-cuidado-personal': {
    id: 'pharma-cuidado-personal',
    name: 'Pharma y Cuidado Personal',
    description: 'Artículos de cuidado personal y salud'
  },
  'tecnologia': {
    id: 'tecnologia',
    name: 'Tecnología',
    description: 'Gadgets tecnológicos personalizados'
  },
  'variedades': {
    id: 'variedades',
    name: 'Variedades',
    description: 'Artículos diversos y creativos'
  }
};

// Product name beautification
function beautifyProductName(slug) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Generate product descriptions based on category
function generateProductDescription(category, productName) {
  const descriptions = {
    'articulos-escritura': `Escritura premium con ${productName}. Ideal para eventos corporativos y regalos empresariales.`,
    'herramientas': `${productName} de alta calidad. Perfecta para promociones industriales y regalos corporativos.`,
    'hogar': `${productName} para llevar tu marca al hogar de tus clientes. Regalo corporativo memorable.`,
    'llaveros': `${productName} personalizado. Promocional económico y efectivo para tu marca.`,
    'memorias-usb': `${productName} personalizada con tu logo. Almacenamiento y marca en un solo lugar.`,
    'mugs-vasos-termos': `${productName} personalizado. Cada sorbo, un momento con tu marca.`,
    'oficina': `${productName} personalizado. Productividad con tu sello profesional.`,
    'pharma-cuidado-personal': `${productName} con tu marca. Cuidando el bienestar de tus clientes.`,
    'tecnologia': `${productName} de última generación. Tecnología que conecta tu marca con el futuro.`,
    'variedades': `${productName} único y creativo. Sorprende con tu marca.`
  };

  return descriptions[category] || `${productName} personalizado de alta calidad.`;
}

// Generate features based on category
function generateFeatures(category) {
  const features = {
    'articulos-escritura': [
      'Impresión de alta calidad',
      'Tinta de larga duración',
      'Escritura suave y precisa',
      'Diseños elegantes',
      'Personalización en cuerpo',
      'Presentación individual disponible'
    ],
    'herramientas': [
      'Materiales resistentes',
      'Grabado láser permanente',
      'Uso profesional',
      'Diseño ergonómico',
      'Estuche personalizable',
      'Garantía de calidad'
    ],
    'hogar': [
      'Materiales de alta calidad',
      'Diseño moderno',
      'Uso diario',
      'Personalización duradera',
      'Empaque premium',
      'Alta recordación de marca'
    ],
    'llaveros': [
      'Múltiples materiales disponibles',
      'Grabado o impresión personalizada',
      'Diseño compacto',
      'Argolla reforzada',
      'Precio accesible',
      'Personalización ilimitada'
    ],
    'memorias-usb': [
      'Capacidades desde 4GB hasta 128GB',
      'USB 2.0 o 3.0',
      'Grabado láser o impresión UV',
      'Compatible con todos los sistemas',
      'Diseño resistente',
      'Garantía de por vida'
    ],
    'mugs-vasos-termos': [
      'Sublimación de alta calidad',
      'Libre de BPA',
      'Conservación de temperatura',
      'Apto para lavavajillas',
      'Diseño ergonómico',
      'Colores vibrantes'
    ],
    'oficina': [
      'Papel de alta calidad',
      'Impresión full color',
      'Diseño profesional',
      'Variedad de formatos',
      'Encuadernación resistente',
      'Personalización completa'
    ],
    'pharma-cuidado-personal': [
      'Productos certificados',
      'Opciones hipoalergénicas',
      'Empaque personalizado',
      'Cumple normativas sanitarias',
      'Materiales seguros',
      'Ideal para sector salud'
    ],
    'tecnologia': [
      'Última tecnología',
      'Garantía de calidad',
      'Personalización premium',
      'Alto valor percibido',
      'Diseño moderno',
      'Compatible universalmente'
    ],
    'variedades': [
      'Diseños únicos',
      'Materiales de calidad',
      'Múltiples opciones de personalización',
      'Creatividad sin límites',
      'Alta visibilidad de marca',
      'Regalo memorable'
    ]
  };

  return features[category] || [
    'Alta calidad',
    'Personalización disponible',
    'Diseño profesional',
    'Entrega rápida',
    'Precio competitivo',
    'Garantía incluida'
  ];
}

// Generate use cases
function generateUseCases(category) {
  const useCases = {
    'articulos-escritura': ['Regalos corporativos', 'Eventos de networking', 'Ferias comerciales', 'Detalles ejecutivos'],
    'herramientas': ['Regalos corporativos', 'Eventos outdoor', 'Promociones industriales', 'Kits de emergencia'],
    'hogar': ['Regalos de fin de año', 'Promociones retail', 'Eventos especiales', 'Aniversarios corporativos'],
    'llaveros': ['Regalos corporativos', 'Eventos automotrices', 'Inmobiliarias', 'Merchandising'],
    'memorias-usb': ['Regalos corporativos', 'Entregas de proyectos', 'Material digital', 'Souvenirs empresariales'],
    'mugs-vasos-termos': ['Regalos ejecutivos', 'Wellness programs', 'Eventos deportivos', 'Kits corporativos'],
    'oficina': ['Regalos corporativos', 'Kits de bienvenida', 'Eventos y conferencias', 'Material educativo'],
    'pharma-cuidado-personal': ['Empresas de salud', 'Farmacias', 'Eventos corporativos', 'Campañas de bienestar'],
    'tecnologia': ['Eventos tecnológicos', 'Regalos corporativos', 'Incentivos premium', 'Lanzamientos'],
    'variedades': ['Regalos corporativos', 'Eventos especiales', 'Promociones retail', 'Merchandising']
  };

  return useCases[category] || ['Regalos corporativos', 'Eventos especiales', 'Promociones', 'Merchandising'];
}

// Main function to generate products
function generateProducts() {
  const products = [];
  const productsDir = path.join(__dirname, '../public/images/products-categoria');

  // Read all categories
  const categories = fs.readdirSync(productsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  console.log('Found categories:', categories);

  let productIndex = 0;
  const featuredIndices = [0, 2, 5, 8, 12, 15]; // Some products will be featured

  categories.forEach(categorySlug => {
    const categoryPath = path.join(productsDir, categorySlug);
    const categoryData = categoryInfo[categorySlug];

    if (!categoryData) {
      console.warn(`Warning: No category info found for ${categorySlug}`);
      return;
    }

    // Read all product folders in this category
    const productFolders = fs.readdirSync(categoryPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    console.log(`Category ${categorySlug}: found ${productFolders.length} products`);

    productFolders.forEach((productSlug, idx) => {
      const productPath = path.join(categoryPath, productSlug);

      // Get all images for this product
      const images = fs.readdirSync(productPath)
        .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
        .sort()
        .map(img => `/images/products-categoria/${categorySlug}/${productSlug}/${img}`);

      if (images.length === 0) {
        console.warn(`Warning: No images found for ${productSlug}`);
        return;
      }

      const productName = beautifyProductName(productSlug);
      const isFeatured = featuredIndices.includes(productIndex);
      const isBestseller = productIndex % 3 === 0; // Every 3rd product is a bestseller

      const product = {
        id: productSlug,
        name: productName,
        slug: productSlug,
        categoryId: categorySlug,
        shortDescription: generateProductDescription(categorySlug, productName),
        story: `${productName} combina calidad, diseño y funcionalidad. Cada detalle está pensado para que tu marca destaque y se mantenga presente en el día a día de tus clientes. La personalización de alta calidad garantiza que tu logo luzca impecable por mucho tiempo.`,
        features: generateFeatures(categorySlug),
        images: images,
        whatsappMessage: `Hola! Me interesa el ${productName}. ¿Podrían enviarme más información sobre precios y cantidades mínimas?`,
        seoTitle: `${productName} Personalizado Ecuador | ${categoryData.name} | KS Promocionales`,
        seoDescription: `${productName} personalizado con tu logo. ${categoryData.description}. Calidad premium en Ecuador.`,
        useCases: generateUseCases(categorySlug),
        featured: isFeatured,
        bestseller: isBestseller
      };

      products.push(product);
      productIndex++;
    });
  });

  console.log(`\nTotal products generated: ${products.length}`);
  console.log(`Featured products: ${products.filter(p => p.featured).length}`);
  console.log(`Bestseller products: ${products.filter(p => p.bestseller).length}`);

  // Write to JSON file
  const outputPath = path.join(__dirname, '../data/products.json');
  fs.writeFileSync(outputPath, JSON.stringify(products, null, 2), 'utf-8');

  console.log(`\nProducts file written to: ${outputPath}`);
  console.log('Done!');
}

// Run the script
generateProducts();
