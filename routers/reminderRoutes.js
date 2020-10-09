const Reminder = require("./../models").user;
const sendSms = require('../services/twilio');
module.exports = function(router) {
  router.get("/reminder", (req, res) => {
    Reminder.findAll({
      
    })
      .then(Reminders => {
        res.json(Reminders);
      })
      .catch(err => res.json(err));
  });
  router.post("/reminder", (req, res) => {
    Reminders.create({
      name: req.body.name,
      lastname:req.body.lastname,
      email:req.body.email,
      phone:req.body.phone
    })
      .then(data  => {
       const confirmationmessages = 'Welcome to my ReminderApp';   
        sendSms(process.env.RECIEVER_PHONE_NUMBER, confirmationmessages);
        res.json({
          sucess: true,
          data: data
        });
      })
      .catch(err => res.json(err));
  });
};