const express = require('express');
const bodyParser = require('body-parser');
const sendSms = require('./twilio');

const {
  Sequelize,
  Model,
  DataTypes
} = require('sequelize');
const sequelize = new Sequelize('sqlite');
var sequelize = new Sequelize(config.database, config.username, config.password, config);

class Reminders extends Model {}
Reminders.init({
  name: DataTypes.STRING
}, {
  sequelize,
  modelName: 'reminders'
});
sequelize.sync();


const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

const port = 3000;


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/main.html')
})


app.get('/add', function (req, res) {
  res.sendFile(__dirname + '/add.html')
})

app.get('/api/v1/reminders', function (req, res) {
  Reminders.findAll().then(data => {
    res.json({
      sucess: true,
      data: data
    });
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the reminder."
    });
  });

})

app.get('/api/v1/reminders/:id', function (req, res) {
  console.log(req.params.id);
  let x = {};

  res.json({
    sucess: true,
    data: x
  });
})
app.delete('/api/v1/reminders/:id', function (req, res) {
  console.log(req.params.id);

  res.json({
    sucess: true
  });
})
app.post('/api/v1/reminders', function (req, res) {

  const reminder = {
    name: req.body.name
  };

  Reminders.create(reminder)
    .then(data => {
      res.json({
        sucess: true,
        data: data
      });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the reminder."
      });
    });


})
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;