const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Types: { ObjectId } } = Schema;

const commentSchema = new Schema({
    user_id: {
        type: ObjectId,
        required: true,
        ref: "User",
    },
    board_id: {
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