# Veltec Solutions - Landing Page Moderna

Una landing page moderna y completamente interactiva para Veltec Solutions, desarrollada con React, Tailwind CSS y Framer Motion.

## 🚀 Características Principales

### ✨ Diseño Moderno e Interactivo
- **Logo animado** con tipografía Poppins y efectos de brillo
- **Animaciones fluidas** con Framer Motion
- **Transiciones suaves** entre páginas
- **Efectos hover** y micro-interacciones
- **Diseño responsivo** optimizado para todos los dispositivos

### 🎯 SaaS con Nombres Creativos
1. **TalentFlow Pro** - SaaS para gestión de talento humano
2. **PropertyQuote** - Cotizador inmobiliario avanzado
3. **Desarrollo de Software a la Medida** - Soluciones personalizadas
4. **SPAs Avanzadas** - Single Page Applications modernas

### 📱 Páginas Separadas
- **Home** (`/`) - Página principal con hero section y preview de servicios
- **Servicios** (`/servicios`) - Detalles completos de cada servicio
- **Nosotros** (`/nosotros`) - Información de la empresa, equipo y valores
- **Contacto** (`/contacto`) - Formulario avanzado con múltiples opciones de contacto

### 🎨 Tecnologías Utilizadas

- **React 18** - Framework principal
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos
- **Framer Motion** - Animaciones avanzadas
- **React Router** - Navegación entre páginas
- **Lucide React** - Iconografía moderna
- **Heroicons** - Iconos adicionales

## 🛠️ Instalación y Desarrollo

### Prerrequisitos
- Node.js 16+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone <repository-url>
cd veltec-solutions

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles
```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build para producción
npm run preview  # Preview del build
npm run lint     # Linter de código
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── VeltecLogo.jsx  # Logo animado con Poppins
│   ├── Navigation.jsx   # Navegación con animaciones
│   └── Footer.jsx      # Footer completo
├── pages/              # Páginas principales
│   ├── Home.jsx        # Página principal
│   ├── Services.jsx    # Página de servicios
│   ├── About.jsx       # Página sobre nosotros
│   └── Contact.jsx     # Página de contacto
├── App.jsx             # Componente principal con Router
├── main.jsx           # Punto de entrada
└── index.css          # Estilos globales y Tailwind
```

## 🎨 Paleta de Colores

Basada en el branding de Veltec:

```css
Primary Purple: #8A2BE2
Secondary Blue: #4169E1
Dark Purple: #4B0082
Light Purple: #DDA0DD
```

## ✨ Características Destacadas

### Logo Animado
- Efecto de brillo continuo
- Animación de rotación sutil
- Gradiente dinámico
- Tipografía Poppins

### Animaciones Avanzadas
- **Page transitions** suaves entre rutas
- **Scroll animations** con Intersection Observer
- **Hover effects** en todos los elementos interactivos
- **Loading states** y micro-interacciones

### Formulario de Contacto Inteligente
- Validación en tiempo real
- Múltiples opciones de contacto (WhatsApp, Email, Videollamada)
- Mensajes pre-formateados para WhatsApp
- Estados de carga y confirmación

### Diseño Responsivo
- **Mobile First** approach
- Breakpoints optimizados para tablet y desktop
- Navegación móvil con menú hamburguesa animado
- Elementos adaptativos

## 🚀 Despliegue

### Build para Producción
```bash
npm run build
```

### Hosting Recomendado
- **Vercel** - Optimizado para React
- **Netlify** - Fácil despliegue con drag & drop
- **AWS S3 + CloudFront** - Para mayor control

### Variables de Entorno
```env
VITE_APP_TITLE=Veltec Solutions
VITE_APP_DESCRIPTION=Desarrollo de software a la medida
VITE_APP_URL=https://veltec.com.co
```

## 📊 Performance

### Métricas Objetivo
- **Lighthouse Score**: 95+ en todas las categorías
- **First Contentful Paint**: < 1.2s
- **Largest Contentful Paint**: < 2.0s
- **Cumulative Layout Shift**: < 0.1

### Optimizaciones Incluidas
- Lazy loading de componentes
- Code splitting automático
- Imágenes optimizadas
- CSS purging con Tailwind

## 🔧 Personalización

### Cambiar Información de Contacto
1. **WhatsApp**: Buscar `573001234567` en los archivos
2. **Email**: Buscar `info@veltec.com.co`
3. **Teléfono**: Actualizar en componentes de contacto

### Modificar Servicios
1. Editar array `services` en `Services.jsx`
2. Actualizar nombres y descripciones
3. Cambiar iconos y colores

### Personalizar Animaciones
1. Modificar `pageVariants` en `App.jsx`
2. Ajustar `containerVariants` en componentes
3. Cambiar duraciones en `transition`

## 📱 Compatibilidad

### Navegadores Soportados
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Dispositivos
- **Mobile**: iOS 12+, Android 8+
- **Tablet**: iPadOS 14+, Android 8+
- **Desktop**: Windows 10+, macOS 10.15+

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Soporte

Para soporte técnico o consultas:
- **Email**: info@veltec.com.co
- **WhatsApp**: +57 300 123 4567
- **Sitio Web**: https://veltec.com.co

---

**Desarrollado con ❤️ por Veltec Solutions**

*Transformando ideas en soluciones tecnológicas innovadoras*