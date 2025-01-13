import { DndContext, MouseSensor, TouchSensor, defaultDropAnimationSideEffects, useSensor, useSensors, DragOverlay } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { mapOrder } from '~/utils/sort';
import Column from './ListColumns/Columns/Column';
import Card from './ListColumns/Columns/ListCards/Card/Card';
import ListColumns from './ListColumns/ListColumns';

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
};

function BoardContent({ board }) {
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } });
  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 5 } });

  const sensors = useSensors(mouseSensor, touchSensor);
  const [orderedColumns, setOrderedColumns] = useState([]);

  const [activeDragItemId, setActiveDragItemId] = useState(null);
  const [activeDragItemType, setActiveDragItemType] = useState(null);
  const [activeDragItemData, setActiveDragItemData] = useState(null);

  useEffect(() => {
    const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id');
    setOrderedColumns(orderedColumns);
  }, [board]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;
    if (active.id !== over.id) {
      const oldIndex = orderedColumns.findIndex(c => c._id === active.id);
      const newIndex = orderedColumns.findIndex(c => c._id === over.id);
      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex);
      setOrderedColumns(dndOrderedColumns);
    }
    setActiveDragItemId(null);
    setActiveDragItemType(null);
    setActiveDragItemData(null);
  };

  const handleDragStart = (event) => {
    const { active } = event;
    const activeType = active.data.current?.type;
    setActiveDragItemId(active.id);
    setActiveDragItemType(activeType);
    setActiveDragItemData(active.data.current);

    console.log('Dragging item:', active.id);
    console.log('Item type:', activeType);
  };

  const customDropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: '0.5'
        }
      }
    })
  };

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors} onDragStart={handleDragStart}>
      <Box sx={{
        bgcolor: (theme) => theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
        width: '100%',
        height: (theme) => theme.trelloCustom.boardContentHeight,
        p: '10px 0',
      }}>
        <ListColumns columns={orderedColumns} />
        <DragOverlay dropAnimation={customDropAnimation}>
          {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && activeDragItemData && <Column column={activeDragItemData} />}
          {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD && activeDragItemData && <Card card={activeDragItemData} />}
        </DragOverlay>
      </Box>
    </DndContext>
  );
}

export default BoardContent;