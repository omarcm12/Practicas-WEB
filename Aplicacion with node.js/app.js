var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// Esta linea permite servir archivos estatis (css, js, imagenes)
// que se encuentren dentro de /views
app.use(express.static(__dirname + '/views'));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var db = [];
app.get('/API/todos', function(req, res){
	res.json(db);
});

app.post('/API/todos', function(req, res){
  	var t = req.body;
  	t.id = db.length;
  	db.push(t);
  	res.json(t);	
});

app.post('/API/del', function(req, res){
	var t = req.body;
	db.splice(t.id,1);
	res.json(t);	

});

app.get('/', function(req, res){
	res.render('index.html');
});

var server = app.listen(8080, function(){
	console.log("Running!!");
});