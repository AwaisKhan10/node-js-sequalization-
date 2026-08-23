const { Sequelize, DataTypes } = require("sequelize");
const config = require("../app/config/config");

const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  {
    host: config.db.host,
    port: Number(config.db.port),
    dialect: config.db.dialect,
    logging: false,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.role = require("./models/role.model")(sequelize, DataTypes);
db.user = require("./models/user.model")(sequelize, DataTypes);

db.role.hasMany(db.user, { foreignKey: "role_id" });
db.user.belongsTo(db.role, { foreignKey: "role_id" });

module.exports = db;
