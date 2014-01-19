// PostgreSQL-Sample

var express = require('express');
var pg = require('pg');
var app = express();

var port = process.env.PORT || 5000;

//Send text directly
app.get('/', function(req, res){
		//res.send('PostgreSQL-Test!');		
		res.send(get_data);
	}
);

app.listen(port, function() {
 		console.log(" Listening on " + port);
 	}
);

function get_data(){
	pg.connect(process.env.DATABASE_URL, function(err, client) {
  		var query = client.query('SELECT * FROM users');
  		query.on('row', function(row) {
    		console.log(JSON.stringify(row));
  		});
	});
	
	return JSON.stringify(row);
}

