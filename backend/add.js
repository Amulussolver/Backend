const express=require('express')

const Add=express.Router();

Add.get("/Sum", (req, res) => {
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

Add.post("/Sum", (req, res) => {
  const a = Number(req.body.first);
  const b = Number(req.body.second);
  const result = a + b;

  res.send(`Result = ${result}`);
});

module.exports=Add;

