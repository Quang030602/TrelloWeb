import {
  Container,
} from '@mui/material';
import { useState , useEffect } from 'react';
import AppBar from '~/components/AppBar/AppBar';
import BoardBar from './BoardBar/BoardBar';
import BoardContent from './BoardContent/BoardContent';
//import {mockData} from '~/apis/mock_data';
import { fetchBoardDetailsAPI } from '~/apis';

function Board(){
  const [board, setBoard] =  useState(null);
   useEffect(() => {
       const boardId = '678f0e3eb49dcbaf6eefa73b';

       fetchBoardDetailsAPI(boardId).then(board => {
         setBoard(board)
       })
   },[])
    return (  
      <Container  disableGutters  maxWidth={false}  sx={{ height: '100vh'}}>
        <AppBar />  
        <BoardBar board={board} />
        <BoardContent board={board} />
          
      </Container>
      
    );
}
export default Board;