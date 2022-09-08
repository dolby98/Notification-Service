
const nodemailer = require('nodemailer');

module.exports = nodemailer.createTransport({
    port : 465,
    host : "smtp.gmail.com",
    auth : {
        user : 'dolbya14@gmail.com',
        pass : "pfdtcwrkltuwsuar"
    },
    secure : true
});
