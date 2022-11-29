const express = require("express");
const app = express();
const PORT = process.env.PORT || 4001;

const sendToDb = (params) => {
  console.log(params);
  
};

app.get("/dice", (req, res, next) => {
  let newdice = Math.floor(Math.random() * 6);
  if (newdice === 2) {
    if (Math.random() > 0.5) newdice = 7;
  }
  sendToDb(req.query);
  res.send({ newdice: newdice });
});

app.listen(PORT, () => {
  console.log("app listening on port", PORT);
});
