const helmet = require('helmet');
const xssClean = require('xss-clean');

module.exports = {
  // Configuración de Helmet para seguridad HTTP
  helmetConfig: helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'", 'https:'],
        imgSrc: ["'self'", 'data:', 'https:'],
        connectSrc: ["'self'"],
        fontSrc: ["'self'", 'https:', 'data:'],
        objectSrc: ["'none'"],
        mediaSrc: ["'self'"],
        frameSrc: ["'none'"],
      },
    },
    crossOriginEmbedderPolicy: true,
    crossOriginOpenerPolicy: true,
    crossOriginResourcePolicy: { policy: "cross-origin" },
    dnsPrefetchControl: true,
    frameguard: { action: 'deny' },
    hidePoweredBy: true,
    hsts: true,
    ieNoOpen: true,
    noSniff: true,
    permittedCrossDomainPolicies: false,
    referrerPolicy: { policy: 'same-origin' },
    xssFilter: true,
  }),

  // Configuración de XSS Clean
  xssConfig: xssClean(),

  // Configuración de tests seguros
  secureTestConfig: {
    // Configuración para tests
    testConfig: {
      sanitize: true,
      validateDom: true,
      checkXss: true,
      checkSql: true,
    },
    // Configuración para el entorno de pruebas
    testEnvironment: {
      runInBand: true,
      detectOpenHandles: true,
      forceExit: true,
    },
  },
};