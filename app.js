var express = require('express');
var app = express();
var path = require("path");

var appDir = path.dirname(require.main.filename);

const mode = "DEV";
//const mode = "PROD";

//const domain = {'app':"altum_data"};
const domain = "path_forward";

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/react/public'));

//EXPRESS ROUTER ROUTES
app.get('/', function(req, res) {
	res.sendFile(path.resolve(appDir, "react", "index.html"));
	//res.send('AltumData main page!')
});

app.get('/get_domain', function(req,res) {
	res.send(domain);
})

app.get("/home", function(req,res) {
	res.sendFile(path.resolve(appDir, "react", "index.html"));
});

app.get("/about", function(req,res) {
	console.log("about page loaded");
	res.sendFile(path.resolve(appDir, "react", "index.html"));
});

app.get("/expertises", function(req,res) {
	console.log("expertises page loaded");
	res.sendFile(path.resolve(appDir, "react", "index.html"));
});

app.get("/team", function(req,res) {
	console.log("team page loaded");
	res.sendFile(path.resolve(appDir, "react", "index.html"));
});

app.get("/team/*", function(req,res) {
	console.log("team page loaded");
	res.sendFile(path.resolve(appDir, "react", "index.html"));
});

app.get("/big_data", function(req, res) {
	console.log("big data page loaded");
	res.sendFile(path.resolve(appDir, "react", "index.html"));
});

app.get("/corporate_program", function(req,res) {
	console.log("corporate program page loaded");
	res.sendFile(path.resolve(appDir, "react", "index.html"));
});

app.get("/cognitive_transformation", function(req,res) {
	console.log("cognitive transformation page loaded");
	res.sendFile(path.resolve(appDir, "react", "index.html"));
});

app.get("/cognitive_transformation/*", function(req,res) {
	console.log("cognitive transformation page loaded");
	res.sendFile(path.resolve(appDir, "react", "index.html"));
});

app.get("/corporate_program/*", function(req,res) {
	console.log("corporate_program");
	res.sendFile(path.resolve(appDir, "react", "index.html"));
});

app.get("/dummy_offering", function(req,res) {
	console.log("dummy offerind page loaded");
	res.sendFile(path.resolve(appDir, "react", "index.html"));
});

app.get("/data_scientist", function(req, res) {
	res.send('Data Scientist Course Page');
	res.sendFile(path.resolve(appDir, "react", "index.html"));
});

app.get("/it_outsourcing", function(req, res) {
	res.send('IT Outsourcing Course Page');
	res.sendFile(path.resolve(appDir, "react", "index.html"));
});

app.get("/big_data_cognitive", function(req, res) {
	res.send('Big Data & Cognitive Course Page');
	res.sendFile(path.resolve(appDir, "react", "index.html"));
});

app.get("/bio", (req,res) => {
	res.sendFile(path.resolve(appDir, "react", "index.html"));
});

app.get("/contact", function(req, res) {
	res.send('Contact Us Page');
});
//END OF EXPRESS ROUTER ROUTES
var port_based_on_domain = {
	'altum_data':3000,
	'path_forward': 4000
};

app.listen(port_based_on_domain[domain["app"]], function() {
  console.log(domain["app"]+' Is Providing Knowledge on Port '+port_based_on_domain[domain["app"]]+'!');
});