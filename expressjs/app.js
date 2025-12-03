let reqhandler=(req,res)=>{
    if (req.url==="/"){
        res.write('<html><head><title>Calculator</title></head><body>welcome to Amulus<br><a href="/calculator">Calculator</a></body></html>');
        return res.end();
    }
    else if( req.url==="/calculator"){
        res.statusCode=200;
        res.setHeader('Content-Type','text/Html');
        res.write('<html>')
        res.write("<form action='/Submit' method='POST'> ");
        res.write('<label for ="a">First num</label>');
        res.write('<input type="text" name="first" id="a" placeholder="First num">');
        res.write('<label for ="b">Second num</label>');
        res.write('<input type="text" name="second" id ="b" placeholder="second num">');
        res.write('<label for ="submit"></label>');
        res.write('<input type="submit" value="Submit">');
        res.write('</form>');
        res.write('</html>');
        console.log("upto there");
        return res.end();
    }
    else if (req.url==="/Submit" && req.method==="POST"){
    let dat=[];
    req.on("data",chunk=>{
       dat.push(chunk);
       console.log(dat);
     
    });
    req.on("end",()=>{
        const parsedValue=Buffer.concat(dat).toString();
        const params= new URLSearchParams (parsedValue);
        const datums=Object.fromEntries(params);
        console.log(datums);
        const a=Number(datums.first);
        const b=Number(datums.second);
        const result=a+b;
        res.statusCode=200;
        res.setHeader('Content-Type','text/Html')
        res.write("<html><head>");
        res.write(`<body>the Sum is ${result}</body><br>`);
       
        res.write("</body></head></html>");
         return res.end();


    });
}};

module.exports=reqhandler;