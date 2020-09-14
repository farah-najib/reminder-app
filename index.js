const express = require('express');
const bodyParser = require('body-parser');
const sendSms = require('./twilio');

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());
require("./routers/reminderRoutes")(app);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/main.html')
})

app.get('/add', function (req, res) {
  res.sendFile(__dirname + '/add.html')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;