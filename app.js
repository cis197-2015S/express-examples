var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3000);
app.get('/', function (req, res) {
  return res.send('hello world!');
});

/////////////////////////////////
//       Router Example        //
/////////////////////////////////
var router = express.Router();
router.use(function (req, res, next) {
    console.log('I am running from a router!');
    next();
});
// Router handles request *relative to its mount path.*
// This router is mounted at '/router', so this GET handler
// will run when you navigate to /router
router.get('/', function (req, res, next) {
    res.send('Hello from the router!');
});
app.use('/router', router);

// Start listening for requests
app.listen(app.get('port'), function () {
  console.log('Listening on port ' + app.get('port'));
});