const dbConfig = require("../config/database.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
});

const db = {}
db.Sequelize= Sequelize;
db.sequelize= sequelize;

db.employee= require("./employee")(sequelize, Sequelize);
db.companies= require("./companies")(sequelize, Sequelize);

module.exports = db;