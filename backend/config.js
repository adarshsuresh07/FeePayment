require('dotenv').config()

module.exports = {
  env: process.env.NODE_ENV,
  JWTSecret: process.env.JWT_SECRET_KEY,
  serverPort: process.env.SERVER_PORT,
  stripeSecret: process.env.STRIPE_SECRET_KEY
}