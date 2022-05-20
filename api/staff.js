const common = require("../common");

exports.getStaff = (req, res) => {
  common.dbactivity(`select * from staff`, req, res);
};
exports.updateStaff = (req, res) => {
  common.dbactivity(
    `UPDATE services SET name = ${req.body.name}
    `,
    req,
    res
  );
};

exports.addStaff = (req, res) => {
  common.dbactivity(`INSERT into staff VALUES ('${req.body.name}' , '1' )`);
};

exports.deleteStaff = (req, res) => {
  common.dbactivity(
    `DELETE from staff where idStaff = '${req.body.idStaff}'`,
    req,
    res
  );
};
