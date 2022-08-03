import express from 'express';
import * as controller from '../controllers/board.js';
const router = express.Router();

router.get('/board/', controller.getBoard); //게시판 검색
router.post('/board/:boardId', controller.createComment); //댓글 작성
router.put('/board/:boardId', controller.updateBoardViews);//게시판 조회수
export default router;
