const auth = require("./auth");
const db = require("../db");

let pool = db.pool;

// Get the user information
exports.getUsers = (req, res) => {
  try {
    let validate = auth.validate(req.headers.authorization);
    if (validate.valid) {
      pool.getConnection(function (err, connection) {
        // Use the connection

        let userid = validate.userDetail.username.toString().replace(/-/g, "");
        console.log(userid);
        connection.query(
          `select * from Users where userID = '${userid}'`,
          function (error, results, fields) {
            // And done with the connection.
            connection.release();
            // Handle error after the release.
            console.log(results);
            res.send(results);
            if (err) throw err;
          }
        );
      });
    } else {
      res.send(validate);
    }
  } catch (error) {
    res.send(error);
  }
};

// Update the user information
exports.updateUser = (req, res) => {
  try {
    let validate = auth.validate(req.headers.authorization);
    if (validate.valid) {
      pool.getConnection(function (err, connection) {
        // Use the connection

        let userid = validate.userDetail.username.toString().replace(/-/g, "");
        console.log(userid);
        let query = `UPDATE Users SET email = '${req.body.email}' , Name = '${req.body.name}', phone = '${req.body.phone}' where userID = '${userid}'`;
        console.log(query);
        connection.query(query, function (error, results, fields) {
          // And done with the connection.
          connection.release();
          // Handle error after the release.
          const response = {
            statusCode: 200,
            result: results,
          };
          res.send(results).status(200);
          if (err) throw err;
        });
      });
    } else {
      res.send(validate);
    }
  } catch (error) {
    res.send(error);
  }
};
