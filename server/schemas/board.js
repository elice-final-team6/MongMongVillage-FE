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
    category: { // 자유글, 정보글
        type: String,
        default: '자유글',
    },
    likers: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    }]
}, { timestamps: true });

module.exports = mongoose.model('Board', boardSchema);