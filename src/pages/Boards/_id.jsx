import {
  Container,
} from '@mui/material';
import { useState , useEffect } from 'react';
import AppBar from '~/components/AppBar/AppBar';
import BoardBar from './BoardBar/BoardBar';
import BoardContent from './BoardContent/BoardContent';
//import {mockData} from '~/apis/mock_data';
import { fetchBoardDetailsAPI, createNewColumnAPI, createNewCardAPI } from '~/apis';

function Board(){
  const [board, setBoard] =  useState(null);
   useEffect(() => {
       const boardId = '678f0e3eb49dcbaf6eefa73b';

       fetchBoardDetailsAPI(boardId).then(board => {
         setBoard(board)
       })
   },[])
   const createNewColumn = async(newColumnData) => {
      const createdColumn = await  createNewColumnAPI({
        ...newColumnData,
        boardId : board._id
      });
      console.log("createdColumn",createdColumn)
   }
   const createNewCard = async(newCardData) => {
    const createdCard = await  createNewCardAPI({
      ...newCardData,
      boardId : board._id
    });
    console.log("createdCard",createdCard)
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
        />
          
      </Container>
      
    );
}
export default Board;