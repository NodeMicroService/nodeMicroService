const dotEnv = require("dotenv");
const path = require("path");
if (process.env.NODE_ENV !== "prod") {
  const envPath = path.resolve(__dirname, "../../", `.env.dev`);
  dotEnv.config({ path: envPath });
} else {
  dotEnv.config();
}

module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  APP_SECRET: process.env.APP_SECRET,
  BASE_URL: process.env.BASE_URL,

  MSG_BROKER_URL: process.env.MSG_BROKER_URL,
  EXCHANGE_NAME: "ONLINE_SHOPPING",
  CUSTOMER_BINDING_KEY: "CUSTOMER_BINDING_KEY",
  // SHOPPING_BINDING_KEY: "SHOPPING_BINDING_KEY",

  QUEUE_NAME: "CUSTOMER_QUEUE",
};
