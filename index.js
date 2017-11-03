const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.connect(config.uri,(err)=>{
  if(err){
    console.log('Could Not Connect to Databse');
  }else{
    console.log('Connected to database'+config.db);
  }
});
mongoose.Promise = global.Promise;

app.use(express.static(__dirname+'/client/dist/'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/dist/index.html'));
});

app.listen(8082, ()=>{
    console.log("Listening to port 8082");
});