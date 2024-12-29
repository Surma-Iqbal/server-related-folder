//Asynchronous(needs callback function)

/*var fs=require('fs');
var http=require('http');

var server=http.createServer(function (req,res){

    if(req.url=="/"){
         fs.readFile('home.html',function (error,data){
         res.writeHead(200,{'Contact-Type':'text/html'});
         res.write(data);
         res.end();
        });
    }
});

server.listen(5053);
console.log("Asynchronous fs read html runs successfully")*/





//Synchronous(needs no callback function)

var fs=require('fs');
var http=require('http');

var server=http.createServer(function (req,res){
    if(req.url=="/"){
        
        let mydata= fs.readFileSync('home.html')
            res.writeHead(200,{'Contact-Type':'text/html'});
            res.write(mydata);
            res.end();
        ;
    }
});

server.listen(5054);
console.log("Synchronous fs read html runs successfully")