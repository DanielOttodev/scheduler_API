const common = require("../common");

exports.getClientList = (req, res) => {
  common.dbactivity(`select distinct clientID, Name from Client`, req, res);
};

exports.getAllClient = (req, res) => {
  common.dbactivity(`select * from Client`, req, res);
};
exports.getClient = (req, res) => {
  let clientid = req.params.clientID.split("=")[1];
  console.log(clientid);
  common.dbactivity(
    `select * from Client where clientID = '${clientid}'`,
    req,
    res
  );
};

exports.createClient = (req, res) => {
  common.dbactivity(
    `INSERT INTO Client VALUES ('${req.body.name}', '${req.body.email}', '${
      req.body.phone
    }', '${req.body.address}', '${req.body.suburb}', '${req.body.dob}' ,'${
      new Date().toLocaleDateString
    }')`,
    req,
    res
  );
};

exports.updateClient = (req, res) => {
  common.dbactivity(
    `UPDATE Client SET Name ='${req.body.name}', email = '${
      req.body.email
    }',phone = '${req.body.phone}', streetAddress =  '${
      req.body.address
    }', Suburb = '${req.body.suburb}', DOB = '${
      req.body.dob
    }' , dateCreated = '${new Date().toLocaleDateString}' where idClient = ${
      req.body.idClient
    }`,
    req,
    res
  );
};

exports.deleteClient = (req, res) => {
  common.dbactivity(
    `delete from Client where idClient = '${req.body.idClient}'`,
    req,
    res
  );
};
