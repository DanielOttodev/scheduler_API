const common = require("../common");

exports.getEvents = (req, res) => {
  common.dbactivity(`select * from events`, req, res);
};
exports.getEvent = (req, res) => {
  common.dbactivity(
    `select * from events where eventid = ${req.params.eventid}`,
    req,
    res
  );
};
exports.updateEvent = (req, res) => {
  // TODO
};
exports.getClientEvents = (req, res) => {
  common.dbactivity(
    `select * from events 
    left join client on events.clientid = client.clientid 
    where events.clientid = ${req.params.clientid}`
  );
};
exports.deleteEvent = (req, res) => {
  //TODO
};
