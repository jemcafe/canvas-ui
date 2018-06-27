// Action types
export const SELECT = 'SELECT';

// Action creators
export const selectTool = (tool) => ({
  type: SELECT,
  payload: (state) => {
    // The selected tool's object is stored in new variable
    let newObj = state[tool];
    newObj.selected = true;

    // The selected tool is set to null. The other tools are not selected.
    for (let i in state) {
      if (i === tool) state[i] = null;
      if (i !== tool) state[i].selected = false; 
    }

    // The selected tool is set to the new object
    return {...state, [tool]: newObj};
  }
});