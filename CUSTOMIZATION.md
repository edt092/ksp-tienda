# Guía de Personalización

Esta guía cubre todas las formas de personalizar tu tienda KS Promocionales.

## Contenido

- [Colores y Marca](#colores-y-marca)
- [Productos y Categorías](#productos-y-categorías)
- [Textos y Copywriting](#textos-y-copywriting)
- [WhatsApp y Conversiones](#whatsapp-y-conversiones)
- [SEO y Metadata](#seo-y-metadata)
- [Animaciones y Efectos](#animaciones-y-efectos)

---

## Colores y Marca

### Paleta de Colores

Edita `tailwind.config.js`:

```js
colors: {
  ecuador: {
    yellow: '#FFD100',  // Amarillo principal
    red: '#ED1C24',     // Rojo
    blue: '#0047AB',    // Azul
  },
  primary: '#FFD100',   // Color primario de marca
  secondary: '#ED1C24', // Color secundario
  accent: '#0047AB',    // Color de acento
}
```

Para cambiar completamente la paleta:

```js
colors: {
  brand: {
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
    accent: '#FFE66D',
  }
}
```

Luego actualiza componentes:
- Reemplaza `ecuador-yellow` → `brand-primary`
- Reemplaza `ecuador-red` → `brand-secondary`
- Reemplaza `ecuador-blue` → `brand-accent`

### Logo

El logo actual es un emoji 🇪🇨. Para usar un logo real:

1. Agrega tu logo en `public/images/logo.png`
2. Edita `src/components/Header.jsx`:

```jsx
<Link href="/" className="flex items-center gap-3">
  <Image
    src="/images/logo.png"
    alt="KS Promocionales"
    width={150}
    height={50}
  />
</Link>
```

3. También actualiza en `src/components/Footer.jsx`

---

## Productos y Categorías

### Agregar Nueva Categoría

En `data/categories.json`:

```json
{
  "id": "nueva-categoria",
  "name": "Nueva Categoría",
  "slug": "nueva-categoria",
  "description": "Descripción de la categoría",
  "image": "/images/categories/nueva-categoria.jpg",
  "icon": "🎁",
  "color": "#FF6B6B",
  "seoTitle": "Nueva Categoría | KS Promocionales",
  "seoDescription": "Descripción para SEO...",
  "story": "Historia de la categoría...",
  "benefits": [
    "Beneficio 1",
    "Beneficio 2",
    "Beneficio 3"
  ]
}
```

### Agregar Nuevo Producto

En `data/products.json`:

```json
{
  "id": "nuevo-producto",
  "name": "Nuevo Producto",
  "slug": "nuevo-producto",
  "categoryId": "textiles",
  "shortDescription": "Descripción corta (1 línea)",
  "story": "Historia completa del producto (2-3 párrafos)...",
  "features": [
    "Característica 1",
    "Característica 2",
    "Característica 3"
  ],
  "images": [
    "/images/products/nuevo-producto-1.jpg",
    "/images/products/nuevo-producto-2.jpg"
  ],
  "whatsappMessage": "Mensaje personalizado para WhatsApp...",
  "seoTitle": "Nuevo Producto | KS Promocionales",
  "seoDescription": "Descripción para SEO...",
  "useCases": [
    "Caso de uso 1",
    "Caso de uso 2"
  ],
  "featured": true,
  "bestseller": false
}
```

### Ordenar Productos

Los productos se muestran en el orden del JSON. Para reordenar:

1. Cambia el orden en `data/products.json`
2. O filtra por `featured` / `bestseller` en las páginas

---

## Textos y Copywriting

### Hero Principal

Edita `src/components/StorytellingHero.jsx`:

```jsx
<h1 className="...">
  Tu Marca,
  <br />
  <span className="text-ecuador-yellow">Tu Mensaje</span>
  <br />
  Tu Historia
</h1>

<p className="...">
  Nuevo subtítulo que describe mejor tu propuesta de valor...
</p>
```

### Sección "Por Qué Elegirnos"

En `src/app/page.jsx`:

```jsx
{[
  {
    icon: '🎨',
    title: 'Tu Título',
    description: 'Tu descripción...',
  },
  // ... más features
]}
```

### Página "Nosotros"

Edita completamente `src/app/nosotros/page.jsx`:

```jsx
<p>
  Tu historia única...
</p>
```

### Footer

Edita `src/components/Footer.jsx`:

```jsx
<p className="...">
  Tu tagline o descripción breve de la empresa...
</p>
```

---

## WhatsApp y Conversiones

### Número de WhatsApp

**Método 1: Variable de Entorno**

En `.env.local`:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=593999999999
```

Luego en `src/components/WhatsAppButton.jsx`:

```jsx
phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '593999999999'
```

**Método 2: Hardcodeado**

En `src/components/WhatsAppButton.jsx`:

```jsx
phoneNumber = '593999999999' // Tu número
```

### Mensajes Predefinidos

**Por Producto**: Edita en `data/products.json`:

```json
{
  "whatsappMessage": "¡Hola! Me interesa el [Producto]. ¿Pueden ayudarme?"
}
```

**Por Categoría**: Se genera automáticamente, pero puedes personalizar en:

`src/app/categorias/[slug]/page.jsx`:

```jsx
<WhatsAppButton
  message={`Personaliza este mensaje para ${category.name}`}
/>
```

**General**: En `src/components/StorytellingHero.jsx`:

```jsx
<WhatsAppButton
  message="Tu mensaje general aquí..."
/>
```

### Posición del Botón Flotante

En `src/components/WhatsAppButton.jsx`:

```jsx
// Cambiar posición
className="fixed bottom-6 right-6"  // Default
className="fixed bottom-4 left-4"   // Abajo izquierda
className="fixed top-20 right-6"    // Arriba derecha
```

---

## SEO y Metadata

### Metadata Global

Edita `src/app/layout.jsx`:

```jsx
export const metadata = {
  title: 'Tu Título | Tu Empresa',
  description: 'Tu descripción...',
  keywords: 'tus, palabras, clave',
  // ...
}
```

### Metadata por Página

Cada página tiene su propia función `generateMetadata`:

**Categorías** (`src/app/categorias/[slug]/page.jsx`):

```jsx
export async function generateMetadata({ params }) {
  return {
    title: 'Tu título personalizado',
    description: 'Tu descripción...',
  };
}
```

**Productos** (`src/app/productos/[slug]/page.jsx`):

Similar estructura.

### JSON-LD Structured Data

Edita `src/components/SEOHead.jsx`:

```jsx
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Tu Empresa',
    telephone: '+593-99-999-9999',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'EC',
      addressLocality: 'Tu Ciudad',
    },
    // ...
  };
}
```

### Sitemap

Se genera automáticamente desde `src/app/sitemap.js`.

Para personalizar prioridades:

```jsx
{
  url: `${baseUrl}/tu-pagina`,
  lastModified: new Date(),
  changeFrequency: 'weekly',
  priority: 0.9,  // 0.0 a 1.0
}
```

---

## Animaciones y Efectos

### Velocidades de Animación

En `tailwind.config.js`:

```js
animation: {
  'fade-in': 'fadeIn 0.6s ease-in-out',      // Cambiar 0.6s
  'slide-up': 'slideUp 0.8s ease-out',       // Cambiar 0.8s
  'bounce-slow': 'bounce 3s infinite',       // Cambiar 3s
}
```

### Desactivar Animaciones

Para desactivar todas las animaciones (mejor performance en móviles lentos):

En `src/app/globals.css`:

```css
@layer base {
  * {
    animation-duration: 0s !important;
    transition-duration: 0s !important;
  }
}
```

### Efectos Hover

Edita componentes individuales:

**ProductCard** (`src/components/ProductCard.jsx`):

```jsx
// Cambiar escala en hover
className="... hover:scale-105"  // Actual
className="... hover:scale-110"  // Más zoom
className="... hover:scale-100"  // Sin zoom
```

**CategoryGrid** (`src/components/CategoryGrid.jsx`):

Similar estructura.

---

## Tipografía

### Cambiar Fuente

**Método 1: Google Fonts**

En `src/app/layout.jsx`:

```jsx
import { Inter, Montserrat } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="es-EC" className={montserrat.className}>
      {children}
    </html>
  )
}
```

**Método 2: Fuente Personalizada**

1. Agrega archivos `.woff2` en `public/fonts/`
2. En `src/app/globals.css`:

```css
@font-face {
  font-family: 'MiFuente';
  src: url('/fonts/mifuente.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

body {
  font-family: 'MiFuente', sans-serif;
}
```

### Tamaños de Texto

En `tailwind.config.js`, extiende:

```js
fontSize: {
  'xxs': '0.65rem',
  'huge': '6rem',
}
```

---

## Layout y Estructura

### Ancho del Contenedor

Edita el ancho máximo del contenedor:

Busca `container mx-auto` en componentes y agrega:

```jsx
<div className="container mx-auto px-4 max-w-7xl">
  // Cambiar max-w-7xl por:
  // max-w-6xl   (1152px)
  // max-w-7xl   (1280px) - default
  // max-w-full  (100%)
</div>
```

### Espaciado

Cambiar padding/margin global:

```jsx
// Cambiar py-20 (padding vertical)
<section className="py-20">  // Actual (5rem)
<section className="py-12">  // Menos espacio
<section className="py-32">  // Más espacio
```

---

## Funcionalidades Adicionales

### Agregar Modal de Cotización

Crea `src/components/QuoteModal.jsx`:

```jsx
'use client';

import { useState } from 'react';

export default function QuoteModal({ product }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Abrir Formulario
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50">
          {/* Modal content */}
        </div>
      )}
    </>
  );
}
```

### Agregar Filtros de Productos

En páginas de categoría, agrega:

```jsx
const [filteredProducts, setFilteredProducts] = useState(categoryProducts);

// Filtro por featured
const showFeatured = () => {
  setFilteredProducts(categoryProducts.filter(p => p.featured));
};
```

### Agregar Buscador

Crea `src/components/SearchBar.jsx` y agrega en Header.

---

## Testing y Debug

### Ver Datos en Consola

Agrega en cualquier componente:

```jsx
console.log('Products:', productsData);
console.log('Current product:', product);
```

### React DevTools

Instala extensión de Chrome/Firefox para inspeccionar componentes.

### Performance

```bash
npm run build
npm run start
```

Abre Chrome DevTools > Lighthouse > Generate Report

---

## Checklist de Personalización

- [ ] Colores de marca actualizados
- [ ] Logo agregado
- [ ] Número de WhatsApp configurado
- [ ] Google Analytics ID configurado
- [ ] Productos y categorías agregados
- [ ] Imágenes reales agregadas
- [ ] Textos personalizados (Hero, About, Footer)
- [ ] SEO metadata actualizada
- [ ] Información de contacto actualizada
- [ ] Redes sociales actualizadas
- [ ] Probado en desarrollo
- [ ] Build de producción exitoso

---

¿Necesitas personalizar algo más? Revisa el código fuente o contacta: contacto@kspromocionales.com
