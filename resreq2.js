const http=require('http');

let server=http.createServer((req,res)=>{
    console.log(req.headers,req.method,req.url);
    res.statusCode=200;
//    res.setHeader("Content-Type",'text/plain');
// res.write("we are here not for fun but for real learning goes on here");
res.setHeader("Content-Type","text/Html");
res.write("<html><head><title>welcome bros</title></head></html>");
    res.end("Ended Here");
 
});
server.listen(8080 ,()=>{
    console.log(`http://localhost:${8080}`);
   
});