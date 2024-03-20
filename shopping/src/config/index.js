const dotEnv = require("dotenv");
const path = require("path");
console.log(process.env.NODE_ENV);
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

  MSG_BROKER_URL: process.env.MSG_BROKER_URL,
  EXCHANGE_NAME: "ONLINE_SHOPPING",
  SHOPPING_BINDING_KEY: "SHOPPING_BINDING_KEY",
  CUSTOMER_BINDING_KEY: "CUSTOMER_BINDING_KEY",
  // SHOPPING_BINDING_KEY: "SHOPPING_BINDING_KEY",

  QUEUE_NAME: "SHOPPING_QUEUE",
};
