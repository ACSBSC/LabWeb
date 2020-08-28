// Importa el paquete dotenv
const dotenv = require('dotenv');

// Carga la configuración del ambiente
dotenv.config();

// Crea un objecto con la información de la configuración
const appConfig = {
  // Establecemos valores por defecto
  // Como ninguna versión de Node soporta nullish coalescing operator (??) tenemos
  // que usar una operación lógica.
  env: process.env.NODE_ENV || 'development',
  express_port: process.env.EXPRESS_PORT || 8000
}

module.exports = appConfig;