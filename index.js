const express = require('express');
const app = express();
const mongoose =require('mongoose');
mongoose.Promise = global.Promise;
const config = require('./config/database')
const path = require('path');

mongoose.connect(config.uri, (err)=>{
    if(err){
        console.log('Could not connect to Mongo:', err);
    } else {
        console.log(config.uri);
        console.log('Connected to db: '+ config.db);
    }
});

app.use(express.static(__dirname + '/client/dist/'));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/client/dist/index.html'));
});

app.listen(8080, ()=>{
    console.log('Running on port 8080');
});