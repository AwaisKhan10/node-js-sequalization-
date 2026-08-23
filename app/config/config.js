const fs = require("fs");
const path = require("path");

const envData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../../config.json"))
);
const currentEnv = process.env.NODE_ENV || "local";

process.env = { ...process.env, ...envData[currentEnv] };

module.exports = {
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET,
  db: {
    username: process.env.username,
    password: process.env.password,
    database: process.env.database,
    host: process.env.host,
    dialect: process.env.dialect,
    port: process.env.port,
  },
};
