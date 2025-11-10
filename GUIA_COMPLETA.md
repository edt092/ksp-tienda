# Guía Completa - KS Promocionales Tienda

## Descripción

Catálogo digital interactivo para KSPromocionales, una tienda de regalos personalizados y productos promocionales en Quito, Ecuador.

## Características Principales

### ✅ Editor Visual de Logos
- Sube tu logo en formato PNG, JPG o SVG
- Arrastra y posiciona el logo sobre el producto
- Redimensiona con las esquinas
- Rota con los controles
- Exporta mockup en alta calidad
- Envía por WhatsApp con un clic

### ✅ Catálogo por Categorías
El sitio incluye 10 categorías principales:
1. **Artículos de Escritura** - Bolígrafos, marcadores, lápices
2. **Herramientas** - Multiherramientas, linternas, kits
3. **Hogar** - Productos para el día a día en casa
4. **Llaveros** - Metálicos, cuero, PVC, personalizados
5. **Memorias USB** - Giratorias, tarjeta, madera, 3D
6. **Mugs/Botilitos/Vasos/Termos** - Drinkware personalizado
7. **Oficina** - Cuadernos, agendas, carpetas
8. **Pharma y Cuidado Personal** - Kits médicos, sanitizantes
9. **Tecnología** - Power banks, audífonos, gadgets
10. **Variedades** - Paraguas, relojes, artículos deportivos

### ✅ Sistema de Cotización por WhatsApp
- Botón CTA principal: "Ver mi logo en este producto"
- Botón secundario: Cotización directa
- Mensajes prellenados personalizados
- Mockup descargable para enviar

### ✅ SEO Optimizado
- Metadatos personalizados por página
- OpenGraph para redes sociales
- Sitemap automático
- Robots.txt configurado
- Imágenes optimizadas

### ✅ Diseño Responsivo
- Mobile-first con Tailwind CSS
- Animaciones suaves
- Carga rápida
- Navegación intuitiva

## Instalación

