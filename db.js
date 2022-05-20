const mysql = require("mysql");
let pool = mysql.createPool({
  host: "zenlydbfree.c2gvp4xdttbs.ap-southeast-2.rds.amazonaws.com",
  user: "admin",
  password: "1Booster23",
  database: "zenlydbfree",
});
module.exports = {
  pool,
};
