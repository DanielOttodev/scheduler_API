const common = require("../common");

exports.getSCat = (req, res) => {
  common.dbactivity(`select * from ServiceCategories`, req, res);
};
exports.updateSCat = (req, res) => {
  common.dbactivity(
    `UPDATE ServiceCategories SET Description = '${req.body.description}'
    `,
    req,
    res
  );
};

exports.addSCat = (req, res) => {
  common.dbactivity(
    `INSERT into ServiceCategories VALUES (0 ,'${req.body.description}')`,
    req,
    res
  );
};

exports.deleteScat = (req, res) => {
  common.dbactivity(
    `DELETE from ServiceCategories where idServiceCategories ='${req.body.idServiceCategories}'`,
    req,
    res
  );
};
