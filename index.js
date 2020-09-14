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

// Create users endpoint
app.post('/users', (req, res) => {
  const { email, password, phone } = req.body;
  const user = {
    email,
    password,
    phone
  };

  userDatabase.push(user);



  res.status(201).send({
    message: 'Account created successfully, kindly check your phone to activate your account!',
    data: user
  })
});
const welcomeMessage = 'Welcome to my Chillz! Your verification code is 54875';

sendSms("60182988115", welcomeMessage);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;