// Action Types
export const FOCUS_CANVAS = 'FOCUS_CANVAS',
             UNFOCUS_CANVAS = 'UNFOCUS_CANVAS';

// Action Creators
export const focusCanvas = ({focus, onMouseMove, onMouseUp, onMouseLeave}) => ({
  type: FOCUS_CANVAS,
  payload: (state) => {
    console.log({focus, onMouseMove, onMouseUp, onMouseLeave});
    return {...state, focus, onMouseMove, onMouseUp, onMouseLeave };
  }
});

export const unfocusCanvas = () => ({
  type: UNFOCUS_CANVAS,
  payload: (state) => {
    return {...state, focus: false };
  }
});