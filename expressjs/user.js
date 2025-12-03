const http=require('http');
const fs=require('fs');
let reqhan=require("./app");

let server= http.createServer(reqhan);
server.listen(8080,()=>{
    console.log(`http://localhost:${8080}`);
}
)