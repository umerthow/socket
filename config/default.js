const dotenv = require('dotenv');
const exceptions = ['production', 'uat'];

if (!exceptions.includes(process.env.NODE_ENV)) {
  dotenv.config()
}

const config = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
} 


module.exports = config