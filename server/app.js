const express = require("express");
const morgan = require('morgan');
const dotenv = require('dotenv');
const connect = require('./db');
const boardRouter = require('./board/boardRouter');
const connect = require('./schemas');

const app = express();

dotenv.config();

// const { MongoClient } = require("mongodb");

connect();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/boards', boardRouter);

app.get("/api", (req, res) => {
  res.send('test');
});

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 존재하지 않습니다.`);
  error.status = 404;
  next(error);
})

// 에러 처리 미들웨어
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500);
  res.send(err.message || 'Error!!');
})

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
