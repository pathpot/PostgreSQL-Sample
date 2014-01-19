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
	var client = new pg.Client({host: 'ec2-54-197-250-40.compute-1.amazonaws.com', port: '5432', user: 'yccajvsttfpvlr', password: 'mL2UfYiDoovxj-_2wkcMzxd5m3', database: 'd3guq0f238spmu'});
	//var client = new pg.Client({host: 'localhost', database: 'MY_PG_DB'});
	
	client.connect();

	//query
	var  query_cmd = client.query("SELECT * FROM users");
	
   	query_cmd.on('row', function(row) {
		res.send('Data : ' + row.id + ' ' + row.name);
	});
});

app.listen(port, function() {
 		console.log(" Listening on " + port);
 	}
);