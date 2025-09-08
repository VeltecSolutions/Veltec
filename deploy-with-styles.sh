#!/bin/bash

# Script para desplegar Veltec Solutions con estilos corregidos

echo "🎨 Verificando que los estilos estén funcionando..."

# Limpiar build anterior
echo "🧹 Limpiando build anterior..."
rm -rf dist

# Build con estilos corregidos
echo "🔨 Construyendo proyecto con estilos..."
npm run build

# Verificar que el CSS se generó correctamente
CSS_SIZE=$(du -k dist/assets/*.css | awk '{print $1}')
echo "📊 Tamaño del CSS generado: ${CSS_SIZE}KB"

if [ "$CSS_SIZE" -gt 20 ]; then
    echo "✅ CSS generado correctamente (${CSS_SIZE}KB)"
else
    echo "❌ Error: CSS muy pequeño, revisar configuración"
    exit 1
fi

echo ""
echo "🚀 Proyecto listo para despliegue!"
echo ""
echo "📋 Pasos siguientes:"
echo "1. Subir cambios a GitHub:"
echo "   git add ."
echo "   git commit -m 'Fix CSS styles - Tailwind working correctly'"
echo "   git push"
echo ""
echo "2. En Vercel Dashboard:"
echo "   - Eliminar proyecto actual (si existe)"
echo "   - Crear nuevo proyecto"
echo "   - Importar repositorio"
echo "   - Framework: Vite"
echo "   - Build Command: npm run build"
echo "   - Output Directory: dist"
echo ""
echo "3. Configurar dominio: veltec.com.co"
echo ""
echo "📞 Información de contacto:"
echo "   Email: veltecsolutions@outlook.com"
echo "   WhatsApp: +57 301 784 2687"
echo ""
echo "✅ Los estilos ahora deberían cargar correctamente!"
