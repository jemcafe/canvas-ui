// // Color Converters
// import { 
//   RGBtoHex, 
//   RGBtoCMYK, 
//   RGBtoHSL, 
//   RGBtoLAB, 
//   CMYKtoRGB, 
//   HSLtoRGB, 
// LABtoRGB } from '../../../helpers/colorConversion';

// Action Types
export const RESET_COLORS = 'RESET_COLORS',
             SWAP_COLORS = 'SWAP_COLORS';

// Action Creators
export const resetColors = () => ({
  type: RESET_COLORS,
  payload: (state, initialState) => {
    const { color_1, color_2 } = initialState;
    return {...state, color_1, color_2};
  }
});

export const swapColors = () => ({
  type: SWAP_COLORS,
  payload: (state) => {
    const { color_1, color_2 } = state;
    return {...state, color_1: color_2, color_2: color_1};
  }
});

// export const selectColor = (num, picker, c) => ({
//   type: 'COLOR_' + num,
//   payload: () => {
//     let hex = '', 
//         rgb = {}, 
//         cmyk = {}, 
//         hsl = {}, 
//         lab = {},
//         x = 0, 
//         y = 0;

//     if ( picker === 'hueGradient' ) {
//       rgb = { r: c.r, g: c.g, b: c.b };
//       hex = RGBtoHex(rgb.r, rgb.g, rgb.b);
//       cmyk = RGBtoCMYK(rgb.r, rgb.g, rgb.b);
//       hsl = RGBtoHSL(rgb.r, rgb.g, rgb.b);
//       lab = RGBtoLAB(rgb.r, rgb.g, rgb.b);
//       x = c.x;
//       y = c.y;
//     }
//     if ( picker === 'rgb' ) {
//       rgb = { r: c.r, g: c.g, b: c.b };
//       hex = RGBtoHex(rgb.r, rgb.g, rgb.b);
//       cmyk = RGBtoCMYK(rgb.r, rgb.g, rgb.b);
//       hsl = RGBtoHSL(rgb.r, rgb.g, rgb.b);
//       lab = RGBtoLAB(rgb.r, rgb.g, rgb.b);
//       x = c.x;
//       y = c.y;
//     }
//     if ( picker === 'cmyk' ) {
//       cmyk = { c: c.c, m: c.m, y: c.y, k: c.k };
//       rgb = CMYKtoRGB(cmyk.c, cmyk.m, cmyk.y, cmyk.k);
//       hex = RGBtoHex(rgb.r, rgb.g, rgb.b);
//       hsl = RGBtoHSL(rgb.r, rgb.g, rgb.b);
//       lab = RGBtoLAB(rgb.r, rgb.g, rgb.b);
//       x = c.x;
//       y = c.y;
//     }
//     if ( picker === 'hsl' ) {
//       hsl = { h: c.h, s: c.s, l: c.l };
//       rgb = HSLtoRGB(hsl.h, hsl.s, hsl.l);
//       cmyk = RGBtoCMYK(rgb.r, rgb.g, rgb.b);
//       hex = RGBtoHex(rgb.r, rgb.g, rgb.b);
//       lab = RGBtoLAB(rgb.r, rgb.g, rgb.b);
//       x = c.x;
//       y = c.y;
//     }
//     if ( picker === 'lab' ) {
//       lab = { l: c.l, a: c.a, b: c.b };
//       rgb = LABtoRGB(lab.l, lab.a, lab.b);
//       cmyk = RGBtoCMYK(rgb.r, rgb.g, rgb.b);
//       hsl = RGBtoHSL(rgb.r, rgb.g, rgb.b);
//       hex = RGBtoHex(rgb.r, rgb.g, rgb.b);
//       x = c.x;
//       y = c.y;
//     }
    
//     return { hex, rgb, cmyk, hsl, lab, x, y };
//   } 
// });