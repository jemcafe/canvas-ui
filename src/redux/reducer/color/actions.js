// // Color Converters
import { 
  RGBtoHex, 
  RGBtoCMYK, 
  RGBtoHSL, 
  RGBtoLAB, 
  // CMYKtoRGB, 
  // HSLtoRGB, 
  // LABtoRGB 
} from '../../../helpers/colorConversion';

// Action Types
export const SELECT_COLOR = 'SELECT_COLOR',
             RESET_COLORS = 'RESET_COLORS',
             SWAP_COLORS = 'SWAP_COLORS',
             UPDATE_COLOR = 'UPDATE_COLOR';

// Action Creators
export const selectColor = (num) => ({
  type: SELECT_COLOR,
  payload: (state) => {
    const property = `color_${num}`;
    let newObj = state[property];

    delete state[property];
    newObj.selected = true;

    for (let i in state) state[i].selected = false;

    return {...state, [property]: newObj};
  }
});

export const resetColors = () => ({
  type: RESET_COLORS,
  payload: (state) => {
    const newState = state;
    let rgb = null;

    for (let i in newState) {
      rgb = i === 'color_1' ? { r: 0, g: 0, b: 0 } : { r: 255, g: 255, b: 255 };
      newState[i].rgb = rgb;
      newState[i].hex = RGBtoHex(rgb.r, rgb.g, rgb.b);
      newState[i].cmyk = RGBtoCMYK(rgb.r, rgb.g, rgb.b);
      newState[i].hsl = RGBtoHSL(rgb.r, rgb.g, rgb.b);
      newState[i].lab = RGBtoLAB(rgb.r, rgb.g, rgb.b);
      newState[i].x = 0;
      newState[i].y = 0;
    }

    return {...state, newState };
  }
});

export const swapColors = () => ({
  type: SWAP_COLORS,
  payload: (state) => {
    const { color_1, color_2 } = state;

    const temp = color_1.selected;
    color_1.selected = color_2.selected;
    color_2.selected = temp;
    
    return {...state, color_1: color_2, color_2: color_1};
  }
});

export const updateColor = (rgb) => ({
  type: UPDATE_COLOR,
  payload: (state) => {
    let property = null;
    let newObj = null;

    for (let i in state) {
      if (state[i].selected) {
        property = i;
        newObj = state[i];
      }
    }

    newObj.hex = RGBtoHex(rgb.r, rgb.g, rgb.b);
    newObj.cmyk = RGBtoCMYK(rgb.r, rgb.g, rgb.b);
    newObj.hsl = RGBtoHSL(rgb.r, rgb.g, rgb.b);
    newObj.lab = RGBtoLAB(rgb.r, rgb.g, rgb.b);
    newObj.x = 0;
    newObj.y = 0;

    console.log(property, newObj);
    return {...state, [property]: newObj }
  }
});