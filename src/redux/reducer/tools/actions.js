// Action types
export const TOOL = 'TOOL',
             BRUSH_RADIUS = 'BRUSH_RADIUS';

// Action creators
export const selectTool = (tool) => ({ 
  type: TOOL, 
  payload: (state) => {
    for (let i in state) state[i].selected = i === tool.toLowerCase() ? true : false;
    console.log('Redux -> tool state', state);
    return state;
  }
});

export const updateBrushRadius = (tool, radius) =>({ 
  type: BRUSH_RADIUS, 
  payload: (state) => {
    if ( tool === 'paintBrush' ) state.paintBrush.radius = parseInt(radius, 10);
    if ( tool === 'eraser' ) state.eraser.radius = parseInt(radius, 10);
    return state;
  }
});