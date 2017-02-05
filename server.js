/**
 * Created by JKL on 2017/1/29.
 */
var http = require('http');//http server
var fs = require('fs'); // file
var path = require('path'); //file path
var mime = require('mime');//file extend name - mime
var cache = {}; //cache file obj

/**
 * To send 404 error when request file is not exist
 * @param response
 */
function send404(response){
    response.writeHead(404,{'Content-Type':'text/plain'});
    response.write('Error 404: resource not found.');
    response.end();
}
/**
 * send file content to client
 * @param response
 * @param filePath
 * @param fileContents
 */
function sendFile(response,filePath,fileContents){
    response.writeHead(200,{'content-type':mime.lookup(path.basename(filePath))});
    response.end(fileContents)
}

/**
 * provide cache static file serve
 * @param response
 * @param cache
 * @param absPath
 */
function serveStatic(response,cache,absPath){
    if(cache[absPath]){
        sendFile(response,absPath,cache[absPath]);
    }else{
        fs.exists(absPath,function(exists){
            if(exists){
                fs.readFile(absPath,function (err,data) {
                    if(err){
                        send404(response);
                    }else{
                        cache[absPath] = data;
                        sendFile(response,absPath,data);
                    }
                })
            }else{
                send404(response);
            }
        });
    }
}

var server = http.createServer(function (request,response) {
    var filePath = false;
    if(request.url == '/ss'){
        filePath = 'public/index.html';
    }else{
        filePath = 'publicss' + request.url;
    }
    var absPath = './sss' + filePath;
    serveStatic(response,cache,absPath);
});
server.listen(3000,function () {
    console.log("Server listening on port 3000.111");
});

var chatServer = require('./lib/chat_server');
chatServer.listen(server);