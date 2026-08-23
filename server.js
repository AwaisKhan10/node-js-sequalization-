const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const config = require("./app/config/config");
const db = require("./db");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./app/routes/health.routes")(app);
require("./app/routes/user.routes")(app);

async function start() {
  try {
    await db.sequelize.authenticate();
    console.log("PostgreSQL connected successfully");
    app.listen(config.PORT, () => {
      console.log(`Server on ${config.PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to PostgreSQL:", error.message);
    process.exit(1);
  }
}

start();
