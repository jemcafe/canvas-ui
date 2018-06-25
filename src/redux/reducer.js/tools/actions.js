// Action types
export const TOOL = 'TOOL',
             RADIUS = 'RADIUS';

// Action creators
export const selectTool = (tool) => ({ 
  type: TOOL, 
  payload: (state) => {
    for (let i in state) state[i].selected = i === tool.toLowerCase() ? true : false;
    return state;
  }
});

export const updateRadius = (tool, radius) => ({ 
  type: RADIUS, 
  payload: (state) => {
    if ( tool === 'brush' ) state.brush.radius = radius;
    if ( tool === 'eraser' ) state.eraser.radius = radius;
    return state;
  }
});