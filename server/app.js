const express = require("express");
const morgan = require('morgan');
const dotenv = require('dotenv');

const connect = require('./db');

const app = express();

dotenv.config();

connect();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api", (req, res) => {
  res.send('hi');
});

app.listen(8000, () => {
  console.log('http://localhost:8000 서버 실행 중');
});
