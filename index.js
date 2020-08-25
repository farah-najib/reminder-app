const express = require('express');
const bodyParser = require('body-parser');
const sendSms = require('./twilio');

const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

const port = 3000;


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/main.html')
})


app.get('/api/v1/reminders', function (req, res) {
  let x = [];
  res.json({
    sucess: true,
    data: x
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

  res.json({
    sucess: true,
    data: req.body
  });
})
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;