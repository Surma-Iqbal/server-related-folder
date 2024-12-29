var http=require('http');

var server=http.createServer (function (req, res) {
    res.end("Hello Universe")
});
server.listen(5051)
console.log("server runs successfully")
 