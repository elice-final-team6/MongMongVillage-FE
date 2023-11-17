const express = require("express");
const morgan = require('morgan');
const dotenv = require('dotenv');

const connect = require('./db');
const boardRouter = require('./board/boardRouter');

const app = express();

dotenv.config();

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

app.listen(8000, () => {
  console.log('http://localhost:8000 서버 실행 중');
});
