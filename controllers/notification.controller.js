const Notification = require('../models/notification.model');


/**
 * Controller to create notification
 * Validate body in middleware
 */

exports.acceptNotificationRequest = async(req,res) =>{

    try{
        const notificationObj = {
            subject : req.body.subject,
            reciepientEmails : req.body.reciepientEmails,
            content : req.body.content,
            requestor : req.body.requestor,
            status : req.body.status
        };
    
        const notificationCreated = await Notification.create(notificationObj);
    
        //Return id of notification
    
        return res.status(201).send({
            message : "Notification accepted",
            notification_id : notificationCreated._id
        });
    }
    catch(err){
        console.log(err);
        return res.status(500).send({
            message : "Internal server error occured while storing notification"
        });
    }
    
}


/**
 * Controller to fetch notification by id
 */

exports.getNotificationDetails = async(req,res)=>{

    const tracking_id = req.params.notification_id;

    try{

        const notification = await Notification.findById(tracking_id);

        return res.status(200).send(notification);
    }
    catch(err){
        console.log(err);
        return res.status(500).send({
            message : "Internal server error occured while fetching notification"
        });
    }
}