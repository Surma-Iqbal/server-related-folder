//Asynchronous(needs callback function)

var fs=require('fs');
var http=require('http');

var server=http.createServer(function (req,res){

    if(req.url=="/"){
         //nicher exists kata giyese deplicated hobar karone,ignore korte hobe
         fs.exists('demoSyncNew.txt',function (result){
        
         if(result){
        
         res.end("File exists");
         }
         else{
         
         res.end("File doesn't exist")
         }

         
        
        });
    }
});

server.listen(5030);
console.log("Asynchronous file exist testing successful")





//Synchronous(needs no callback function)

/*var fs=require('fs');
var http=require('http');

var server=http.createServer(function (req,res){

    if(req.url=="/"){

         let result= fs.existsSync('demoSyncNew.txt');

         if(result){
         res.end("True");
         }

         else{
         res.end(False);
         }
           
     }


});

server.listen(5031);
console.log("Synchronous file exist testing successful")*/
