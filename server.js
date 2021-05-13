require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");



const app = express();

//!middlewares

app.use(express.json());
app.use(cors());
app.use(cookieParser());


//!Routers
app.use('/api', require('./routes/authRouter'));


//!Database connection to mongoose

const URI = process.env.MONGODB_URL;
mongoose.connect(
  URI,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Database Connected!!");
  }
);

//!listening on port

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Listening on ", port);
});