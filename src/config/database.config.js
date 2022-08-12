
let result = (require('dotenv').config())
module.exports = {
    HOST: "localhost",
    USER: `${result?.parsed?.DB_USER}`,
    PASSWORD: `${result?.parsed?.DB_PASS}`,
    PORT: 5432,
    DB: "postgres",
    dialect: "postgres",
};