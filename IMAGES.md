# Guía de Imágenes

Este proyecto usa gradientes de color como placeholders. Para agregar imágenes reales de productos, sigue esta guía.

## Estructura de Carpetas

Crea las siguientes carpetas dentro de `public/images/`:

```
public/
└── images/
    ├── categories/           # Imágenes de categorías
    │   ├── textiles.jpg
    │   ├── tecnologia.jpg
    │   ├── oficina.jpg
    │   ├── drinkware.jpg
    │   ├── bolsas.jpg
    │   └── eventos.jpg
    ├── products/            # Imágenes de productos
    │   ├── polo-premium-1.jpg
    │   ├── polo-premium-2.jpg
    │   ├── usb-giratoria-1.jpg
    │   └── ... (etc)
    └── og-image.jpg         # Open Graph image (1200x630px)
```

## Especificaciones por Tipo

### Imágenes de Categorías
- **Resolución**: 1200x800px mínimo
- **Formato**: WebP o AVIF (fallback: JPG)
- **Peso**: < 200KB por imagen
- **Aspecto**: 3:2 (horizontal)

### Imágenes de Productos
- **Resolución**: 1000x1000px mínimo (cuadrado)
- **Formato**: WebP o AVIF (fallback: JPG)
- **Peso**: < 150KB por imagen
- **Fondo**: Blanco o transparente preferiblemente
- **Aspecto**: 1:1 (cuadrado)

### Open Graph Image
- **Resolución**: 1200x630px exacto
- **Formato**: JPG
- **Peso**: < 300KB
- **Contenido**: Logo + tagline + colores de marca

## Herramientas de Optimización

### Online
- [Squoosh](https://squoosh.app/) - Optimización y conversión
- [TinyPNG](https://tinypng.com/) - Compresión con pérdida mínima
- [CloudConvert](https://cloudconvert.com/) - Conversión masiva

### Desktop
- **ImageOptim** (Mac) - Optimización automática
- **FileOptimizer** (Windows) - Reduce tamaño sin pérdida
- **GIMP** - Edición y exportación con calidad controlada

### CLI Tools
```bash
# Instalar cwebp para convertir a WebP
# Mac
brew install webp

# Convertir JPG a WebP
cwebp -q 80 input.jpg -o output.webp

# Batch conversion
for i in *.jpg; do cwebp -q 80 "$i" -o "${i%.jpg}.webp"; done
```

## Naming Convention

Usa nombres descriptivos en minúsculas con guiones:

✅ **Correcto**:
- `polo-corporativo-premium-1.jpg`
- `usb-giratoria-metalica-2.webp`
- `categoria-textiles.jpg`

❌ **Incorrecto**:
- `IMG_1234.jpg`
- `Foto Final.png`
- `producto 01.jpeg`

## Checklist Antes de Subir

- [ ] Imágenes optimizadas (< 200KB cada una)
- [ ] Formato WebP o AVIF cuando sea posible
- [ ] Nombres de archivo coinciden con JSON
- [ ] Resolución mínima cumplida
- [ ] Fondos limpios (blanco/transparente para productos)
- [ ] Colores calibrados (evitar saturación excesiva)
- [ ] Sin marcas de agua de stock photos

## Fuentes de Imágenes

### Gratuitas (con atribución)
- [Unsplash](https://unsplash.com/) - Fotos de alta calidad
- [Pexels](https://www.pexels.com/) - Videos y fotos
- [Pixabay](https://pixabay.com/) - Imágenes libres

### De Pago (sin atribución)
- [Shutterstock](https://www.shutterstock.com/)
- [Adobe Stock](https://stock.adobe.com/)
- [iStock](https://www.istockphoto.com/)

### Mockups de Productos
- [Placeit](https://placeit.net/) - Mockups personalizables
- [Smartmockups](https://smartmockups.com/)
- [Mockup World](https://www.mockupworld.co/) - Gratis

## Testing

Después de agregar imágenes:

1. **Verifica carga local**:
```bash
npm run dev
```

2. **Revisa en distintos dispositivos**:
- Desktop (1920x1080)
- Tablet (768x1024)
- Mobile (375x667)

3. **Prueba performance**:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

4. **Build de producción**:
```bash
npm run build
```

## Troubleshooting

### Las imágenes no cargan
- Verifica que estén en `public/images/`
- Las rutas en JSON deben empezar con `/images/`
- Nombres deben coincidir exactamente (case-sensitive)

### Imágenes muy pesadas
```bash
# Optimizar con ImageMagick
convert input.jpg -quality 80 -resize 1000x1000 output.jpg
```

### Conversión a WebP
```bash
# Instalar sharp-cli
npm install -g sharp-cli

# Convertir
sharp -i input.jpg -o output.webp -f webp -q 80
```

## Referencia Rápida de Rutas

Actualiza estas rutas en los archivos JSON:

**categories.json**:
```json
{
  "image": "/images/categories/textiles.jpg"
}
```

**products.json**:
```json
{
  "images": [
    "/images/products/polo-premium-1.jpg",
    "/images/products/polo-premium-2.jpg"
  ]
}
```

---

Para cualquier duda sobre imágenes, consulta el README principal.
