// This is a coding challenge using node.js
//
// install express: npm install express --save
// install node-input-validator: npm install --save node-input-validator
// install body-parser: npm install body-parser

// define Express.js
var express = require("express");
var app = express();


// define node server on 3000 port
app.listen(3000, () => {
 console.log("Server running on port 3000");
});


const bodyParser = require('body-parser');  
const url = require('url');  
const querystring = require('querystring');  

// encoder to respond locations
var urlencodedParser = bodyParser.urlencoded({ extended: true });


// call to input validator
const v = require('node-input-validator');

// number of queries since started
var co = 0;
// wrong tries
var ci = 0;



// root page app to use on web browser
app.get('/', function (req, res) {
	// mount simple html with input form
	var html='';
	html +="<html>";
	html +="<head>";
	html +="<title>Dev Challenge - Word Count</title>";
	html +="</head>";
	html +="<body>";
	html +="<h2>Insert a text to count words</h2>";
	html += "<form action='/'  method='post' name='cWord'> ";
	html += "<p>";
	html += "<textarea rows='10' cols='40' type='text' name='cword' onfocus='if(this.value == \"Enter text here...\") " +
		"this.value=\"\" '>" + "Enter text here...</textarea> ";
	html += "<br/>";
	html += "<input type='submit' value='Count!'> ";
	html += "<INPUT type='reset'  value='Clear'> </p>";
	html += "</form>";
	html += "</body>";
	html +="</html>";
	res.set('Content-Type', 'text/html');
	res.send(html);
});



// root post to get input text
app.post('/', urlencodedParser, function (req, res){
	// input validator checking
	let validator = new v ( req.body, {
        cword:'required|minLength:1'
    });
    validator.check().then(function (matched) {
    	// check post content
        if ( !matched ) {
        	// if error, alert on browser and return to root
            res.send('<script> alert(\"invalid input\"); window.location.replace(\"/\") </script>');
            ci++;
        } else{
        	// input process
        	var reply='';
		var CW = req.body.cword;
		var words = CW.replace("\n"," ");
		words = words.split(" ").length;

		res.set('Content-Type', 'text/html');
		var ht = '';
			ht +="<html>";
			ht +="<head>";
			ht +="<title>Dev Challenge - Word Count</title>";
			ht +="</head>";
			ht +="<body>";
			ht +="<textarea rows='10' cols='40' type='text' name='cword'>" + CW + "</textarea> ";
			ht +="<br/>";
			ht +="words: " + words;
			ht +="<br/>";
			ht += '<a href=\"./" >Count another text</a>';
			ht +="</body>";
			ht +="</html>";
		res.send( ht );
		co++;
        }
    });

 });



// status page
app.get('/status', function(req, res) {
	var html = '';
	html +="<body>";
	// get process uptime and calculate in days, hours and minutes
	var upt = process.uptime();
	var d = Math.floor( upt / (3600 * 24) );
	var h = Math.floor(upt % (3600*24) / 3600);;
	var m = Math.floor(upt % 3600 / 60);

	
	html += 'uptime: '+d+'d'+h+'h'+m+'m';
	html += '</br>';
	html += 'queries: '+co;
	html += '</br>';
	html += 'wrong tries: '+ci;
	html +="</body>";
	
	res.send(html);
	

});
