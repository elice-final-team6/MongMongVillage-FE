const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Types: { ObjectId } } = Schema;

const likeBoardSchema = new Schema({
	user_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
	},
	board_id: {
	  type: Schema.Types.ObjectId,
	  required: true,
	  ref: "Board",
	}
}, { timestamps: true });

module.exports = mongoose.model('Like', likeBoardSchema);