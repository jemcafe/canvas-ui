import { createStore, compose } from 'redux';
import rootReducer from './reducer/index';

const store = createStore(rootReducer, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f  // If the window has the devtools extension for redux, the extension is called. If not, nothing happens.
));

export default store;