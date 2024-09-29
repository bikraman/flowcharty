import React, {useState} from 'react';
import {
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import './App.css' 

import InfiniteCanvas from './components/InfiniteCanvas';

function App() {
  return <InfiniteCanvas data={[{x: 10}]}></InfiniteCanvas>
}

export default App;