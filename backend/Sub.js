
const express=require('express');
const Sub=express.Router();



Sub.get("/Sub", (req, res) => {
  res.send(`
    <form action="/Sum" method="POST">
      <label>First:</label>
      <input type="text" name="first" placeholder="First number">

      <label>Second:</label>
      <input type="text" name="second" placeholder="Second number">

      <input type="submit" value="Calculate">
    </form>
  `);
  
});

Sub.post("/Sub", (req, res) => {
  const a = Number(req.body.first);
  const b = Number(req.body.second);
  const result = a-b;

  res.send(`Result = ${result}`);
});
module.exports=Sub;