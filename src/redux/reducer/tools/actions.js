// Action types
export const SELECT_TOOL = 'SELECT_TOOL';

// Action creators
export const selectTool = (tool) => ({
  type: SELECT_TOOL,
  payload: (state) => {
    // The tool's object is stored in new variable and selected becomes true.
    let newObj = state[tool];
    newObj.selected = true;

    // The tool is set to null and the other tools are not selected.
    state[tool] = null;
    for (let i in state) if (state[i]) state[i].selected = false; 

    // The tool is set to the new object
    return {...state, [tool]: newObj};
  }
});