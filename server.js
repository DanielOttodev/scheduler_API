const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use("/client", require("./routes/client"));
app.use("/users", require("./routes/users"));
app.use("/staff", require("./routes/staff"));
app.use("/services", require("./routes/services"));
app.use("/business", require("./routes/business"));
app.use("/booking", require("./routes/booking"));
app.use("/scat", require("./routes/serviceCategories"));
app.get("/", (req, res) => {
  res.send("Hello from Express");
});
