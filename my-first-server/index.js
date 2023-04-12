const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("hell");
});
app.get ('/data', (req,res)=>{
    res.send('come')

})

app.listen(port, () => {
  console.log(`my firs server is runnung port : ${port}`);
});
