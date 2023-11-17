const mongoose = require('mongoose');

const connect = () => {
    mongoose.connect('mongodb+srv://dbsrud0872po:CqIqC3f9iUFb2jtd@cluster0.xlljunn.mongodb.net/mongoose-test?retryWrites=true&w=majority')
    .then((res) => {
        console.log('몽고디비 연결 성공');
    })
    .catch((error) => console.log('몽고디비 연결 실패'));

    mongoose.connection.on('error', (error) => {
        console.error("mongoDB 연결에 실패하였습니다😥" + error)
    });
    mongoose.connection.on('disconnected', () => {
        console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.');
    });
}

module.exports = connect;