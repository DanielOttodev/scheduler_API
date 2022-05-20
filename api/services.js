const common = require("../common");

exports.getServices = (req, res) => {
  common.dbactivity(`select * from services`, req, res);
};
exports.updateService = (req, res) => {
  common.dbactivity(
    `UPDATE services SET Description = '${req.body.description}'
    , PricePerUnit = '${req.body.ppu}'
    , IsHourly = '${req.body.ishourly}' 
    , serviceCategory = '${req.body.serviceCat}'
    , serviceType = '${req.body.serviceType}'
    where serviceID = '${req.body.serviceID}'
    `,
    req,
    res
  );
};

exports.addService = (req, res) => {
  common.dbactivity(
    `INSERT into services VALUES ('${req.body.description}' , '${req.body.ppu}', '${req.body.ishourly}', '${req.body.serviceCat}', '${req.body.serviceType}' )`
  );
};

exports.deleteService = (req, res) => {
  common.dbactivity(
    `DELETE from services where serviceID = '${req.body.serviceID}'`,
    req,
    res
  );
};
