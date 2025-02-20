import {
  Container,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import AppBar from '~/components/AppBar/AppBar';
import BoardBar from './BoardBar/BoardBar';
import BoardContent from './BoardContent/BoardContent';
//import {mockData} from '~/apis/mock_data';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { isEmpty } from 'lodash';
import {
  createNewCardAPI,
  createNewColumnAPI,
  fetchBoardDetailsAPI,
  updateBoardDetailsAPI,
  updateColumnDetailsAPI,
} from '~/apis';
import { generatePlaceholderCard } from '~/utils/formatters';
import { mapOrder } from '~/utils/sort';


function Board(){
  const [board, setBoard] =  useState(null);
   useEffect(() => {
       const boardId = '67b54524fb02d348daeef05d';

       fetchBoardDetailsAPI(boardId).then(board => {
          board.columns = mapOrder(board.columns, board.columnOrderIds, '_id')
          board.columns.forEach(column => {

            if (isEmpty(column.cards)){
              column.cards = [generatePlaceholderCard(column)]
              column.cardOrderIds = [generatePlaceholderCard(column)._id]
            }
            else {
              column.cards = mapOrder(column.cards, column.cardOrderIds, '_id')
            }
          })
         setBoard(board)
       })
   },[])
   const createNewColumn = async(newColumnData) => {
      const createdColumn = await  createNewColumnAPI({
        ...newColumnData,
        boardId : board._id
      });
      
      createdColumn.cards = [generatePlaceholderCard(createdColumn)]
      createdColumn.cardOrderIds = [generatePlaceholderCard(createdColumn)._id]


      const newBoard = {...board}
      newBoard.columns.push(createdColumn)
      newBoard.columnOrderIds.push(createdColumn._id)
      setBoard(newBoard)
   }
   const createNewCard = async(newCardData) => {
    const createdCard = await  createNewCardAPI({
      ...newCardData,
      boardId : board._id
    });
    const newBoard = {...board}
    const columnToUpdate = newBoard.columns.find(column => column._id === createdCard.columnId)
    if (columnToUpdate){ 
      columnToUpdate.cards.push(createdCard)
      columnToUpdate.cardOrderIds.push(createdCard._id)
    }
    setBoard(newBoard)
  }

  const moveColumns = async (dndOrderedColumns) => {
    const dndOrderedColumnIds = dndOrderedColumns.map(column => column._id)
    const newBoard = {...board}
    newBoard.columns = dndOrderedColumns
    newBoard.columnOrderIds = dndOrderedColumnIds
    setBoard(newBoard)
    await updateBoardDetailsAPI(newBoard._id, {columnOrderIds: dndOrderedColumnIds})
  }

  const moveCardInTheSameColumn = (dndOrderedCards, dndOrderedCardIds, columnId) => {
    const newBoard = {...board}
    const columnToUpdate = newBoard.columns.find(column => column._id === columnId)
    if (columnToUpdate){ 
      columnToUpdate.cards = dndOrderedCards
      columnToUpdate.cardOrderIds = dndOrderedCardIds
      
    }
    setBoard(newBoard)
    updateColumnDetailsAPI(columnId, {cardOrderIds: dndOrderedCardIds})
  }
  const moveCardToDifferentColumn = (currentCardId, prevColumnId, nextColumnId, dndOrderedColumns) => {
    const dndOrderedColumnIds = dndOrderedColumns.map(column => column._id)
    const newBoard = {...board}
    newBoard.columns = dndOrderedColumns
    newBoard.columnOrderIds = dndOrderedColumnIds
    setBoard(newBoard)
    
    moveCardToDifferentColumn ({
      currentCardId,
      prevColumnId,
      prevCardOrderIds: dndOrderedColumns.find(column => column._id === prevColumnId)?.cardOrderIds,
      nextColumnId,
      nextCardOrderIds: dndOrderedColumns.find(column => column._id === nextColumnId)?.cardOrderIds
    })

  }

  if (!board){
    return (
      <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'center',
          gap:2,
          width: '100vw',
          height: '100vh',
          }}>
        <CircularProgress />
        <Typography>Loading board</Typography>
      </Box>
    );
  }
    return (  
      <Container  disableGutters  maxWidth={false}  sx={{ height: '100vh'}}>
        <AppBar />  
        <BoardBar
          board={board}
           
        />
        <BoardContent 
        board={board} 
        createNewColumn={createNewColumn}
        createNewCard = {createNewCard}
        moveColumns = {moveColumns}
        moveCardInTheSameColumn = {moveCardInTheSameColumn}
        moveCardToDifferentColumn = {moveCardToDifferentColumn}
        />
          
      </Container>
      
    );
}
export default Board;