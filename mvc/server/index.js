var express = require('express');
var vash = require('vash');
var app = express();
var routes = require('./routes');

app.use(express.compress());
app.use(express.bodyParser());
app.use(express.static(__dirname + '/../../mvc/client/public/'));

app.engine('.html', vash.__express);
app.set('view engine', 'html');
app.set('views', __dirname + '/../../mvc/client/views/');

routes.apply(app);

app.listen(3000);
console.log('Express app started on port 3000');