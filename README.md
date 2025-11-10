# 🎨 KS Promocionales - Catálogo Digital Interactivo

![Ecuador](https://img.shields.io/badge/Made%20in-Ecuador-FFD100?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4=)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![React-Konva](https://img.shields.io/badge/React--Konva-18-blue?style=for-the-badge)

Tienda digital de productos promocionales personalizados con **editor visual de logos** interactivo y **cotización directa por WhatsApp**.

## ✨ Características Principales

### 🎯 Editor Visual de Logos (React-Konva)
- **Carga de logos** en PNG, JPG y SVG
- **Drag & Drop** intuitivo para posicionar el logo
- **Redimensionamiento** con controles en las esquinas
- **Rotación** manual y con botones (15° por clic)
- **Previsualización en tiempo real** sobre la imagen del producto
- **Exportación de mockup** en alta calidad (PNG 2x)
- **Descarga del mockup** para compartir

### 📦 Catálogo Completo
- **10 Categorías** organizadas: Artículos de Escritura, Herramientas, Hogar, Llaveros, Memorias USB, Mugs/Vasos/Termos, Oficina, Pharma, Tecnología, Variedades
- **12 Productos de ejemplo** con storytelling completo
- **Galería de imágenes** con thumbnails
- **Información detallada** (características, casos de uso, beneficios)

### 💬 Integración WhatsApp
- **Botón CTA principal**: "Ver mi logo en este producto"
- **Cotización directa** con mensajes prellenados por producto
- **Descarga de mockup** personalizado
- **Flujo optimizado** para conversión

### 🚀 Tecnología
- **Next.js 14 App Router** - Generación estática de 29 páginas
- **JavaScript puro** - Sin TypeScript para máxima simplicidad
- **Tailwind CSS** - Diseño minimalista y moderno
- **Sin base de datos** - Contenido desde archivos JSON locales
- **SEO Optimizado** - Metadatos completos, sitemap, OpenGraph
- **Build exitoso** - Listo para desplegar en Vercel

## Estructura del Proyecto

```
kspromocionales-tienda/
├── data/                      # Datos estáticos
│   ├── categories.json        # Categorías de productos
│   └── products.json          # Catálogo de productos
├── public/                    # Archivos estáticos
│   ├── images/                # Imágenes (agregar manualmente)
│   └── favicon.ico
├── src/
│   ├── app/                   # App Router de Next.js 14
│   │   ├── categorias/
│   │   │   └── [slug]/page.jsx
│   │   ├── productos/
│   │   │   └── [slug]/page.jsx
│   │   ├── nosotros/page.jsx
│   │   ├── layout.jsx
│   │   ├── page.jsx
│   │   ├── globals.css
│   │   ├── sitemap.js
│   │   └── robots.js
│   └── components/            # Componentes reutilizables
│       ├── LogoEditor.jsx        # ✨ Editor visual con React-Konva
│       ├── LogoEditorModal.jsx   # ✨ Modal del editor
│       ├── ProductActions.jsx    # ✨ Botones CTA
│       ├── SEOHead.jsx
│       ├── WhatsAppButton.jsx
│       ├── StorytellingHero.jsx
│       ├── CategoryGrid.jsx
│       ├── ProductCard.jsx
│       ├── Header.jsx
│       └── Footer.jsx
├── .gitignore
├── jsconfig.json
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

## Instalación

### Requisitos Previos

- Node.js 18.0 o superior
- npm, yarn, pnpm o bun

### Pasos

1. **Clonar o descomprimir el proyecto**

```bash
cd kspromocionales-tienda
```

2. **Instalar dependencias**

```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Configurar variables de entorno (opcional)**

Crea un archivo `.env.local`:

```env
# Google Analytics 4
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# WhatsApp Business
NEXT_PUBLIC_WHATSAPP_NUMBER=593999999999

# Site URL
NEXT_PUBLIC_SITE_URL=https://kspromocionales.com
```

4. **Ejecutar en desarrollo**

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Agregar Imágenes

Las imágenes actualmente usan gradientes de color como placeholder. Para agregar imágenes reales:

1. Coloca tus imágenes en `public/images/`
2. Organiza por carpetas:
   - `public/images/categories/` - Imágenes de categorías
   - `public/images/products/` - Imágenes de productos
3. Los nombres deben coincidir con los definidos en los archivos JSON

### Formatos Recomendados

- **WebP o AVIF** para mejor rendimiento
- Resolución mínima: 800x800px para productos
- Optimiza las imágenes con herramientas como:
  - [Squoosh](https://squoosh.app/)
  - [TinyPNG](https://tinypng.com/)
  - ImageOptim (Mac)

## Personalización

### 1. Actualizar Información del Negocio

Edita los siguientes archivos:

**`src/components/Footer.jsx`** - Información de contacto, redes sociales

**`src/components/SEOHead.jsx`** - Función `generateLocalBusinessSchema()` con datos del negocio

**`src/app/layout.jsx`** - Metadata global del sitio

### 2. Modificar Colores

Los colores están configurados en `tailwind.config.js`:

```js
colors: {
  ecuador: {
    yellow: '#FFD100',
    red: '#ED1C24',
    blue: '#0047AB',
  },
}
```

### 3. Agregar/Editar Productos

Edita `data/products.json` y `data/categories.json`. Los cambios se reflejan automáticamente.

### 4. Configurar WhatsApp

En `src/components/WhatsAppButton.jsx`, reemplaza:

```js
phoneNumber = '593999999999' // Tu número de WhatsApp Business
```

### 5. Configurar Google Analytics

En `src/components/WhatsAppButton.jsx`, reemplaza:

```js
gtag('config', 'G-XXXXXXXXXX'); // Tu ID de GA4
```

## Build para Producción

### Build Local

```bash
npm run build
```

Esto genera un sitio completamente estático en la carpeta `out/`.

### Previsualizar Build

```bash
npm run start
```

## Despliegue en Vercel

### Opción 1: Despliegue Automático (Recomendado)

1. Crea una cuenta en [Vercel](https://vercel.com)
2. Instala Vercel CLI:

```bash
npm install -g vercel
```

3. Desde la carpeta del proyecto:

```bash
vercel
```

4. Sigue las instrucciones interactivas
5. Tu sitio estará en línea en minutos con SSL automático

### Opción 2: GitHub Integration

1. Sube tu proyecto a GitHub
2. Importa el repositorio en Vercel
3. Vercel detectará automáticamente Next.js
4. Configura las variables de entorno si es necesario
5. Deploy automático en cada push a main

### Configuración de Vercel

Crea `vercel.json` (opcional):

```json
{
  "buildCommand": "next build",
  "outputDirectory": "out",
  "devCommand": "next dev",
  "framework": "nextjs",
  "regions": ["gru1"]
}
```

La región `gru1` (São Paulo) es la más cercana a Ecuador para mejor rendimiento.

## SEO y Rendimiento

### Sitemap y Robots.txt

Se generan automáticamente en:
- `/sitemap.xml` - Todas las páginas indexables
- `/robots.txt` - Configuración para crawlers

### JSON-LD Structured Data

Cada página incluye:
- **HomePage**: LocalBusiness schema
- **CategoryPage**: BreadcrumbList schema
- **ProductPage**: Product schema

### Optimización de Imágenes

Next.js optimiza automáticamente las imágenes con:
- Lazy loading
- Responsive images
- Formatos modernos (WebP/AVIF)

### Performance Tips

- Usa imágenes optimizadas (WebP/AVIF)
- Mantén los JSON pequeños (< 500 productos)
- Minimiza animaciones pesadas
- Usa Edge Network de Vercel

## Tracking y Analytics

### Google Analytics 4

El componente `WhatsAppButton` incluye tracking automático:

```js
window.gtag('event', 'whatsapp_click', {
  event_category: 'engagement',
  event_label: productName || categoryName || 'general',
  product_name: productName,
  category_name: categoryName,
});
```

### Eventos Trackeados

- `whatsapp_click` - Clic en botones de WhatsApp
- Información contextual (producto, categoría)
- Preview del mensaje enviado

## Mantenimiento

### Actualizar Contenido

1. Edita `data/categories.json` o `data/products.json`
2. Ejecuta `npm run build`
3. Vercel re-despliega automáticamente con GitHub integration

### Actualizar Next.js

```bash
npm update next react react-dom
```

### Actualizar Dependencias

```bash
npm update
```

## Solución de Problemas

### Error: Module not found

```bash
# Limpia cache y reinstala
rm -rf node_modules .next
npm install
```

### Imágenes no se muestran

- Verifica que estén en `public/images/`
- Rutas deben empezar con `/` (ejemplo: `/images/logo.png`)
- Nombres deben coincidir exactamente con JSON

### Build falla en Vercel

- Revisa que todos los imports sean correctos
- Verifica que no hay errores de ESLint
- Ejecuta `npm run build` localmente primero

## Scripts Disponibles

```bash
npm run dev      # Desarrollo en localhost:3000
npm run build    # Build de producción
npm run start    # Previsualizar build
npm run lint     # Ejecutar ESLint
```

## Tecnologías Utilizadas

- **Next.js 14** - Framework React con App Router
- **React 18** - Librería UI
- **React-Konva 18** - Canvas interactivo para el editor visual
- **Konva** - Motor 2D para manipulación de elementos gráficos
- **Tailwind CSS 3** - Framework CSS utility-first
- **Lucide React** - Iconos modernos
- **PostCSS** - Procesador CSS
- **ESLint** - Linter para JavaScript

## 📚 Documentación Adicional

- **`GUIA_COMPLETA.md`** - Guía detallada de instalación, configuración y personalización
- **`RESUMEN.md`** - Resumen ejecutivo del proyecto y estado de completitud
- **`DEPLOYMENT.md`** - Instrucciones para despliegue en Vercel
- **`IMAGES.md`** - Guía para configurar imágenes con Cloudinary

## Licencia

Este proyecto es privado y propietario de KS Promocionales.

## Soporte

Para soporte técnico o consultas:
- WhatsApp: +593 99 999 9999
- Email: contacto@kspromocionales.com

---

**Hecho con ❤️ en Ecuador 🇪🇨**
