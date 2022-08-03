import * as models from '../models/board.js';

export const getBoard = async keyword => {
  const boardSearchResult = await models.getBoard(keyword);
  return boardSearchResult;
};

export const createComment = async (boardId, userId, comment, parent_id) => {
  return await models.createComment(boardId, userId, comment, parent_id);
};

export const updateBoardViews = async (boardId, userId) => {
  return await models.updateBoardViews(boardId, userId);
};
