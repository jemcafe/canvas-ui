import { TOOL, BRUSH_RADIUS } from './actions';

const initialState = {
  move: {
    selected: false
  },
  eyedropper: {
    selected: false
  },
  paintBrush: {
    radius: 10,
    selected: true
  },
  eraser: {
    radius: 10,
    selected: false
  },
  paintBucket: {
    selected: false
  },
  pen: {
    selected: false
  },
  shape: {
    selected: false
  },
  magnify: {
    selected: false
  }
};

// Reducer
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOOL:
      return payload(state);
    case BRUSH_RADIUS:
      return payload(state);
    default:
      return state;
  }
}