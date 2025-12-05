const express = require("express");
const app = express();
const Add= require("./add");
const Sub =require('./Sub');


app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <html>
    <head><title>Calculator</title></head>
    <body>
      <h1>Welcome to Our Calculator</h1>
      <button><a href="/Sum">Add</a></button><hr>
      <button><a href="/Sub">Sub</a></button><hr>
      </body>
      </html>
  `);
  
});
app.use(Add);

app.use(Sub);





app.listen(8080, () => {
  console.log("http://localhost:8080");
});
