const http = require('http');
const fs=require("fs");
let server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/Html");
        res.write("<html><head><body><h1>enter your details</h1>");
        res.write(" <form action='/upload' method='POST'>");
        res.write('<label for="fname">First name:</label><br>');
        res.write('<input type="text" id="fname" name="fname">')

        res.write('<br><label for="lname">Last name:</label><br>');
        res.write('<input type="text" id="lname" name="lname">');
        res.write("<br><label for='male'>Male</label>")
        res.write("<input type='radio' id='male' name='gender'>");
        res.write("<label for='female'>Female</label>");
        res.write("<input type='radio' id='female' name='gender'>");
        res.write("<br><label for='submit'></label>");
        res.write("<input type='submit' id='submit' name='gender' value='login'>");
        res.write("</form> ");
        res.write("</body></head></html>");

        return res.end();
    }
    //     else if (req.url==="/produts"){
    //          res.write("<html><head><title>backend development</title><body>the amulus-product</body></head></html>");
    //          res.end();
    //     }
    //     else{

    // res.write("<html><head><title>welcome bros</title></head></html>");
    // res.end();
    //     }
    else if(req.url.toLowerCase()==="/upload" && req.method==="POST"){
        fs.writeFileSync("user.txt","amulus");
        res.statusCode=302;
        res.setHeader("location",'/');
     
    }


});

server.listen(8080, () => {
    console.log(`http://localhost:${8080}`);
});