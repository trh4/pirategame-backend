const express = require("express");
const validator = require("validator");
const cors = require("cors");
const {
  getUserFromDB,
  createUserInDB,
  updateUserScoreInDB,
  logToDB,
} = require("./dbUtils");
const app = express();
const PORT = process.env.PORT || 4001;

const randDice = (req, res, next) => {
  let newdice = Math.floor(1 + Math.random() * 6);
  if (newdice === 2 && Math.random() > 0.5) newdice = 7;
  req.randDice = newdice;
  if (!req.query.email || req.query.email === "undefined")
    return res.send({ newdice: req.randDice });
  req.hasWon =
    newdice === 2 || newdice === 4 || newdice === 5 || newdice === 6
      ? true
      : false;
  next();
};
const validate = (req, res, next) => {
  if (
    req.query.email &&
    validator.isEmail(req.query.email) &&
    validator.isLength(req.query.email, { min: 0, max: 100 })
  )
    req.validEmail = req.query.email.toLowerCase();
  else req.validEmail = "";
  if (
    req.query.name &&
    validator.isLength(req.query.name, { min: 0, max: 30 }) &&
    validator.isAlpha(req.query.name, "en-US", { ignore: " +%20" })
  )
    req.validName = validator.escape(req.query.name).toLowerCase();
  else req.validName = "";
  next();
};

app.use(cors());
app.use(
  "/dice",
  randDice,
  validate,
  getUserFromDB,
  createUserInDB
  // updateUserScoreInDB,
  // logToDB
);

app.get("/dice", (req, res, next) => {
  res.send({ newdice: req.randDice });
});

app.get("/joke", (req, res, next) => {
  res.send({ newjoke: "joke number1" });
});

app.listen(PORT, () => {
  console.log("app listening on port", PORT);
});
