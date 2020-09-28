const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
//setting middleware
app.use(express.static('css'));

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
require("./routers/viewRoutes")(app);
//require("./routers/reminderRoutes")(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
module.exports = app;