const cron = require('node-cron');
const Notification = require('../models/notification.model');
const transporter = require('../notifiers/emailService');

cron.schedule("*/30 * * * * *", async()=>{
    console.log("Sending now");

    const notifications = await Notification.find({status:"UN_SENT"});

    console.log(notifications);

    if(notifications){
        
        notifications.forEach(notif =>{
            const mailDataObj = {
                from : notif.requestor,
                to : notif.reciepientEmails,
                subject : notif.subject,
                html : notif.content
            }

            transporter.sendMail(mailDataObj, async(err,data)=>{
                if(err){
                    console.log(err.message);
                }
                else{
                    console.log("EMail sent ",notif._id);
                    notif.status = "SENT";
                    await notif.save();
                }
            });
        });

    }
})