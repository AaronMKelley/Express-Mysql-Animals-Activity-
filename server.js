var bodyParser = require('body-parser')

var express = require('express');
var app = express();


app.use(express.static("public"));



app.use(bodyParser.urlencoded({ extended: false }))


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'animals_db'
});

connection.connect();

// curl -d "animal_name=bengal+tiger" -X POST http://localhost:3001/animals-insert


app.get('/animals.json', function(req, res){
	connection.query('SELECT * FROM animals', function (error, results, fields) {
	  if (error) res.send(error)
	  else res.json(results);
	});
});

app.post('/animals', function(req, res){
	connection.query('INSERT INTO animals (animal_name) VALUES (?)', [req.body.animal_name],function (error, results, fields) {
	  if (error) res.send(error)
	  else res.json({
	  	message: 'success'
	  });
	});
});


app.get('*', function(req, res){
	res.redirect('/')
});


app.listen(3001, function(){
	console.log('listening on 3001');
});

