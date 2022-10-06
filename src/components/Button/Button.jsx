import React from "react";

function Button() {
  

  return (
    <div>
      <button type="submit" className="btn btn-primary" onClick={ this.handleAddTodo } >add Todo</button>
    </div>
  );

}

export default Button;
