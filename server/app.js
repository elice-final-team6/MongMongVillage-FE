const express = require("express");
const morgan = require('morgan');
const dotenv = require('dotenv');

const connect = require('./schemas');

const app = express();

dotenv.config();

// const { MongoClient } = require("mongodb");
connect();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// let db;
// const MongoURL = process.env.MONGO_URL;
// new MongoClient(MongoURL)
//   .connect()
//   .then((client) => {
//     console.log("DB연결성공");
//     db = client.db("MongMongVillage");
//     app.listen(8000, () => {
//       console.log("http://localhost:8000 서버 실행 중");
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

app.get("/", (req, res) => {
  res.send('hi');
});

app.listen(8000, () => {
  console.log('http://localhost:8000 서버 실행 중');
});
