module.exports = {
  development: {
    username: "checknumber",
    password: process.env.DATABASE_PASSWORD,
    database: "checknumber",
    host: "checknumber-database.csmeh7i5hzpa.ap-northeast-2.rds.amazonaws.com",
    dialect: "mysql",
    logging: false,
  },
};
