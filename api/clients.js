const common = require("../common");

exports.getClientList = (req, res) => {
  common.dbactivity(`select distinct clientID, Name from client`, req, res);
};

exports.getAllClient = (req, res) => {
  common.dbactivity(`select * from client`, req, res);
};
exports.getClient = (req, res) => {
  let clientid = req.params.clientID.split("=")[1];
  console.log(clientid);
  common.dbactivity(
    `select * from client where clientID = ${clientid}`,
    req,
    res
  );
};

exports.createClient = (req, res) => {
  common.dbactivity(`INSERT INTO client VALUES ()`);
};

exports.updateClient = (req, res) => {
  common
    .dbactivity //TODO
    ();
};

exports.deleteClient = (req, res) => {
  common
    .dbactivity //TODO
    ();
};
