const express = require("express");
const app = express();
const Add= require("./add");
const Sub =require('./Sub');
const path=require('path');

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,"views",'home.html'))
  
});
app.use(Add);

app.use(Sub);





app.listen(8080, () => {
  console.log("http://localhost:8080");
});
