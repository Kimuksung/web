var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url,true).query;
    var pathname = url.parse(_url,true).pathname;
    //console.log(queryData.id);
    var template = `  
    <!doctype html>
    <html>
    <head>
      <title>web project</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <a href="/create">create</a>
    </body>
    </html>`
    if(_url == '/'){
      _url = '/index.html';
    }
    console.log(queryData.id);
    console.log(pathname);
    if(_url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
    //response.end(fs.readFileSync(__dirname + url));
    response.end(template);
});
app.listen(3000);