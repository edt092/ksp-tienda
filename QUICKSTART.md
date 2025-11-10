# Inicio Rápido - KS Promocionales

Esta guía te ayudará a tener el proyecto funcionando en **menos de 5 minutos**.

## 1. Instalar Dependencias

```bash
cd kspromocionales-tienda
npm install
```

⏱️ Tiempo estimado: 2-3 minutos

## 2. Configurar Variables (Opcional)

Copia el archivo de ejemplo:

```bash
cp .env.example .env.local
```

Edita `.env.local` con tus datos:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=593999999999  # Tu número de WhatsApp
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX            # Tu Google Analytics ID
```

**Nota**: El sitio funciona sin estas variables, pero WhatsApp usará un número demo.

## 3. Ejecutar en Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

⏱️ Tiempo estimado: 30 segundos

## 4. Explorar el Sitio

Navega por:

- **Home** (`/`) - Hero con categorías
- **Categoría** (`/categorias/textiles-corporativos`) - Productos por categoría
- **Producto** (`/productos/polo-corporativo-premium`) - Detalle de producto
- **Nosotros** (`/nosotros`) - Historia de la empresa

## 5. Personalizar Contenido

### Agregar/Editar Productos

Edita `data/products.json`:

```json
{
  "id": "mi-producto",
  "name": "Mi Producto Nuevo",
  "slug": "mi-producto-nuevo",
  "categoryId": "textiles",
  "shortDescription": "Descripción corta",
  "story": "Historia del producto...",
  "features": ["Feature 1", "Feature 2"],
  "whatsappMessage": "Mensaje para WhatsApp"
}
```

### Agregar/Editar Categorías

Edita `data/categories.json`:

```json
{
  "id": "mi-categoria",
  "name": "Mi Categoría",
  "slug": "mi-categoria",
  "description": "Descripción...",
  "icon": "🎨",
  "color": "#FFD100"
}
```

Los cambios se reflejan automáticamente (recarga la página).

## 6. Actualizar Información del Negocio

### WhatsApp

En `src/components/WhatsAppButton.jsx`:

```js
phoneNumber = '593999999999' // Cambia por tu número
```

### Footer

En `src/components/Footer.jsx`:

```jsx
<a href="mailto:contacto@kspromocionales.com">
  tu-email@tudominio.com
</a>
```

### Redes Sociales

En `src/components/Footer.jsx`:

```jsx
{
  name: 'Facebook',
  href: 'https://facebook.com/tupagina',
  icon: ...
}
```

## 7. Build de Producción

```bash
npm run build
```

Esto genera el sitio estático en la carpeta `out/`.

⏱️ Tiempo estimado: 1-2 minutos

## 8. Preview Local del Build

```bash
npm run start
```

Abre [http://localhost:3000](http://localhost:3000) para ver la versión de producción.

## Próximos Pasos

### Agregar Imágenes

Lee `IMAGES.md` para instrucciones detalladas sobre cómo agregar imágenes de productos.

### Desplegar en Vercel

Lee `DEPLOYMENT.md` para desplegar tu sitio en producción.

### Personalización Avanzada

Lee `README.md` para opciones de personalización completas.

## Comandos Útiles

```bash
# Desarrollo
npm run dev              # Inicia servidor de desarrollo

# Producción
npm run build           # Construye sitio estático
npm run start           # Preview del build

# Utilidades
npm run lint            # Ejecuta ESLint
```

## Troubleshooting Rápido

### No se instalan las dependencias

```bash
# Limpia cache de npm
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Puerto 3000 ocupado

```bash
# Usa otro puerto
npm run dev -- -p 3001
```

### Error al hacer build

```bash
# Verifica que no hay errores de sintaxis
npm run lint

# Limpia y reconstruye
rm -rf .next
npm run build
```

## Stack Tecnológico

- ⚡ **Next.js 14** - Framework React
- 🎨 **Tailwind CSS** - Estilos
- 📱 **WhatsApp API** - Conversiones
- 📊 **Google Analytics** - Tracking
- 🚀 **Vercel** - Hosting

## Recursos Adicionales

- 📖 [README.md](README.md) - Documentación completa
- 🚀 [DEPLOYMENT.md](DEPLOYMENT.md) - Guía de despliegue
- 🖼️ [IMAGES.md](IMAGES.md) - Guía de imágenes
- 🔧 [Next.js Docs](https://nextjs.org/docs)
- 🎨 [Tailwind Docs](https://tailwindcss.com/docs)

## Soporte

¿Necesitas ayuda?

- 📧 Email: contacto@kspromocionales.com
- 💬 WhatsApp: +593 99 999 9999

---

**¡Listo! Tu tienda está funcionando. Empieza a personalizar.** 🎉
