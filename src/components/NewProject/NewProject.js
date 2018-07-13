import React from 'react';

function NewProject () {
  return (
    <div id="new-project">
      <h5>New</h5>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <div className="submit-btn">
            <input type="submit" value="Open"/>
          </div>
          <button className="btn">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default NewProject;