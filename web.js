// PostgreSQL-Sample

var express = require('express');
var pg = require('pg');
var app = express();
var port = process.env.PORT || 5000;

//Send text directly
app.get('/', function(req, res){
		res.send('PostgreSQL-Test!');
	}
);

app.get('/checkdb', function(req, res){
	//connect to database
	var connection_url = process.env.DATABASE_URL;
	var client = new pg.Client(connection_url);
	client.connect();

	//query
	var  query = client.query("SELECT * FROM users', [req.params.client_id]);
   	query.on('row', function(row) {
   		res.send(row);
	}
);

app.listen(port, function() {
 		console.log(" Listening on " + port);
 	}
);