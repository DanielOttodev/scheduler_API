const auth = require("./api/auth");
const db = require("./db");
let pool = db.pool;

function dbactivity(sqlquery, req, res) {
  try {
    console.log(`${req.route.stack[0].method} REQUEST on ` + req.route.path);
    let validate = auth.validate(req.headers.authorization);
    if (validate.valid) {
      pool.getConnection(function (err, connection) {
        let userid = validate.userDetail.username.toString().replace(/-/g, "");
        console.log(userid);
        connection.query(sqlquery, function (error, results, fields) {
          connection.release();
          console.log("query: " + sqlquery);
          console.log(results);
          if (error) {
            res.send(error);
          } else {
            res.send(results);
          }
        });
      });
    } else {
      res.send(validate);
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}

module.exports = {
  dbactivity,
};
