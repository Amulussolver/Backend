const http=require('http');

let server=http.createServer((req,res)=>{
   if( req.url==="/") {
    res.statusCode=200;
    res.setHeader("Content-Type","text/Html");
    res.write("<html");
    res.write('<head>');
    res.write("<body><a href='/home'>home</a>");
    res.write("<a href='/mens'>Mens</a><br>");
     res.write("<a href='/women'>Women</a><br>");
    res.write("<a href='/prods'> Products</a><br>");
 console.log(req.url,req.method,req.header);
    res.write("</body></head></html>");
   return res.end();
    
}
    
    else if(req.url==="/mens" ){
        res.statusCode=200;
        res.setHeader('location','/mens');
        res.write("<body> welcome to Mens</body>");
        res.end();
    } else if(req.url==="/home" ){
        res.statusCode=200;
        res.setHeader('location','/home');
         console.log(req.url,req.method,req.header);
        res.write("<body> welcome to Women section</body>");
        res.end();}
     else if(req.url==="/women" ){
        res.statusCode=200;
        res.setHeader('location','/womn');
        res.write("<body> welcome to Women section</body>");
        res.end();
    }
     else if(req.url==="/prods" ){
        res.statusCode=200;
        res.setHeader('location','/prods');
        res.write("<body> welcome to Product section </body>");
        res.end();
    }
    setTimeout(()=>{
       process.exit();
    },10000);
});
server.listen(8080, () => {
    console.log(`http://localhost:${8080}`);
   
});