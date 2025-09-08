# Veltec Solutions - Guía de Despliegue

## 🚀 Hosting Gratuito Recomendado

### 1. **Vercel** (Recomendado para React)
- **URL**: https://vercel.com
- **Ventajas**:
  - Optimizado para React y Vite
  - Despliegue automático desde GitHub
  - CDN global incluido
  - Dominio personalizado gratuito
  - SSL automático
  - Builds automáticos en cada push

**Pasos para desplegar en Vercel:**
1. Crear cuenta en Vercel
2. Conectar con GitHub
3. Importar el repositorio
4. Configurar dominio personalizado (veltec.com.co)
5. ¡Listo! Despliegue automático

### 2. **Netlify**
- **URL**: https://netlify.com
- **Ventajas**:
  - Drag & drop para archivos estáticos
  - Integración con GitHub
  - Formularios gratuitos
  - CDN global
  - Dominio personalizado

**Pasos para desplegar en Netlify:**
1. Crear cuenta en Netlify
2. Arrastrar carpeta `dist` (después del build)
3. Configurar dominio personalizado
4. Configurar formularios de contacto

### 3. **GitHub Pages**
- **URL**: https://pages.github.com
- **Ventajas**:
  - Gratuito con repositorio público
  - Integración directa con GitHub
  - SSL incluido
  - Dominio personalizado

## 📋 Preparación para Despliegue

### 1. Build de Producción
```bash
npm run build
```

### 2. Configuración de Dominio
Para configurar veltec.com.co necesitarás:
- Registrar el dominio en un proveedor (GoDaddy, Namecheap, etc.)
- Configurar DNS para apuntar a tu hosting
- Configurar SSL/HTTPS

### 3. Variables de Entorno
Crear archivo `.env`:
```env
VITE_APP_TITLE=Veltec Solutions
VITE_APP_DESCRIPTION=Desarrollo de software a la medida
VITE_APP_URL=https://veltec.com.co
VITE_APP_EMAIL=veltecsolutions@outlook.com
VITE_APP_PHONE=+573017842687
```

## 🔧 Configuración Específica por Plataforma

### Vercel (Recomendado)
1. **Crear `vercel.json`**:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

2. **Configurar dominio**:
   - Ir a Project Settings > Domains
   - Agregar veltec.com.co
   - Configurar DNS en el proveedor del dominio

### Netlify
1. **Crear `_redirects`** en la carpeta `public`:
```
/*    /index.html   200
```

2. **Crear `netlify.toml`**:
```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

## 📊 Optimización para Producción

### 1. SEO y Meta Tags
- Meta tags ya configurados en `index.html`
- Open Graph tags incluidos
- Twitter Card tags incluidos

### 2. Performance
- Lazy loading implementado
- Code splitting automático
- CSS purging con Tailwind
- Imágenes optimizadas

### 3. Analytics (Opcional)
Agregar Google Analytics en `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🚀 Pasos para Desplegar

### Opción 1: Vercel (Más Fácil)
1. Subir código a GitHub
2. Conectar Vercel con GitHub
3. Configurar dominio personalizado
4. ¡Listo!

### Opción 2: Netlify
1. Ejecutar `npm run build`
2. Arrastrar carpeta `dist` a Netlify
3. Configurar dominio personalizado
4. ¡Listo!

### Opción 3: GitHub Pages
1. Subir código a GitHub
2. Habilitar GitHub Pages
3. Configurar dominio personalizado
4. ¡Listo!

## 📞 Información de Contacto Actualizada

- **Email**: veltecsolutions@outlook.com
- **WhatsApp**: +57 301 784 2687
- **Sitio Web**: veltec.com.co (después del despliegue)

## 🔍 Verificación Post-Despliegue

1. ✅ Verificar que todas las páginas cargan correctamente
2. ✅ Probar formulario de contacto
3. ✅ Verificar enlaces de WhatsApp y email
4. ✅ Probar en diferentes dispositivos
5. ✅ Verificar velocidad de carga
6. ✅ Configurar SSL/HTTPS
7. ✅ Configurar analytics (opcional)

---

**¡Tu landing page está lista para producción!** 🎉
