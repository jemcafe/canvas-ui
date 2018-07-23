import { 
  FOCUS_CANVAS,
  UNFOCUS_CANVAS
} from './actions';

const initialState = {
  focus: false,
  onMouseMove: null,
  onMouseUp: null,
  onMouseLeave: null
};

// Reducer
export default (state = initialState, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case FOCUS_CANVAS:
      return payload(state);
    case UNFOCUS_CANVAS:
      return payload(state);
    default:
      return state;
  }
}