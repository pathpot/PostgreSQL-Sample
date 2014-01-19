// PostgreSQL-Sample

var express = require('express');
//var pg = require('pg');
var app = express();

var port = process.env.PORT || 5000;

//Send text directly
app.get('/', function(req, res){
		res.send('Hello World!');
	}
);

app.listen(port, function() {
 		console.log(" Listening on " + port);
 	}
);


//	"pg": "2.x"