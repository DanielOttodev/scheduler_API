const common = require("../common");

exports.updateBInfo = (req, res) => {
  common.dbactivity(
    `UPDATE Business SET Address =' ${req.body.address}' , Phone = '${req.body.phone}'
    `,
    req,
    res
  );
};
