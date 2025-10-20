# Portafolio Full Stack - Philipp Reyes

Un portafolio personal moderno con estilo arcade, desarrollado con React, TypeScript y Bootstrap. Este proyecto utiliza tecnologías de vanguardia para ofrecer una experiencia visual única y un rendimiento óptimo.

[![Security: 0 Vulnerabilities](https://img.shields.io/badge/security-0%20vulnerabilities-brightgreen.svg)](https://github.com/philipp717/portafolio-FullStack-Philipp-Reyes)
[![Build: Vite](https://img.shields.io/badge/build-vite-646CFF.svg?logo=vite)](https://vitejs.dev/)
[![Framework: React](https://img.shields.io/badge/framework-react-61DAFB.svg?logo=react)](https://reactjs.org/)
[![Language: TypeScript](https://img.shields.io/badge/language-typescript-3178C6.svg?logo=typescript)](https://www.typescriptlang.org/)
[![Tests: 36/36](https://img.shields.io/badge/tests-36%2F36%20passing-brightgreen.svg)](https://github.com/philipp717/portafolio-FullStack-Philipp-Reyes)

## 🎯 Inicio Rápido (Quick Start)

```bash
# 1. Clonar el repositorio
git clone https://github.com/philipp717/portafolio-FullStack-Philipp-Reyes.git

# 2. Entrar al directorio
cd portafolio-FullStack-Philipp-Reyes

# 3. Instalar dependencias (0 vulnerabilidades ✅)
npm install

# 4. Iniciar servidor de desarrollo
npm run dev

# 5. Abrir http://localhost:3000 en tu navegador 🚀
```

**Para ejecutar los tests:**
```bash
npm test
```

## ✨ Features

- 🚀 **Server-side rendering** con Hot Module Replacement (HMR)
- ⚡️ **Vite** para desarrollo ultra-rápido y builds optimizados
- 📦 **Asset bundling** y optimización automática
- 🔄 **React Router** para navegación fluida
- 🔒 **TypeScript** por defecto para mayor seguridad de tipos
- 🎨 **Bootstrap 5** + CSS personalizado para tema arcade
- 🧪 **Vitest** para testing moderno y rápido
- 🛡️ **0 vulnerabilidades** de seguridad
- 📱 **Diseño responsive** que funciona en todos los dispositivos
- 🎮 **Efectos visuales arcade** con colores vibrantes y animaciones

## 🚀 Inicio Rápido

### 📋 Prerequisitos

Asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (versión 16 o superior)
- npm (incluido con Node.js)
- Git (para clonar el repositorio)
- Un navegador web moderno

### 🔧 Instalación Paso a Paso

#### 1. Clonar el repositorio

```bash
git clone https://github.com/philipp717/portafolio-FullStack-Philipp-Reyes.git
cd portafolio-FullStack-Philipp-Reyes
```

#### 2. Instalar dependencias

```bash
npm install
```

Este comando instalará todas las dependencias necesarias con **0 vulnerabilidades**.

#### 3. Verificar la seguridad (Opcional)

```bash
npm audit
```

Deberías ver: **found 0 vulnerabilities** ✅

### 💻 Iniciar el Proyecto

#### Modo Desarrollo

Inicia el servidor de desarrollo con Hot Module Replacement:

```bash
npm run dev
```

El proyecto se iniciará en `http://localhost:3000/` y se abrirá automáticamente en tu navegador.

**Características del modo desarrollo:**
- 🔥 Hot Module Replacement (HMR) - Los cambios se reflejan instantáneamente
- ⚡ Compilación ultra-rápida con Vite
- 🐛 Source maps para debugging
- 🔄 Auto-refresh del navegador

## 🧪 Testing del Proyecto

### Ejecutar Todos los Tests

```bash
npm test
```

Este comando ejecutará todos los tests en modo watch (se re-ejecutan al guardar cambios).

### Ejecutar Tests Una Sola Vez

```bash
npm test -- --run
```

### Ver Cobertura de Tests

```bash
npm run test:coverage
```

Esto generará un reporte de cobertura mostrando qué porcentaje del código está cubierto por tests.

### Resultados Esperados

```
✓ Test Files  9 passed (9)
✓ Tests  36 passed (36)
✓ found 0 vulnerabilities
```

**Tests incluidos:**
- ✅ Componente Home (5 tests)
- ✅ Componente Header (4 tests)
- ✅ Componente Footer (4 tests)
- ✅ Componente About (5 tests)
- ✅ Componente Contact (2 tests)
- ✅ Componente Projects (4 tests)
- ✅ Componente Skills (5 tests)
- ✅ Tests de seguridad (3 tests)
- ✅ Tests de integración (4 tests)

## 🏗️ Build de Producción

### Crear Build Optimizado

```bash
npm run build
```

Este comando:
- 🗜️ Minifica JavaScript y CSS
- 📦 Optimiza imágenes y assets
- 🌳 Realiza tree-shaking para eliminar código no usado
- 🔄 Genera hashes para cache busting
- ✅ Verifica TypeScript sin errores

Los archivos optimizados se generarán en la carpeta `build/`.

### Previsualizar el Build

```bash
npm run preview
```

Esto iniciará un servidor local para previsualizar el build de producción en `http://localhost:4173/`.

## 📁 Project Structure

```
├── src/
│   ├── components/      # Componentes React reutilizables
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Home.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── styles/          # Archivos CSS modulares
│   │   ├── App.css
│   │   ├── index.css
│   │   ├── cursor.css
│   │   └── ...
│   ├── assets/          # Imágenes y recursos estáticos
│   │   └── img/
│   ├── tests/           # Pruebas unitarias
│   ├── App.tsx          # Componente principal
│   └── index.tsx        # Punto de entrada
├── public/              # Archivos públicos estáticos
├── index.html           # Template HTML
├── vite.config.ts       # Configuración de Vite
├── tsconfig.json        # Configuración de TypeScript
└── package.json         # Dependencias y scripts
```

## 🛠️ Tech Stack

### Core
- **React 18** - Librería de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **React Router** - Navegación SPA

### Styling
- **Bootstrap 5** - Framework CSS
- **React Bootstrap** - Componentes de Bootstrap para React
- **CSS3** - Estilos personalizados

### Testing
- **Vitest** - Framework de testing moderno
- **@testing-library/react** - Testing utilities

### Development
- **ESLint** - Linter para código limpio
- **TypeScript ESLint** - Reglas específicas para TS

## 📜 Scripts Disponibles

| Script | Comando | Descripción |
|--------|---------|-------------|
| **Desarrollo** | `npm run dev` | Inicia el servidor de desarrollo con HMR en `http://localhost:3000` |
| **Build** | `npm run build` | Crea build de producción optimizado en carpeta `build/` |
| **Preview** | `npm run preview` | Previsualiza el build de producción en `http://localhost:4173` |
| **Tests** | `npm test` | Ejecuta todos los tests en modo watch |
| **Test Run** | `npm test -- --run` | Ejecuta tests una sola vez (ideal para CI/CD) |
| **Coverage** | `npm run test:coverage` | Genera reporte de cobertura de tests |
| **Lint** | `npm run lint` | Verifica el código con ESLint |

## 🔍 Verificación de Seguridad

### Auditoría de Dependencias

```bash
npm audit
```

**Resultado esperado:**
```
found 0 vulnerabilities
```

### Actualizar Dependencias

Si en el futuro necesitas actualizar dependencias:

```bash
# Ver dependencias desactualizadas
npm outdated

# Actualizar a versiones compatibles
npm update

# Verificar nuevamente
npm audit
```

## 🐛 Troubleshooting

### El puerto 3000 está en uso

```bash
# En Windows PowerShell
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# O especifica otro puerto
npm run dev -- --port 3001
```

### Errores de dependencias

```bash
# Limpia caché y reinstala
rm -rf node_modules package-lock.json
npm install
```

### Los tests fallan

```bash
# Verifica que todas las dependencias estén instaladas
npm install

# Ejecuta los tests con más información
npm test -- --reporter=verbose
```

### Problemas con TypeScript

```bash
# Verifica la configuración de TypeScript
npx tsc --noEmit
```

## 🔒 Security

Este proyecto mantiene **0 vulnerabilidades de seguridad**. Todas las dependencias se mantienen actualizadas regularmente.

Para verificar el estado de seguridad:

```bash
npm audit
```

## 🌐 Deployment

Este proyecto puede desplegarse en cualquier plataforma que soporte aplicaciones Node.js, incluyendo:

- **Vercel** (Recomendado)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**
- **Azure Static Web Apps**
- **Google Cloud Platform**

### Deploy en Vercel

```bash
npm install -g vercel
vercel
```

## 🤝 Contributing

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 License

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## ✅ Checklist de Verificación

Antes de hacer deploy, verifica:

- [ ] `npm install` completa sin errores
- [ ] `npm audit` muestra 0 vulnerabilidades
- [ ] `npm test` todos los tests pasan (36/36)
- [ ] `npm run build` genera el build correctamente
- [ ] `npm run preview` muestra el sitio funcionando
- [ ] Sin errores de TypeScript
- [ ] Sin warnings de ESLint

## 📊 Métricas del Proyecto

- ✅ **Tests:** 36/36 pasando (100%)
- ✅ **Vulnerabilidades:** 0
- ✅ **Componentes:** 7 principales
- ✅ **Cobertura de Tests:** Alta
- ✅ **TypeScript:** Strict mode
- ✅ **Performance:** Optimizado con Vite

## 👤 Autor

**Philipp Reyes**

- GitHub: [@philipp717](https://github.com/philipp717)
- Proyecto: [portafolio-FullStack-Philipp-Reyes](https://github.com/philipp717/portafolio-FullStack-Philipp-Reyes)

---

⭐ **Si este proyecto te fue útil, considera darle una estrella en GitHub!**

Construido con ❤️ usando React, TypeScript y Vite | © 2025 Philipp Reyes