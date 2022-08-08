import * as models from '../models/board.js';

export const getBoard = async (boardId, pageNum) => {
  const boardSearchResult = await models.getBoard(boardId, pageNum);
  return boardSearchResult;
};

export const getBoards = async keyword => {
  const boardSearchResult = await models.getBoards(keyword);
  return boardSearchResult;
};

export const updateBoardViews = async (boardId, userId) => {
  const existingUser = await models.getUserById(boardId, userId);
  if (existingUser) {
    const view = Number((await models.readView(boardId))[0].cnt);
    return view;
  }
  await models.updateBoardViews(boardId, userId);
  const view = Number((await models.readView(boardId))[0].cnt);
  return view;
};
