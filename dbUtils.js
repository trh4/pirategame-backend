let mysql = require("mysql");
let config = require("./config.js");

const getUserFromDB = (req, res, next) => {
  if (req.validEmail != "") {
    let connection = mysql.createConnection(config);
    let sql = `SELECT * FROM users WHERE email=` + mysql.escape(req.validEmail);
    connection.query(sql, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      if (results[0]) {
        // console.log("res are", results[0], Boolean(results[0]));
        req.dbEmail = results[0].email;
        req.dbName = results[0].name;
        req.dbWins = results[0].wins;
        req.dbLoses = results[0].loses;
      }
      next();
    });
    connection.end();
  } else next();
};
const createUserInDB = (req, res, next) => {
  if (req.dbEmail) return next();
  let connection = mysql.createConnection(config);
  // insert statment
  let sql = `INSERT INTO users (email, name) VALUES ('${req.validEmail}', '${req.validName}')`;
  // execute the insert statment
  connection.query(sql, (err, results, fields) => {
    if (err) return console.error(err.message);
    req.dbEmail = req.validEmail;
    req.dbName = req.validName;
    req.dbWins = 0;
    req.dbLoses = 0;
    next();
  });

  // close the database connection
  connection.end();
};
const updateUserScoreInDB = (req, res, next) => {
  let connection = mysql.createConnection(config);
  // update statment
  let hasWon = req.hasWon ? "wins" : "loses";
  let data = [req.hasWon ? req.dbWins + 1 : req.dbLoses + 1, req.dbEmail];
  let sql = `UPDATE users SET ${hasWon} = ${data[0]} WHERE email = '${data[1]}'`;
  // execute the UPDATE statement
  connection.query(sql, (error, results, fields) => {
    if (error) return console.error(error.message);
  });
  connection.end();
  next();
};
const logToDB = (req, res, next) => {
  let connection = mysql.createConnection(config);
  // insert statment
  let vals = [
    req.dbEmail.toString(),
    Number(req.hasWon).toString(),
    req.randDice.toString(),
    `${req.dbEmail} got dice of ${req.randDice}`.toString(),
  ];
  let sql = `INSERT INTO dicelog (email,won,dice_number,title) VALUES ('${vals[0]}','${vals[1]}','${vals[2]}','${vals[3]}')`;
  connection.query(sql, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
  });
  connection.end();
  next();
};
module.exports = {
  getUserFromDB,
  createUserInDB,
  updateUserScoreInDB,
  logToDB,
};
