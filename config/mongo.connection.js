const mongoose = require("mongoose");
const con = mongoose.createConnection("mongodb://localhost:27017/rsquare");
module.exports = con;
