// configs/app.js
const dotenv = require('dotenv');

dotenv.config();

const appConfig = {
  env: process.env.APP_ENV || 'development',
  expressPort: process.env.EXPRESS_PORT || 3000,
  secret: process.env.APP_SECRET ||'NO_SECRET'
}

module.exports = appConfig;
