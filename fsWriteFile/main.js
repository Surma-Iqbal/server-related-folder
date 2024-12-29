//Asynchronous(needs callback function)

/*var fs=require('fs');
var http=require('http');

var server=http.createServer(function (req,res){

    if(req.url=="/"){
         fs.writeFile('demo.txt','hello World rewritten by practicing overwriting',function (error){

         if(error){
         res.writeHead(200,{'Contact-Type':'text/html'});
         res.write("File write fail");
         res.end();
         }
         else{
         res.writeHead(200,{'Contact-Type':'text/html'});
         res.write("File write success");
         res.end();
         }

         
        
        });
    }
});

server.listen(5054);
console.log("Asynchronous fs write successful")*/





//Synchronous(needs no callback function)

var fs=require('fs');
var http=require('http');

var server=http.createServer(function (req,res){
   if(req.url=="/"){
         let error=fs.writeFileSync('demoSync.txt','welcome to synchronous file')

         if(error){
         res.writeHead(200,{'Contact-Type':'text/html'});
         res.write("File write fail");
         res.end();
         }
         else{
         res.writeHead(200,{'Contact-Type':'text/html'});
         res.write("File write success");
         res.end();
         }

    }

});

server.listen(5055);
console.log("Synchronous fs write successful")