# Portafolio Full Stack - Philipp Reyes

Un portafolio personal moderno con estilo arcade, desarrollado con React, TypeScript y Bootstrap. Este proyecto utiliza tecnologías de vanguardia para ofrecer una experiencia visual única y un rendimiento óptimo.

[![Security: 0 Vulnerabilities](https://img.shields.io/badge/security-0%20vulnerabilities-brightgreen.svg)](https://github.com/philipp717/portafolio-FullStack-Philipp-Reyes)
[![Build: Vite](https://img.shields.io/badge/build-vite-646CFF.svg?logo=vite)](https://vitejs.dev/)
[![Framework: React](https://img.shields.io/badge/framework-react-61DAFB.svg?logo=react)](https://reactjs.org/)
[![Language: TypeScript](https://img.shields.io/badge/language-typescript-3178C6.svg?logo=typescript)](https://www.typescriptlang.org/)

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

## 🚀 Getting Started

### 📋 Prerequisites

Asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (versión 16 o superior)
- npm (incluido con Node.js)
- Un navegador web moderno

### 🔧 Installation

Instala las dependencias:

```bash
npm install
```

### 💻 Development

Inicia el servidor de desarrollo con HMR:

```bash
npm run dev
```

Tu aplicación estará disponible en `http://localhost:3000`.

## 🏗️ Building for Production

Crea un build optimizado para producción:

```bash
npm run build
```

El build generará los archivos optimizados en la carpeta `dist/`.

### Vista previa del build de producción:

```bash
npm run preview
```

## 🧪 Testing

Ejecuta los tests:

```bash
npm run test
```

Para ver el coverage de tests:

```bash
npm run test:coverage
```

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

## 📜 Available Scripts

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Crea build de producción optimizado |
| `npm run preview` | Previsualiza el build de producción |
| `npm run test` | Ejecuta los tests con Vitest |
| `npm run test:coverage` | Genera reporte de cobertura de tests |
| `npm run lint` | Verifica el código con ESLint |

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

## 👤 Author

**Philipp Reyes**

- GitHub: [@philipp717](https://github.com/philipp717)
- Proyecto: [portafolio-FullStack-Philipp-Reyes](https://github.com/philipp717/portafolio-FullStack-Philipp-Reyes)

---

Construido con ❤️ usando React, TypeScript y Vite