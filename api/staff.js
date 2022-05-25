const common = require("../common");

exports.getStaff = (req, res) => {
  common.dbactivity(`select * from Staff`, req, res);
};
exports.updateStaff = (req, res) => {
  common.dbactivity(
    `UPDATE Staff SET name = ${req.body.name}
    `,
    req,
    res
  );
};

exports.addStaff = (req, res) => {
  common.dbactivity(
    `INSERT into Staff VALUES (0,'${req.body.name}','${req.body.email}' , '1' )`,
    req,
    res
  );
};

exports.deleteStaff = (req, res) => {
  common.dbactivity(
    `DELETE from Staff where idStaff = '${req.body.idStaff}'`,
    req,
    res
  );
};
