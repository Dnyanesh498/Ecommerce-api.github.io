const mongoose = require("mongoose");

// here we connect the odm(object document maper) mongoose to the dbms mongodb.
mongoose.connect("mongodb+srv://dnyanesh1:SXGfmrujGKHmDF9Z@cluster0.etx61.mongodb.net/ecommerce?retryWrites=true&w=majority",
 {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection; // db store the connection

// cheacking the connection
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DATABASE connection is Established");
});

// exporting the connection.
module.exports = db;
