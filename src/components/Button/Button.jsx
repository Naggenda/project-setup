import React, { Component } from "react";
// import { Constructor } from "@babel/types";

class Button extends React.Component {
//   this.handleAddTodo = this.handleAddTodo.bind(this);
  
render(){
  return (
    <div>
      <button type="submit" className="btn btn-primary" onClick={ this.handleAddTodo } >add Todo</button>
    </div>
  );
}
}

export default Button;
