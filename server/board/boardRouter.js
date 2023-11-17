const express = require('express');
const router = express.Router();

const User = require('../user/model/userSchema');
const Board = require('./model/boardSchema');
const Comment = require('../comment/model/commentSchema');

const { 
    deleteBoard, 
    getDetailBoard, 
    getAllBoards, 
    getCategoryBoards,
    getBoardsByUserId
} = require('./boardService');

// 초기화 할 때 사용
// router.get('/init', async (req, res) => {
//     try { 
//         const id = '655721d412cf2fe595b4f199';
//         const user = await User.findById(id);
//         const board = await Board.findById('6557469a63d202e902f4483d');
//         if (user) {
//             await Board.create({
//                 user_id: user,
//                 board_id: board,
//                 comment_id: '65577842b963787c3d08b8fa',
//                 title: '23번째',
//                 content: '그만...'
//             });
//         }
//         } catch (error) {
//             console.error(error);
//         }
// })

router.delete('/:boardId', async (req, res, next) => {
    try {
        const userId = '6557219012cf2fe595b4f198';
        const boardId = req.params.boardId;
        const deleteBoardResult = await deleteBoard(userId, boardId);
        if (deleteBoardResult.status === 200)
            return res.status(200).json(deleteBoardResult);
        else
            return res.status(400).json(deleteBoardResult);
    } catch (error) {
        console.error(error);
        next(error);
    }

});

// 게시글 조회 + 페이지네이션
router.get('/', async (req, res, next) => {
    try {
        const currentPage = req.query.currentPage || 1;
        const perPage = 4;
        const allBoardsResult = await getAllBoards(currentPage, perPage);
        return res.status(200).json(allBoardsResult);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.get('/category/:category', async (req, res, next) => {
    try {
        const currentPage = req.query.currentPage || 1;
        const perPage = 4;
        const category = req.params.category;
        const categoryBoardsResult = await getCategoryBoards(category, currentPage, perPage);
        return res.status(200).json(categoryBoardsResult)
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.get('/:boardId', async (req, res, next) => {
    try {
        const boardId = req.params.boardId;
        const boardDetailResult = await getDetailBoard(boardId);

        if (boardDetailResult.status === 400) {
            return res.status(400).json(boardDetailResult);
        }
        return res.status(200).json(boardDetailResult);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.get('/mypage/user', async (req, res, next) => {
    try {
        // 로그인 했는지 검사
        const userId = '6557219012cf2fe595b4f198';
        const userBoardsResult = await getBoardsByUserId(userId);
        return res.status(200).json(userBoardsResult);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;