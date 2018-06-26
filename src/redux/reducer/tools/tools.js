import { TOOL, BRUSH_RADIUS } from './actions';

const initialState = {
  move: {
    select: 'Layer',
    selected: false
  },
  eyedropper: {
    sampleSize: 'Point Sample',
    selected: false
  },
  paintBrush: {
    brush: 'Hard Round',
    radius: 10,
    opacity: 1,
    selected: true
  },
  eraser: {
    brush: 'Hard Round',
    radius: 10,
    opacity: 1,
    selected: false
  },
  paintBucket: {
    opacity: 1,
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