const express = require('express');
const bodyparser = require('body-parser');
const mongo = require('mongoose');

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.listen(8000, ()=>{
    console.log("Server started");
});

mongo.connect("mongodb+srv://admin:admin@cluster0.ytx7eni.mongodb.net/notifServ", ()=>{
    console.log("Connected to MongoDB Atlas");
},
    err=>{
        console.log(err);
    }
);

require('./routes/notification.routes')(app);

require('./schedulers/notification.scheduler');