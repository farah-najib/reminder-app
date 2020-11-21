const path = require("path")
module.exports = function(router){

  router.get('/', function (req, res) {
    console.log(__dirname)
    res.sendFile(path.join(__dirname , './../main.html'));
  })

  router.get('/singup', function (req, res) {
    console.log(__dirname)
    res.sendFile(path.join(__dirname , './../singup.html'));
  })

}