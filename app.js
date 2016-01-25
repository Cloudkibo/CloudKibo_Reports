var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var agents = require('./routes/agents');
var groups = require('./routes/groups');
var completedcalls = require('./routes/completedcalls');
var waitingcalls = require('./routes/waitingcalls');
var inprogresscalls = require('./routes/inprogresscalls');
var consolidatedcalls = require('./routes/consolidatedcalls');
var abandonedcalls = require('./routes/abandonedcalls');
var companyprofile = require('./routes/companyprofile');
var groupcallstats = require('./routes/groupcallstats');
var agentscallstats = require('./routes/agentscallstats');
var userprofile = require('./routes/userprofile');



var app = express();
//var app = express.createServer();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//app.set('port', process.env.PORT || '3000');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/', agents);
app.use('/', groups);
app.use('/', completedcalls);
app.use('/', waitingcalls);
app.use('/',inprogresscalls);
app.use('/', consolidatedcalls);
app.use('/',abandonedcalls);
app.use('/',companyprofile);
app.use('/',groupcallstats);
app.use('/',agentscallstats);
app.use('/',userprofile);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
//console.log("Express server listening on port " + app.get('port'));
//app.listen(app.get('port'));
module.exports = app;
