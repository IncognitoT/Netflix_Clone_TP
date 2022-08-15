const express = require('express')
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const favRoute = require('./routes/fav')
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

  app.use(express.json());

  app.use("/api/fav",favRoute);


app.listen(8800,()=>{
    console.log('server running')
})