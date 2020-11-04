const http = require("http");
const fs = require("fs");
http.createServer(function(request, response){
    if (request.url!="/ava.jpg"&&request.url!="/")
    	response.end("<h1>error 404</h1>");
    if (request.url=="/ava.jpg")//Таким же образом можно было бы наверное и js подключить, но, раз это необязательно, пойду хотя бы в 7 лягу...
    {
    	fs.readFile("ava.jpg", function(error, data){
    
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
