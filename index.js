const express = require("express");
const app = express();
const conn = require('./services/index');

const router = require("./routes");
const port = process.env.PORT || 3000; 

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(router);


if(conn) {
  console.log("MySql Connected!");

  app.listen(port, () => {
      console.log(`Express started at http://localhost:${port}`)
  });
}

