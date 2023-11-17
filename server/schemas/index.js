const mongoose = require('mongoose');

const connect = () => {
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("mongoDB 연결에 성공하였습니다😊"))
    .catch((err) => console.log("mongoDB 연결에 실패하였습니다😥" + err));
    }
    mongoose.connection.on('error', (error) => {
        console.error("mongoDB 연결에 실패하였습니다😥" + error)
    });
    mongoose.connection.on('disconnected', () => {
        console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.');
    });

module.exports = connect;