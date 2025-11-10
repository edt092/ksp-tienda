import Head from 'next/head';

export default function SEOHead({
  title = 'KS Promocionales - Productos Promocionales Ecuador',
  description = 'Productos promocionales personalizados en Ecuador. Textiles, tecnología, oficina y más con tu marca. Cotiza por WhatsApp.',
  keywords = 'productos promocionales ecuador, articulos promocionales, merchandising, regalos corporativos, personalizacion',
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  canonical,
  jsonLd,
  noindex = false,
}) {
  const siteUrl = 'https://kspromocionales.com';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      {/* Canonical */}
      <link rel="canonical" href={fullCanonical} />

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content="KS Promocionales" />
      <meta property="og:locale" content="es_EC" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Geo Tags for Ecuador */}
      <meta name="geo.region" content="EC" />
      <meta name="geo.placename" content="Ecuador" />

      {/* Language */}
      <meta httpEquiv="content-language" content="es-EC" />
      <link rel="alternate" hrefLang="es-ec" href={fullCanonical} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  );
}

// Helper function to generate LocalBusiness JSON-LD
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'KS Promocionales',
    description: 'Productos promocionales personalizados en Ecuador',
    url: 'https://kspromocionales.com',
    telephone: '+593-99-999-9999',
    email: 'contacto@kspromocionales.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'EC',
      addressLocality: 'Quito',
      addressRegion: 'Pichincha',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -0.1807,
      longitude: -78.4678,
    },
    openingHours: 'Mo-Fr 09:00-18:00',
    priceRange: '$$',
    image: 'https://kspromocionales.com/images/og-image.jpg',
    sameAs: [
      'https://www.facebook.com/kspromocionales',
      'https://www.instagram.com/kspromocionales',
    ],
  };
}

// Helper function to generate Product JSON-LD
export function generateProductSchema(product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription,
    image: product.images?.map(img => `https://kspromocionales.com${img}`) || [],
    brand: {
      '@type': 'Brand',
      name: 'KS Promocionales',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `https://kspromocionales.com/productos/${product.slug}`,
    },
  };
}

// Helper function to generate BreadcrumbList JSON-LD
export function generateBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://kspromocionales.com${item.url}`,
    })),
  };
}
