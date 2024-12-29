//Asynchronous(needs callback function)

/*var fs=require('fs');
var http=require('http');

var server=http.createServer(function (req,res){

    if(req.url=="/"){

         fs.rename('demo.txt','demoNew.txt',function (error){

         if(error){
         res.writeHead(200,{'Contact-Type':'text/html'});
         res.write("File rename fail");
         res.end();
         }
         else{
         res.writeHead(200,{'Contact-Type':'text/html'});
         res.write("File rename success");
         res.end();
         }

         
        
        });
    }
});

server.listen(5050);
console.log("Asynchronous fs rename successful")*/





//Synchronous(needs no callback function)

var fs=require('fs');
var http=require('http');

var server=http.createServer(function (req,res){

    if(req.url=="/"){

         let error= fs.renameSync('demoSync.txt','demoSyncNew.txt');

         if(error){
         res.writeHead(200,{'Contact-Type':'text/html'});
         res.write("File rename fail");
         res.end();
         }
         else{
         res.writeHead(200,{'Contact-Type':'text/html'});
         res.write("File rename success");
         res.end();
         }
           
     }


});

server.listen(5051);
console.log("Synchronous fs rename successful")
