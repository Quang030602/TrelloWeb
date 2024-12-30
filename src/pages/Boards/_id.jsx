import React, { useState } from 'react';
import AppBar from '../../components/AppBar';
import {
  Container,
  
} from '@mui/material';
import BoardBar from './BoardBar';
import BoardContent from './BoardContent';
function Board(){
    return (  
      <Container
          disableGutters
          maxWidth={false}
          sx={{ height: '100vh', backgroundColor: 'primary.main' }}
      >
        <AppBar />  
        <BoardBar />
        <BoardContent />
          
      </Container>
      
    );
}
export default Board;