const Reminders = require("./../models").Reminders;
module.exports = function(router) {
  router.get("/reminder", (req, res) => {
    Reminders.findAll({
      
    })
      .then(Reminders => {
        res.json(Reminders);
      })
      .catch(err => res.json(err));
  });
  router.post("/reminderp", (req, res) => {
    Reminders.create({
      name: req.body.name
    })
      .then(data  => {
        res.json({
          sucess: true,
          data: data
        });
      })
      .catch(err => res.json(err));
  });
};