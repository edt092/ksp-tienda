# 🚀 Inicio Rápido - KS Promocionales

## Para Empezar en 5 Minutos

### 1. Instalar Dependencias
```bash
npm install
```

### 2. Ejecutar en Desarrollo
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

### 3. Probar el Editor Visual
1. Ve a cualquier página de producto
2. Haz clic en **"Ver mi logo en este producto"**
3. Sube un logo (PNG, JPG o SVG)
4. Arrastra, redimensiona y rota tu logo
5. Haz clic en **"Listo, Cotizar"**
6. Descarga el mockup o envía por WhatsApp

---

## ⚠️ Configuraciones Prioritarias

### Cambiar Número de WhatsApp

**Archivos a editar:**

1. `src/components/ProductActions.jsx` (línea 9)
2. `src/components/LogoEditorModal.jsx` (línea 31)

```javascript
const phoneNumber = '593XXXXXXXXX'; // Tu número sin + ni espacios
```

### Subir Imágenes Reales

**Opción A: Cloudinary (Recomendado)**

1. Crea cuenta en [cloudinary.com](https://cloudinary.com)
2. Sube tus imágenes
3. Copia las URLs
4. Actualiza en:
   - `data/categories.json`
   - `data/products.json`

**Opción B: Local**

1. Coloca imágenes en `/public/images/`
2. Actualiza URLs en JSON a rutas relativas:
   ```json
   "image": "/images/productos/boligrafo-1.jpg"
   ```

---

## 🎨 Agregar Productos

Edita `data/products.json`:

```json
{
  "id": "mi-producto",
  "name": "Mi Producto Nuevo",
  "slug": "mi-producto-nuevo",
  "categoryId": "tecnologia",
  "shortDescription": "Descripción corta",
  "story": "Historia completa del producto...",
  "features": ["Característica 1", "Característica 2"],
  "images": [
    "URL_imagen_1",
    "URL_imagen_2"
  ],
  "whatsappMessage": "Mensaje para WhatsApp",
  "seoTitle": "Título SEO",
  "seoDescription": "Descripción SEO",
  "useCases": ["Caso 1", "Caso 2"],
  "featured": true,
  "bestseller": false
}
```

---

## 🎯 Agregar Categorías

Edita `data/categories.json`:

```json
{
  "id": "mi-categoria",
  "name": "Mi Categoría",
  "slug": "mi-categoria",
  "description": "Descripción de la categoría",
  "image": "URL_imagen_cloudinary",
  "icon": "🎨",
  "color": "#FF6B35",
  "seoTitle": "Mi Categoría | KS Promocionales",
  "seoDescription": "Descripción SEO",
  "story": "Historia de la categoría",
  "benefits": ["Beneficio 1", "Beneficio 2"],
  "subcategories": ["Sub 1", "Sub 2"]
}
```

---

## 📦 Build y Deploy

### Build Local
```bash
npm run build
```

Si no hay errores, el build genera 29 páginas estáticas en `/out/`

### Desplegar en Vercel

**Opción 1: CLI**
```bash
npm i -g vercel
vercel --prod
```

**Opción 2: GitHub**
1. Sube el proyecto a GitHub
2. Conecta con Vercel
3. Deploy automático

---

## 🧪 Probar el Proyecto

### 1. Página Principal
- ✅ Ver 10 categorías
- ✅ Ver productos destacados
- ✅ Navegación funcional

### 2. Página de Categoría
- ✅ Hero con imagen y descripción
- ✅ Lista de productos de la categoría
- ✅ Breadcrumb

### 3. Página de Producto
- ✅ Galería de imágenes
- ✅ Botón "Ver mi logo en este producto"
- ✅ Editor visual funciona
- ✅ Exportar mockup
- ✅ Botón WhatsApp

### 4. Editor Visual
- ✅ Subir logo
- ✅ Drag & drop
- ✅ Redimensionar
- ✅ Rotar
- ✅ Exportar
- ✅ Responsive

---

## 🎨 Personalizar Colores

Edita `tailwind.config.js`:

```javascript
colors: {
  primary: '#FFD100',        // Amarillo principal
  'primary-dark': '#E6BC00',
  'primary-light': '#FFED4E',
  secondary: '#0047AB',      // Azul secundario
}
```

---

## 📝 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build para producción
npm run start    # Preview del build
npm run lint     # Verificar código
```

---

## 🆘 Problemas Comunes

### El editor no funciona
- Verifica que react-konva y konva estén instalados
- Revisa la consola del navegador por errores
- Asegúrate de que las imágenes tengan CORS habilitado

### Las imágenes no cargan
- Verifica las URLs en los JSON
- Si usas Cloudinary, confirma que sean públicas
- Si usas /public, verifica que las rutas empiecen con `/`

### WhatsApp no abre
- Verifica el formato del número (sin + y sin espacios)
- Formato correcto: `593991234567`
- Prueba en un dispositivo móvil real

### Build falla
```bash
# Limpia cache
rm -rf .next node_modules
npm install
npm run build
```

---

## 📚 Más Información

- **Guía Completa:** `GUIA_COMPLETA.md`
- **Resumen del Proyecto:** `RESUMEN.md`
- **README Principal:** `README.md`

---

## ✅ Checklist de Lanzamiento

Antes de publicar:

- [ ] Actualizar número de WhatsApp
- [ ] Subir imágenes reales a Cloudinary
- [ ] Actualizar URLs en JSON
- [ ] Revisar información de contacto en Footer
- [ ] Probar editor en móvil
- [ ] Probar flujo completo de WhatsApp
- [ ] Verificar todos los productos tienen imágenes
- [ ] Ejecutar `npm run build` sin errores
- [ ] Desplegar en Vercel
- [ ] Configurar dominio personalizado

---

**¡Listo! Tu tienda está operativa. 🎉**

Para soporte, consulta `GUIA_COMPLETA.md` o los otros archivos de documentación.
