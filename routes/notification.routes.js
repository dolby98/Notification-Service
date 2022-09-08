const { acceptNotificationRequest, getNotificationDetails } = require("../controllers/notification.controller")


module.exports = (app)=>{
    
    app.post("/notiServ/api/v1/notification", acceptNotificationRequest);
    app.get("/notiServ/api/v1/notification/:notification_id", getNotificationDetails);

}