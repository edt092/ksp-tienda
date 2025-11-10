# Guía de Despliegue en Vercel

Esta guía te llevará paso a paso para desplegar **kspromocionales-tienda** en Vercel.

## Pre-requisitos

- [ ] Proyecto funcionando localmente (`npm run dev`)
- [ ] Cuenta de GitHub (opcional pero recomendado)
- [ ] Cuenta de Vercel (gratuita)
- [ ] Imágenes agregadas o placeholders listos
- [ ] Variables de entorno configuradas

## Opción 1: Despliegue con GitHub (Recomendado)

### Paso 1: Crear Repositorio en GitHub

```bash
# Inicializar git (si no está inicializado)
git init

# Agregar remote
git remote add origin https://github.com/TU_USUARIO/kspromocionales-tienda.git

# Commit inicial
git add .
git commit -m "Initial commit: KS Promocionales store"

# Push a GitHub
git push -u origin main
```

### Paso 2: Conectar Vercel con GitHub

1. Ve a [vercel.com](https://vercel.com) y crea una cuenta
2. Click en **"Add New Project"**
3. Click en **"Import Git Repository"**
4. Autoriza a Vercel para acceder a tu GitHub
5. Selecciona el repositorio `kspromocionales-tienda`

### Paso 3: Configurar el Proyecto

Vercel detectará automáticamente Next.js. Configura:

**Framework Preset**: Next.js

**Build Command**: `next build` (auto-detectado)

**Output Directory**: `out` (ya configurado en next.config.js)

**Environment Variables** (click "Add" para cada una):

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_WHATSAPP_NUMBER=593999999999
NEXT_PUBLIC_SITE_URL=https://tu-dominio.vercel.app
```

### Paso 4: Deploy

1. Click en **"Deploy"**
2. Espera 2-3 minutos mientras Vercel construye el sitio
3. Una vez completado, recibirás una URL tipo: `https://kspromocionales-tienda.vercel.app`

### Paso 5: Configurar Dominio Personalizado

1. Ve a **Project Settings** > **Domains**
2. Agrega tu dominio: `kspromocionales.com`
3. Configura DNS según instrucciones de Vercel:
   - Tipo: `A` → Valor: `76.76.21.21`
   - Tipo: `CNAME` → Nombre: `www` → Valor: `cname.vercel-dns.com`
4. Espera propagación DNS (hasta 48h, usualmente menos de 1h)

## Opción 2: Despliegue con Vercel CLI

### Paso 1: Instalar Vercel CLI

```bash
npm install -g vercel
```

### Paso 2: Login

```bash
vercel login
```

Sigue las instrucciones para autenticarte.

### Paso 3: Deploy

Desde la carpeta del proyecto:

```bash
vercel
```

Responde las preguntas:

```
? Set up and deploy "~/kspromocionales-tienda"? [Y/n] Y
? Which scope do you want to deploy to? (Tu cuenta)
? Link to existing project? [y/N] N
? What's your project's name? kspromocionales-tienda
? In which directory is your code located? ./
```

Vercel detectará Next.js automáticamente.

### Paso 4: Configurar Variables de Entorno

```bash
vercel env add NEXT_PUBLIC_GA_ID
# Pega el valor cuando se solicite
# Selecciona: Production, Preview, Development

vercel env add NEXT_PUBLIC_WHATSAPP_NUMBER
vercel env add NEXT_PUBLIC_SITE_URL
```

### Paso 5: Deploy a Producción

```bash
vercel --prod
```

## Configuración Post-Deploy

### 1. Verificar SEO

Verifica que estos archivos sean accesibles:

- `https://tu-dominio.com/sitemap.xml`
- `https://tu-dominio.com/robots.txt`

### 2. Configurar Google Search Console

1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Agrega tu propiedad (dominio)
3. Verifica propiedad con método DNS o archivo HTML
4. Envía sitemap: `https://tu-dominio.com/sitemap.xml`

### 3. Configurar Google Analytics

1. Crea propiedad GA4 en [Google Analytics](https://analytics.google.com)
2. Copia el ID (formato: `G-XXXXXXXXXX`)
3. Actualiza variable de entorno en Vercel:
   ```bash
   vercel env rm NEXT_PUBLIC_GA_ID production
   vercel env add NEXT_PUBLIC_GA_ID production
   ```
4. Re-deploy: `vercel --prod`

### 4. Probar WhatsApp

1. Abre el sitio en móvil
2. Click en cualquier botón de WhatsApp
3. Verifica que abra WhatsApp con el mensaje correcto
4. Confirma que el número sea correcto

## Testing de Performance

### Google PageSpeed Insights

```
https://pagespeed.web.dev/
```

Objetivo:
- Mobile: > 90
- Desktop: > 95

### GTmetrix

```
https://gtmetrix.com/
```

Objetivo:
- Performance: A
- Structure: A

### Lighthouse (Chrome DevTools)

```
F12 > Lighthouse > Generate Report
```

Objetivos:
- Performance: > 90
- Accessibility: > 95
- Best Practices: 100
- SEO: 100

## Actualizaciones Continuas

### Con GitHub Integration

Cada vez que hagas push a `main`, Vercel auto-despliega:

```bash
git add .
git commit -m "Update: nuevos productos agregados"
git push
```

Vercel detecta el push y despliega automáticamente.

### Con Vercel CLI

```bash
# Deploy a preview (staging)
vercel

# Deploy a producción
vercel --prod
```

## Rollback en Caso de Error

### Desde Dashboard

1. Ve a **Deployments**
2. Encuentra el deployment anterior funcional
3. Click en **"..."** > **"Promote to Production"**

### Con CLI

```bash
# Ver deployments
vercel ls

# Rollback al deployment anterior
vercel rollback
```

## Monitoreo

### Analytics de Vercel

Ve a **Analytics** en el dashboard para ver:
- Visitas totales
- Top pages
- Países de origen
- Dispositivos

### Logs en Tiempo Real

```bash
vercel logs kspromocionales-tienda --follow
```

## Optimizaciones Avanzadas

### Configurar Regiones

El proyecto ya está configurado para `gru1` (São Paulo) en `vercel.json`.

Para múltiples regiones (plan pro):

```json
{
  "regions": ["gru1", "iad1", "sfo1"]
}
```

### Headers de Seguridad

Ya configurados en `vercel.json`:
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy

### Cache de Imágenes

Imágenes en `/images/*` tienen cache de 1 año (inmutable).

## Troubleshooting

### Build Falla

**Error**: `Module not found`

**Solución**:
```bash
# Limpia y reinstala local
rm -rf node_modules .next
npm install
npm run build

# Si funciona local, push a GitHub
git push
```

### Rutas 404

**Error**: Páginas dinámicas dan 404

**Solución**: Verifica `next.config.js` tenga:
```js
output: 'export'
```

### Variables de entorno no funcionan

**Error**: WhatsApp o GA no funcionan

**Solución**:
```bash
# Verifica variables
vercel env ls

# Re-agrega si faltan
vercel env add NEXT_PUBLIC_WHATSAPP_NUMBER production
```

### Imágenes no cargan

**Error**: 404 en `/images/*`

**Solución**:
- Verifica que existan en `public/images/`
- Push a GitHub para incluirlas
- Re-deploy

## Costos

**Plan Hobby (Gratis)**:
- 100 GB bandwidth/mes
- Sitios ilimitados
- SSL automático
- Dominios personalizados ilimitados
- Deploy automático con Git

Para tráfico mayor, considera Plan Pro ($20/mes):
- 1 TB bandwidth
- Analytics avanzados
- Password protection
- Múltiples regiones

## Checklist Final

Antes de hacer el sitio público:

- [ ] Build exitoso en Vercel
- [ ] Todas las páginas cargan correctamente
- [ ] Botones de WhatsApp funcionan
- [ ] Google Analytics registra eventos
- [ ] Sitemap accesible
- [ ] Robots.txt accesible
- [ ] Imágenes optimizadas y cargando
- [ ] Performance > 90 en PageSpeed
- [ ] Dominio personalizado configurado
- [ ] SSL activo (https)
- [ ] Probado en móvil y desktop

## Recursos

- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel CLI Reference](https://vercel.com/docs/cli)

---

¿Problemas? Revisa los logs o contacta: contacto@kspromocionales.com