### 1. Instalar dependencias
\`\`\`bash
npm install
\`\`\`

### 2. Configurar variables de entorno (opcional)
Crea un archivo `.env.local`:
\`\`\`env
# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=593999999999

# Cloudinary (opcional si usas Cloudinary)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=tu-cloud-name
\`\`\`

### 3. Ejecutar en desarrollo
\`\`\`bash
npm run dev
\`\`\`

Abre [http://localhost:3000](http://localhost:3000)

## Estructura del Proyecto

\`\`\`
kspromocionales-tienda/
├── src/
│   ├── app/
│   │   ├── page.jsx              # Página principal
│   │   ├── layout.jsx            # Layout general
│   │   ├── categorias/
│   │   │   └── [slug]/
│   │   │       └── page.jsx      # Página de categoría
│   │   └── productos/
│   │       └── [slug]/
│   │           └── page.jsx      # Página de producto
│   └── components/
│       ├── Header.jsx            # Navegación
│       ├── Footer.jsx            # Pie de página
│       ├── LogoEditor.jsx        # Editor visual con React-Konva
│       ├── LogoEditorModal.jsx   # Modal del editor
│       ├── ProductActions.jsx    # Botones CTA
│       ├── ProductCard.jsx       # Tarjeta de producto
│       └── CategoryGrid.jsx      # Grid de categorías
├── data/
│   ├── categories.json           # Datos de categorías
│   └── products.json             # Datos de productos
└── public/
    └── images/                   # Imágenes estáticas
\`\`\`

## Configuración de Imágenes con Cloudinary

### Opción 1: Usar Cloudinary (Recomendado)

1. Crea una cuenta gratuita en [Cloudinary](https://cloudinary.com/)
2. Obtén tu `Cloud Name` del dashboard
3. Sube tus imágenes a Cloudinary
4. Actualiza las URLs en `data/categories.json` y `data/products.json`

Ejemplo de URL:
\`\`\`
https://res.cloudinary.com/tu-cloud-name/image/upload/v1/productos/boligrafo-1.jpg
\`\`\`

### Opción 2: Usar /public/images

Si prefieres alojar las imágenes localmente:
1. Coloca las imágenes en `/public/images/`
2. Actualiza las URLs en los JSON a rutas relativas

Ejemplo:
\`\`\`json
"images": [
  "/images/productos/boligrafo-1.jpg",
  "/images/productos/boligrafo-2.jpg"
]
\`\`\`

## Configuración de WhatsApp

Edita el número de WhatsApp en:
- `src/components/ProductActions.jsx` (línea 9)
- `src/components/LogoEditorModal.jsx` (línea 31)

\`\`\`javascript
const phoneNumber = '593999999999'; // REEMPLAZAR con tu número real
\`\`\`

**Formato del número:**
- Incluye código de país (593 para Ecuador)
- Sin el símbolo +
- Sin espacios ni guiones
- Ejemplo: 593991234567

## Agregar Productos y Categorías

### Agregar una Nueva Categoría

Edita `data/categories.json`:

\`\`\`json
{
  "id": "nueva-categoria",
  "name": "Nueva Categoría",
  "slug": "nueva-categoria",
  "description": "Descripción breve",
  "image": "URL_de_imagen_cloudinary",
  "icon": "🎨",
  "color": "#FF6B35",
  "seoTitle": "SEO Title | KS Promocionales",
  "seoDescription": "Descripción para SEO",
  "story": "Historia de la categoría",
  "benefits": [
    "Beneficio 1",
    "Beneficio 2"
  ],
  "subcategories": ["Sub 1", "Sub 2"]
}
\`\`\`

### Agregar un Nuevo Producto

Edita `data/products.json`:

\`\`\`json
{
  "id": "producto-ejemplo",
  "name": "Nombre del Producto",
  "slug": "producto-ejemplo",
  "categoryId": "id-de-categoria",
  "shortDescription": "Descripción corta",
  "story": "Historia del producto...",
  "features": [
    "Característica 1",
    "Característica 2"
  ],
  "images": [
    "URL_imagen_1",
    "URL_imagen_2"
  ],
  "whatsappMessage": "Mensaje prellenado para WhatsApp",
  "seoTitle": "SEO Title",
  "seoDescription": "SEO Description",
  "useCases": ["Uso 1", "Uso 2"],
  "featured": true,
  "bestseller": false
}
\`\`\`

## Despliegue en Vercel

### 1. Conectar con GitHub
1. Sube tu proyecto a un repositorio de GitHub
2. Ve a [Vercel](https://vercel.com)
3. Importa tu repositorio

### 2. Configurar el Proyecto
Vercel detectará automáticamente que es un proyecto Next.js.

**Build Command:** `npm run build`
**Output Directory:** `.next`

### 3. Variables de Entorno (si las usas)
Agrega en el dashboard de Vercel:
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`

### 4. Deploy
Haz clic en "Deploy" y espera unos minutos.

Tu sitio estará disponible en: `https://tu-proyecto.vercel.app`

## Optimización de Rendimiento

### Imágenes
- Usa formatos modernos (WebP, AVIF)
- Tamaños recomendados:
  - Productos: 800x800px
  - Categorías: 1200x800px
  - Thumbnails: 200x200px

### Build para Producción
\`\`\`bash
npm run build
npm start
\`\`\`

### Análisis de Bundle
\`\`\`bash
npm run build -- --analyze
\`\`\`

## Personalización

### Colores (Tailwind)
Edita `tailwind.config.js`:

\`\`\`javascript
colors: {
  primary: '#FFD100',        // Amarillo KS
  'primary-dark': '#E6BC00',
  'primary-light': '#FFED4E',
  secondary: '#0047AB',      // Azul KS
}
\`\`\`

### Fuentes
Edita `src/app/layout.jsx` para cambiar las fuentes de Google Fonts.

### Animaciones
Las animaciones están en `src/app/globals.css`

## Solución de Problemas

### El editor no carga
- Verifica que `react-konva` y `konva` estén instalados
- Asegúrate de que las imágenes tengan CORS habilitado (Cloudinary lo hace automáticamente)

### Las imágenes no se ven
- Verifica las URLs en los archivos JSON
- Si usas Cloudinary, confirma que las imágenes sean públicas
- Si usas /public, asegúrate de que las rutas comiencen con `/`

### WhatsApp no abre
- Verifica el formato del número (sin + y sin espacios)
- Prueba en un dispositivo móvil real

## Soporte

Para más información:
- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de React-Konva](https://konvajs.org/docs/react/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [API de WhatsApp](https://faq.whatsapp.com/general/chats/how-to-use-click-to-chat)

## Licencia

Este proyecto es propiedad de KS Promocionales.
