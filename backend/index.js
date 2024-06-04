// const express = require('express');
// const dotenv = require("dotenv");
import express from "express";
import dotenv from "dotenv"

 import mongoose from 'mongoose';
const app = express();
const cors = require('cors');
dotenv.config();
const PORT =process.env.PORT || 5001;

// const mongoDB = require("./db");

// mongoDB;

//connect to mongodb

const URI =process.env.MongoDBURI;
try{
  mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  });
  console.log("connected to mongoDB");
}catch(error){
  console.log("Error:",error);
}




const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));


app.use(cors());
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.use(express.json());

const createUserRoute = require("./Routes/CreateUser");
app.use('/api', createUserRoute);

// app.use('/api', require('./Routes/CreateUser'));
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
