module.exports = {
    HOST: "localhost",
    USER: `${process.env.DB_USER}`,
    PASSWORD: `${process.env.DB_PASS}`,
    PORT: 5432,
    DB: "postgres",
    dialect: "postgres",
};