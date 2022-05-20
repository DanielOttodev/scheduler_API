const common = require("../common");

exports.getBookings = (req, res) => {
  common.dbactivity(`select * from booking`, req, res);
};
exports.getBooking = (req, res) => {
  common.dbactivity(
    `select * from Booking where bookingid = '${req.params.bookingid}'`,
    req,
    res
  );
};
exports.getbookingByClient = (req, res) => {
  common.dbactivity(
    `select * from Booking where clientId = '${req.params.clientid}'`,
    req,
    res
  );
};
exports.getBookingByStaff = (req, res) => {
  common.dbactivity(
    `select * from Booking where staffId = '${req.params.staffid}'`,
    req,
    res
  );
};
exports.updateBooking = (req, res) => {
  common.dbactivity(
    `
 UPDATE Booking SET serviceId = '${req.body.serviceid}', 
 clientId = '${req.body.clientid}', 
 staffId = '${req.body.staffid}', 
 TimeStart = '${req.body.timestart}', 
 TimeEnd = '${req.body.timeend}', 
 MinutesBilled = '${req.body.minutesBilled}', 
 TotalCost = '${req.body.totalCost}'
 `,
    req,
    res
  );
};
exports.addBooking = (req, res) => {
  common.dbactivity(
    `
 INSERT INTO Booking VALUES ( 
   '${req.body.serviceid}', 
  '${req.body.clientid}', 
  '${req.body.staffid}', 
 '${req.body.timestart}', 
 '${req.body.timeend}', 
'${req.body.minutesBilled}', 
'${req.body.totalCost}'
 )`,
    req,
    res
  );
};

exports.deleteBooking = (req, res) => {
  common.dbactivity(
    `
  DELETE Booking where bookingId = '${req.body.bookingids}'
  `,
    req,
    res
  );
};
