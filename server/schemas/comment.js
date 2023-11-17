const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Types: { ObjectId } } = Schema;

const commentSchema = new Schema({
    commenter: {
        type: ObjectId,
        required: true,
        ref: "User",
    },
    boardId: {
        type: ObjectId,
        required: true,
        ref: "Board",
    },
    images: [String],
    content: {
        type: String,
        required: true,
    }
}, {timestamps: true});

module.exports = mongoose.model('Comment', commentSchema);