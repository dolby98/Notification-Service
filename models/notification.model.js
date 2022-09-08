const { default: mongoose } = require('mongoose');
const mongo = require('mongoose');

const notificationSchema = new mongoose.Schema({

    subject : {
        type : String,
        require : true
    },
    reciepientEmails : {
        type : String,
        require : true
    },
    content : {
        type : String,
        require : true
    },
    requestor : {
        type : String
    },
    status : {
        type : String,
        default : "UN_SENT",
        enum : ['SENT', 'UN_SENT'],
        index : true
    },
    createdAt : {
        type : Date,
        immutable : true,
        default : () =>{
            return Date.now();
        }
    },
    updatedAt : {
        type : Date,
        default : () =>{
            return Date.now();
        }
    }
});

module.exports = mongoose.model("notifications", notificationSchema)