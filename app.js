var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3000);

app.use(function (req, res, next) {
    console.log('I am a middleware 1!');
    next();
});

// var setFoo = function (req, res, next) {
//     req.foo = 'some value';
//     next();
// };
// var logFoo = function (req, res, next) {
//     console.log(req.foo);
//     next();
// };
// app.use(setFoo, logFoo);

var router = express.Router();
router.use(function (req, res, next) {
    console.log('I am running from a router!');
    next();
});
router.get('/', function (req, res, next) {
    res.send('Hello from the router!');
});
app.use('/router', router);

app.get('/', function (req, res) {
  return res.json({message: 'hello world!'});
});

app.get('/test/:id', function (req, res) {
  res.send('Got id ' + req.params.id);
})

// app.use(function (req, res, next) {
//     console.log('I am a middleware 2!');
//     next();
// });

var logError = function (err, req, res, next) {
  console.error(err.stack);
  next(err);
};

var sendErrorMsg = function (err, req, res, next) {
  res.status(500).send('There was an error!');
};

app.use(logError, sendErrorMsg);

app.get('*', function (req, res) {
  res.status(404).send('404 not found');
})

// Start listening for requests
app.listen(app.get('port'), function () {
  console.log('Listening on port ' + app.get('port'));
});
