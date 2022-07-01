//Import packages
const express = require('express');
const mongoose =require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
require("dotenv").config();

const app = express();

const port = process.env.PORT || 8070 ;//assign port

app.use(cors());
app.use(bodyParser.json());

//connect to mongodb
const URL = process.env.MONGODB_URL;
mongoose.connect(URL,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    //useFindAndModify: false,
    //useCreateIndex: true
}, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
});
 
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB database connection established successfully");
});

const todoRouter = require('./route/todo');
app.use('/todo', todoRouter);

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
});