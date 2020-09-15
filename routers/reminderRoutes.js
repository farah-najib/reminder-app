const Reminders = require("./../models").Reminders;
const sendSms = require('./../twilio');
module.exports = function(router) {
  router.get("/reminder", (req, res) => {
    Reminders.findAll({
      
    })
      .then(Reminders => {
        res.json(Reminders);
      })
      .catch(err => res.json(err));
  });
  router.post("/reminder", (req, res) => {
    Reminders.create({
      name: req.body.name
    })
      .then(data  => {
        const welcomeMessage = 'Welcome to my ReminderApp';
        sendSms("60182988115", welcomeMessage);
        res.json({
          sucess: true,
          data: data
        });
      })
      .catch(err => res.json(err));
  });
};