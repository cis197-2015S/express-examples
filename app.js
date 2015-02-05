var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs')


// This middleware casues an error
var explode = function (req, res, next) {
    next(new Error('Something exploded!'));
};
app.use(explode);

// These two middlewares handle the error by logging
// its stack and rendering its message to the user
var logError = function (err, req, res, next) {
  console.error(err.stack);
  next(err);
};
var sendErrorMsg = function (err, req, res, next) {
  res.status(500)
  res.render('error', { error: err.message });
};
app.use(logError, sendErrorMsg);

app.get('/', function (req, res) {
  return res.send('hello world!');
});

// Start listening for requests
app.listen(app.get('port'), function () {
  console.log('Listening on port ' + app.get('port'));
});