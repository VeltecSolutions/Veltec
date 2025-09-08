#!/bin/bash

# Script para limpiar configuración de Vercel y resolver el error de funciones

echo "🧹 Limpiando configuración de Vercel..."

# Eliminar archivos de configuración problemáticos
echo "📁 Eliminando archivos de configuración..."
rm -f vercel.json
rm -f vercel-simple.json
rm -rf .vercel

# Crear configuración limpia
echo "📝 Creando configuración limpia..."
cat > vercel.json << 'EOF'
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
EOF

# Verificar build
echo "🔨 Verificando build..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build exitoso!"
    echo ""
    echo "🚀 Pasos siguientes:"
    echo "1. Subir cambios a GitHub:"
    echo "   git add ."
    echo "   git commit -m 'Fix Vercel configuration'"
    echo "   git push"
    echo ""
    echo "2. En Vercel Dashboard:"
    echo "   - Eliminar proyecto actual"
    echo "   - Crear nuevo proyecto"
    echo "   - Importar repositorio"
    echo "   - Framework: Vite"
    echo "   - Build Command: npm run build"
    echo "   - Output Directory: dist"
    echo ""
    echo "3. Configurar dominio: veltec.com.co"
else
    echo "❌ Error en el build. Revisar configuración."
fi

echo ""
echo "📞 Información de contacto actualizada:"
echo "   Email: veltecsolutions@outlook.com"
echo "   WhatsApp: +57 301 784 2687"
