const mysql = require("mysql");
let pool = mysql.createPool({
  host: "",
  user: "",
  password: "",
  database: "",
});
module.exports = {
  pool,
};
