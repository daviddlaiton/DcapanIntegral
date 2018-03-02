
//Express import
const express = require("express");
const app = express();

//Paths
const clientRoutes = require("./api/routes/client.js")
const productRoutes = require("./api/routes/product.js");
const authRoutes = require("./api/routes/auth.js");
const adminRoutes = require("./api/routes/admin.js")
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//Environment var 
var config = require("./config");

mongoose.connect(config.database);


app.use(express.static(__dirname + "/public"));
app.use(morgan("dev"));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
}
next();
});



app.use("/clients", clientRoutes);
app.use("/products", productRoutes);
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);


app.listen(config.port);
console.log("5000 is the magic port");