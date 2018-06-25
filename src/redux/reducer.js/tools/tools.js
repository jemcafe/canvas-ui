import { TOOL, RADIUS } from './actions';

const initialState = {
  brush: {
    radius: 10,
    selected: true
  },
  eraser: {
    radius: 10,
    selected: false
  },
  eyedropper: {
    selected: false
  },
  paintBucket: {
    selected: false
  },
  pen: {
    selected: false
  },
};

// Reducer
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOOL:
      return payload(state);
    case RADIUS:
      return payload(state);
    default:
      return state;
  }
}