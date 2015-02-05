var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3000);
app.get('/', function (req, res) {
  return res.send('hello world!');
});

///////////////////////////////////
//         Parameters            //
///////////////////////////////////
app.get('/users/:id', function (req, res) {
  res.send('The value of :id is ' + req.params.id);
});

// Start listening for requests
app.listen(app.get('port'), function () {
  console.log('Listening on port ' + app.get('port'));
});