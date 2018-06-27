import { combineReducers } from 'redux';

import tools from './tools/tools';
import color from './color/color';

const reducers = combineReducers({
  tools,
  color
});

export default reducers;