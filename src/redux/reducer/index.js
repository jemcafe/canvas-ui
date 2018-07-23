import { combineReducers } from 'redux';

import tools from './tools/tools';
import color from './color/color';
import canvas from './canvas/canvas';

const reducers = combineReducers({
  tools,
  color,
  canvas
});

export default reducers;