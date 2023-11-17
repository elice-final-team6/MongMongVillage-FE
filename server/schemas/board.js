const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Types: { ObjectId } } = Schema;

const boardSchema = new Schema({
    author: {
        type: ObjectId,
        required: true,
        ref: "User",
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    images: [String],
    animalType: {
        type: String, // 견종 목록
        default: null,
    }, 
    likeCount: {
        Number,
        default: 0,
    }
    ,
    category: { // 자유글, 정보글
        type: String,
        default: null,
    },
}, { timestamps: true });

module.exports = mongoose.model('Board', boardSchema);