var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3000);

///////////////////////////////////////
//             Rendering             //
///////////////////////////////////////


// use Jade for .jade, ejs for everything else
app.engine('jade', require('jade').__express);
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

// Set the title using middleware
app.use(function (req, res, next) {
  res.locals.title =  'My Awesome Node App';
  next();
});

app.get('/', function (req, res) {
  res.render('index', {greeting: 'Hi'});
});

app.get('/index.ejs', function (req, res) {
  res.render('index.ejs', {greeting: 'Hi'});
});


app.get('/index.jade', function (req, res) {
  res.render('index.jade', {greeting: 'Salutations'});
});
// Start listening for requests
app.listen(app.get('port'), function () {
  console.log('Listening on port ' + app.get('port'));
});