const http=require('http');
let server=http.createServer((req,res)=>{
    console.log(req.headers,req.method,req.url);
    res.statusCode=200;
   res.setHeader("Content-Type",'text/plain');
    res.end("hey there");
    setTimeout(()=>{process.exit();},6000);
});
server.listen(8080,()=>{
    console.log(`http://localhost:${8080}`);
   
});
