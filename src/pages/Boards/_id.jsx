import {
  Container,
} from '@mui/material';
import { useState , useEffect } from 'react';
import AppBar from '~/components/AppBar/AppBar';
import BoardBar from './BoardBar/BoardBar';
import BoardContent from './BoardContent/BoardContent';
//import {mockData} from '~/apis/mock_data';
import { fetchBoardDetailsAPI, createNewColumnAPI, createNewCardAPI } from '~/apis';
import { generatePlaceholderCard } from '~/utils/formatters';
import { isEmpty } from 'lodash';

function Board(){
  const [board, setBoard] =  useState(null);
   useEffect(() => {
       const boardId = '67b54524fb02d348daeef05d';

       fetchBoardDetailsAPI(boardId).then(board => {
          board.columns.forEach(column => {
            if (isEmpty(column.cards)){
              column.cards = [generatePlaceholderCard(column)]
              column.cardOrderIds = [generatePlaceholderCard(column)._id]
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
        />
          
      </Container>
      
    );
}
export default Board;