module.exports = {
  development: {
    username: "root",
    password: process.env.DATABASE_PASSWORD,
    database: "checknumber",
    host: "localhost",
    dialect: "mysql",
    logging: false,
  },
};
