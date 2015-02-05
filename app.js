var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3000);
app.get('/', function (req, res) {
  return res.send('hello world!');
});

/////////////////////////////////
//          Middleware         //
/////////////////////////////////

// This runs on every route (endpoint)
app.use(function (req, res, next) {
    console.log('I am a middleware!');
    next();
});

// This runs ONLY on '/middleware/test'
app.use('/middleware/test', function (req, res, next) {
    console.log('I only run on /middleware/test');
    next();
});

// This demonstrates the fact that middlewares can change
// the req/res objects as needed to handle requests
var setFoo = function (req, res, next) {
    req.foo = 'some value';
    next();
};
var logFoo = function (req, res, next) {
    console.log(req.foo);
    next();
};
app.use(setFoo, logFoo);

// Start listening for requests
app.listen(app.get('port'), function () {
  console.log('Listening on port ' + app.get('port'));
});