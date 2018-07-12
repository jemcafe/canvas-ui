import { 
  COLOR_1, 
  COLOR_2, 
  SWAP_COLORS 
} from './actions';

const initialState = {
  color_1: {
    hex: '#000000',
    rgb: { r: 0, g: 0, b: 0 },
    cmyk:{ c: 0, m: 100, y: 100, k: 0 },
    hsl: { h: 0, s: 100, l: 0 },
    lab: { l: 0, a: 0, b: 0 },
    x: 0,
    y: 0
  },
  color_2: {
    hex: '#ffffff',
    rgb: { r: 255, g: 255, b: 255 },
    cmyk:{ c: 0, m: 100, y: 100, k: 100 },
    hsl: { h: 0, s: 100, l: 100 },
    lab: { l: 100, a: 0, b: 0 },
    x: 0,
    y: 0
  }
};

// Reducer
export default (state = initialState, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case COLOR_1:
      return {...state, color_1: payload};
    case COLOR_2:
      return {...state, color_2: payload};
    case SWAP_COLORS:
      return payload(state);
    default:
      return state;
  }
}