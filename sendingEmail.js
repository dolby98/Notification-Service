
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    port : 465,
    host : "smtp.gmail.com",
    auth : {
        user : 'dolbya14@gmail.com',
        pass : "pfdtcwrkltuwsuar"
    },
    secure : true
});

console.log(transporter);

const mailDataObj = {
    from : 'crm-no-reply@gmail.com',
    to : 'dolbya14@gmail.com',
    subject : "Testing email",
    text : "Hello duniya",
    html : "<b> Hello WOrld </b>"
}

transporter.sendMail(mailDataObj, (err,data)=>{
    if(err){
        console.log(err.message);
    }
    else{
        console.log("EMail sent");
    }
})
