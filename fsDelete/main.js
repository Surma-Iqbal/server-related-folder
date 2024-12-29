//Asynchronous(needs callback function)

/*var fs=require('fs');
var http=require('http');

var server=http.createServer(function (req,res){

    if(req.url=="/"){

         fs.unlink('demoNew.txt',function (error){

         if(error){
         res.writeHead(200,{'Contact-Type':'text/html'});
         res.write("File delete fail");
         res.end();
         }
         else{
         res.writeHead(200,{'Contact-Type':'text/html'});
         res.write("File delete success");
         res.end();
         }

         
        
        });
    }
});

server.listen(5040);
console.log("Asynchronous fs delete successful")*/





//Synchronous(needs no callback function)

/*var fs=require('fs');
var http=require('http');

var server=http.createServer(function (req,res){

    if(req.url=="/"){

         let error= fs.unlinkSync('demoSyncNew.txt');

         if(error){
         res.writeHead(200,{'Contact-Type':'text/html'});
         res.write("File delete fail");
         res.end();
         }
         else{
         res.writeHead(200,{'Contact-Type':'text/html'});
         res.write("File delete success");
         res.end();
         }
           
     }


});

server.listen(5055);
console.log("Synchronous fs delete successful")*/
