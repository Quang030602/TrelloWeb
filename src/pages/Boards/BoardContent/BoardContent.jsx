import { 
  DndContext, defaultDropAnimationSideEffects, 
  useSensor, useSensors, DragOverlay , closestCorners, closestCenter,
  pointerWithin, rectIntersection, getFirstCollision
} from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { Box } from '@mui/material';
import { useCallback, useEffect, useState,useRef } from 'react';
import { mapOrder } from '~/utils/sort';
import Column from './ListColumns/Columns/Column';
import Card from './ListColumns/Columns/ListCards/Card/Card';
import ListColumns from './ListColumns/ListColumns';
import { cloneDeep, isEmpty } from 'lodash';
import { generatePlaceholderCard } from '~/utils/formatters';
import { MouseSensor, TouchSensor } from '~/customLib/DndKitSensors';

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
};

function BoardContent({ board,createNewColumn, createNewCard, moveColumns }) {
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } });
  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 5 } });

  const sensors = useSensors(mouseSensor, touchSensor);
  const [orderedColumns, setOrderedColumns] = useState([]);

  const [activeDragItemId, setActiveDragItemId] = useState(null);
  const [activeDragItemType, setActiveDragItemType] = useState(null);
  const [activeDragItemData, setActiveDragItemData] = useState(null);
  const [oldColumnWhenDrag, setOldColumnWhenDrag] = useState(null);
  const lastOverId = useRef(null);

  useEffect(() => {
    const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id');
    setOrderedColumns(orderedColumns);
  }, [board]);
  const findColumnByCardId = (cardId) => {
    return orderedColumns.find(column => column.cards.map(card => card._id)?.includes(cardId));
  }
  const moveCardToAnotherColumn = (
    overColumn, 
    overCardId , 
    activeColumn, 
    activeDraggingCardId, 
    activeDraggingCardData , 
    active , 
    over
  ) => {
    setOrderedColumns(prevColumns => {
      const overCardIndex = overColumn?.cards?.findIndex(card => card._id === overCardId);
      let newCardIndex 

      const isBelowOverItem = active.rect.current.translated && 
      active.rect.current.translated.top > over.rect.top + over.rect.height

      const modifier = isBelowOverItem ? 1 : 0

      newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : overColumn?.cards?.length +1
      
      const nextColumns = cloneDeep(prevColumns)
      const nextActiveColumn = nextColumns.find(column => column._id === activeColumn._id) 
      const nextOverColumn = nextColumns.find(column => column._id === overColumn._id) 
      if (nextActiveColumn ){
        nextActiveColumn.cards = nextActiveColumn.cards.filter(card => card._id !== activeDraggingCardId)
        if (isEmpty(nextActiveColumn.cards)) {
            nextActiveColumn.cards = [generatePlaceholderCard(nextActiveColumn)]
        }
        nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(card => card._id)
      }

      if (nextOverColumn ){
        nextOverColumn.cards = nextOverColumn.cards.filter(card => card._id !== activeDraggingCardId)
        const rebuild_activeDraggingCardData = {
          ...activeDraggingCardData, columnId: nextOverColumn._id
        }
        nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIndex, 0, rebuild_activeDraggingCardData)
        nextOverColumn.cards = nextOverColumn.cards.filter(card => !card.FE_PlaceholderCard)
        nextOverColumn.cardOrderIds = nextOverColumn.cards.map(card => card._id)

      }
      console.log('nextColumns', nextColumns)
      return nextColumns
    },) 
  }
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!active || !over) return;
    
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD ) {
      console.log('DRAG CARD');
      if (!active || !over) return
      const {id : activeDraggingCardId , data : {current : activeDraggingCardData}} = active
      const {id: overCardId} = over
      const activeColumn = findColumnByCardId(activeDraggingCardId)
      const overColumn = findColumnByCardId(overCardId)
      // console.log('activeColumn', activeColumn)
      // console.log('overColumn', overColumn)
      if (!activeColumn || !overColumn) { return}
     
      if (oldColumnWhenDrag._id !== overColumn._id) {
        moveCardToAnotherColumn(overColumn, overCardId, activeColumn, activeDraggingCardId, activeDraggingCardData, active, over)
      }
      else { 
        const oldCardIndex = oldColumnWhenDrag?.cards.findIndex(c => c._id === activeDragItemId);
        const newCardIndex = overColumn?.cards.findIndex(c => c._id === overCardId);
        const dndOrderedCards = arrayMove(oldColumnWhenDrag?.cards, oldCardIndex, newCardIndex);
        setOrderedColumns(prevColumns => {
          const nextColumns = cloneDeep(prevColumns)
          const targetColumn = nextColumns.find(column => column._id === overColumn._id)
          targetColumn.cards = dndOrderedCards
          targetColumn.cardOrderIds = dndOrderedCards.map(card => card._id)
          console.log('nextColumns', targetColumn)
          return nextColumns
        })
      }
    }

    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
      console.log('DRAG COLUMN');
      if (active.id !== over.id) {
        const oldIndex = orderedColumns.findIndex(c => c._id === active.id);
        const newIndex = orderedColumns.findIndex(c => c._id === over.id);
        const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex);
        moveColumns(dndOrderedColumns);
        setOrderedColumns(dndOrderedColumns);
      }
    }    
    setActiveDragItemId(null);
    setActiveDragItemType(null);
    setActiveDragItemData(null);
    setOldColumnWhenDrag(null);
  };

  const handleDragOver = (event) => {
    //console.log('handleDragOver', event);
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {  return   }
    const {active, over} = event;
    if (!active || !over) return
    const {id : activeDraggingCardId , data : {current : activeDraggingCardData}} = active
    const {id: overCardId} = over
    const activeColumn = findColumnByCardId(activeDraggingCardId)
    const overColumn = findColumnByCardId(overCardId)
    // console.log('activeColumn', activeColumn)
    // console.log('overColumn', overColumn)
    if (!activeColumn || !overColumn) { return}
    if (activeColumn._id !== overColumn._id) { 
      // console.log("Move card to another column")
      moveCardToAnotherColumn(overColumn, overCardId, activeColumn, activeDraggingCardId, activeDraggingCardData, active, over)
    }
}

  const handleDragStart = (event)=>{
    setActiveDragItemId(event?.active?.id)
    setActiveDragItemType(event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN)
    setActiveDragItemData(event?.active?.data?.current)
    if (event?.active?.data?.current?.columnId) {
      setOldColumnWhenDrag(findColumnByCardId(event?.active?.id))
    }
  } 

    
  const customDropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: '0.5'
        }
      }
    })
  };
  
  const collisionDetectionStrategy = useCallback((args)=>{
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
      return closestCenter({
        ...args
      });
    }
    const pointerCollisions = pointerWithin(args);
    
  // Collision detection algorithms return an array of collisions
    if (pointerCollisions.length > 0) {
      return pointerCollisions;
    }
    const pointerIntersection = pointerWithin(args);
    if (!pointerIntersection?.length) { return }
    
    let overId = getFirstCollision(pointerIntersection,'id');
    if (overId){
      const checkColumn = orderedColumns.find(column => column._id === overId) 
      if (checkColumn) {
        overId = closestCorners({
          ...args,
          droppableContainers : args.droppableContainers.filter(container => {
            return (container.id !== overId) && (checkColumn?.cardOrderIds?.includes(container.id))
          })
        })[0]?.id
      }
      lastOverId.current = overId
      return [{id :overId}]
    
    }
    // If there are no collisions with the pointer, return rectangle intersections
    return lastOverId.current ? [{id : lastOverId.current}] : []
  }, [activeDragItemType,orderedColumns]);


  return (
    <DndContext 
      onDragEnd={handleDragEnd} 
      sensors={sensors} 
      onDragStart={handleDragStart} 
      onDragOver={handleDragOver}
      //collisionDetection={closestCorners}
      collisionDetection={collisionDetectionStrategy}
    >
      <Box sx={{
        bgcolor: (theme) => theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
        width: '100%',
        height: (theme) => theme.trelloCustom.boardContentHeight,
        p: '10px 0',
      }}>
        <ListColumns 
          columns={orderedColumns}
          createNewColumn ={createNewColumn}
          createNewCard = {createNewCard}
        />
        <DragOverlay dropAnimation={customDropAnimation}>
          {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && activeDragItemData && <Column column={activeDragItemData} />}
          {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD && activeDragItemData && <Card card={activeDragItemData} />}
        </DragOverlay>
      </Box>
    </DndContext>
  );
}

export default BoardContent;