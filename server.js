require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./Models/productModel");
const cors = require('cors')

const productRoute = require("./routes/productRoute")

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json());
app.use(cors())
app.use('/api/products', productRoute)

mongoose.connect(MONGO_URL).then(() => {
  app.listen(PORT, () => {
    console.log(`server running on port -- ${PORT}` );
  });
  console.log("connected successfully");
});
