const http = require("http");
const fs = require("fs");
http.createServer(function(request, response){
    if (request.url!="/ava.jpg"&&request.url!="/"&&request.url!="/L3.js"&&request.url!="/L3.css")
    	response.end("<h1>error 404</h1>");
    if (request.url=="/ava.jpg")
    {
    	fs.readFile("ava.jpg", function(error, data){
    
    response.end(data);});}
    if (request.url=="/L3.css")
    {
    	fs.readFile("L3.css", function(error, data){
    
    response.end(data);});}
    if (request.url=="/L3.js")
    {
    	fs.readFile("L3.js", function(error, data){
    
    response.end(data);});}
    else {
	    console.log("Url: " + request.url);
	    console.log("Тип запроса: " + request.method);
	    console.log("User-Agent: " + request.headers["user-agent"]);
	    console.log("Все заголовки");
	    console.log(request.headers);

	    fs.readFile("L.html", function(error, data){
	    
	    
	    response.end(data);});}
	

}).listen(7000, "192.168.1.70", function(){
    console.log("Сервер запущен");
});
