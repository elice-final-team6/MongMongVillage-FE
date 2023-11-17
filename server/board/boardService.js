const Board = require('./model/boardSchema');
const User = require('../user/model/userSchema');
const Comment = require('../comment/model/commentSchema');

exports.createBoard = async () => {

}

exports.updateBoard = async () => {

}

exports.deleteBoard = async (userId, boardId) => {
    try {
        const result = await Board.findOneAndDelete({ _id: boardId, user_id: userId });
        if (result === null) {
            return {
                status: 400,
                errMsg: '게시글을 삭제하지 못했습니다.'
            }
        }
        return {
            status: 200,
            message: '게시글이 삭제되었습니다.'
        }
    } catch (error) {
        throw error;
    }
}

exports.getAllBoards = async (currentPage, perPage) => {
  try {
    const totalBoards = await Board.countDocuments({});
    const boards = await Board
                .find({})
                .sort({createdAt: -1})
                .skip((currentPage - 1) * perPage)
                .limit(perPage)
                .populate({ path: 'user_id', select: '_id image nickname' });
    return {
        status: 200,
        totalBoards: totalBoards, 
        boards: boards,
    }
  } catch (error) {
    throw error;
  }
}

exports.getCategoryBoards = async (category, currentPage, perPage) => {
    try {
        const totalBoards = await Board.countDocuments({ category: category });
        const boards = await Board 
                    .find({ category: category })
                    .sort({ createdAt: -1 })
                    .skip((currentPage - 1) * perPage)
                    .limit(perPage);
        return {
            status: 200,
            totalBoards: totalBoards, 
            boards: boards,
        }
    } catch (error) {
        throw error;
    }
}

// 홈 페이지 상위 4개 게시글(좋아요 순)
exports.getBestBoards = async () => {

}

exports.getBoardsByUserId = async (userId) => {
    try {
        const board = await Board.find({ user_id: userId });
        return {
            status: 200,
            board,
        }
    } catch (error) {
        throw error;
    }
}

exports.getDetailBoard = async (boardId) => { 
    try {
        const board = await Board.findOne({ _id: boardId })
            .populate({ path: 'user_id', select: '_id nickname image' });
        const comments = await Comment.find({ board_id: boardId })
            .select('_id user_id images content createdAt updatedAt')
            .populate({ path: 'user_id', select: '_id image nickname' });

        console.log('게시글: ', board);
        console.log('댓글: ', comments);
        if (!board) {
            return {
                status: 400,
                errMsg: '존재하지 않는 게시글입니다.'
            }
        }
        return {
            status: 200,
            board: board,
            comments: comments,
        }
    } catch (error) {
        throw error;
    }
}