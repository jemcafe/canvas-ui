// Action types
export const SELECT_TOOL = 'SELECT_TOOL',
             UPDATE_BRUSH_SIZE = 'UPDATE_BRUSH_SIZE',
             UPDATE_BRUSH = 'UPDATE_BRUSH',
             UPDATE_OPACITY = 'UPDATE_OPACITY',
             UPDATE_STROKE_WIDTH = 'UPDATE_STROKE_WIDTH',
             ZOOM = 'ZOOM';

// Action creators
export const selectTool = (tool) => ({
  type: SELECT_TOOL,
  payload: (state) => {
    // The tool object is stored in new variable, and selected becomes true.
    // The tool is set to null, so redux knows there's a change.
    let newObj = state[tool];
    state[tool] = null;
    newObj.selected = true;

    // The other tools are not selected.
    for (let i in state) {
      if (state[i]) state[i].selected = false;
    } 

    return {...state, [tool]: newObj};
  }
});

export const updateBrushSize = (value) => ({
  type: UPDATE_BRUSH_SIZE,
  payload: (state) => {
    let tool = '';
    let newObj = {};

    for (let i in state) {
      if (state[i].selected && state[i].radius ) {
        tool = i;
        newObj = state[i];
        state[i] = null;
        newObj.radius = value;
        console.log( i, newObj.radius );
      }
    }
    return {...state, [tool]: newObj };
  }
});

export const updateBrush = (value) => ({
  type: UPDATE_BRUSH,
  payload: (state) => {
    let tool = '';
    let newObj = {};

    for (let i in state) {
      if (state[i].selected && state[i].brush ) {
        tool = i;
        newObj = state[i];
        state[i] = null;
        newObj.brush = value
        console.log( i, newObj.brush );
      }
    }
    return {...state, [tool]: newObj };
  }
});

export const updateOpacity = (value) => ({
  type: UPDATE_OPACITY,
  payload: (state) => {
    let tool = '';
    let newObj = {};

    for (let i in state) {
      if (state[i].selected && state[i].opacity) {
        tool = i;
        newObj = state[i];
        state[i] = null;
        newObj.opacity = value;
        console.log( i, newObj.opacity );
      }
    }
    return {...state, [tool]: newObj };
  }
})

export const updateStrokeWidth = (value) => ({
  type: UPDATE_STROKE_WIDTH,
  payload: (state) => {
    let tool = '';
    let newObj = {};

    for (let i in state) {
      if (state[i].selected && state[i].strokeWidth ) {
        tool = i;
        newObj = state[i];
        state[i] = null;
        newObj.strokeWidth = value;
        console.log( i, newObj.strokeWidth );
      }
    }
    return {...state, [tool]: newObj };
  }
});

export const zoom = (value) => ({
  type: ZOOM,
  payload: (state) => {
    let newObj = state.magnify;
    state.magnify = null;
    console.log('zoom: ', value);
    
    if (value === 'in') {
      newObj.in = true;
      newObj.out = false;
    }
    if (value === 'out') {
      newObj.in = false;
      newObj.out = true;
    }

    return {...state, magnify: newObj };
  }
})