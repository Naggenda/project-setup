import React, { Component } from 'react';
import Button from "../../components/Button";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
      items: []
    };
  }
    handleAddTodo = () => {
        const items = this.state.items;
        this.setState({
            newTodo: '',
            items: [...this.state.items, this.state.newTodo]
        });
    };

    handleChange=(e)=> {
      e.preventDefault();
      this.setState({
        newTodo: e.target.value
      });
    }
  
  render() {
    const items = this.state.items;
    return (
      <div>
        <div>
          <input type="text" placeholder="todo item" onChange={ this.handleChange } name="newTodo" />
      <button type="submit" className="btn btn-primary" onClick={ this.handleAddTodo } >add Todo</button>
          
        </div>
<div>
        {
          items.map((item, index) =>
          <div>
          <ul key={item}>
            <li>{item}</li>
          </ul>
          </div>
        )}
        </div>
      </div>
    );
  }
}

export default Home;

// class Home extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       newTodo: "",
//       items: []
//     };

//     // This binding is necessary to make `this` work in the callback
//     // this.handleClick = this.handleClick.bind(this);
//     this.handleAddTodo = this.handleAddTodo.bind(this);

//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleAddTodo = () => {
//     const items = this.state.items;
//     this.setState = {
//       newTodo: '',
//       items: [...this.state.items, this.state.newTodo]
//     };
//   };

//   handleChange = (e) => {
//     e.preventDefault();
//     this.setState = {
//       newTodo: e.target.value
//     };
//   }

//   render() {
//     const items = this.state.items;
//     return (
//       <div>
//         <input type="text" onChange={this.handleChange} name="newTodo" placeholder="Add todo" />
//         <button type="submit" onClick={this.handleAddTodo} className="btn btn-primary">Add todo</button>

//         <div>
//           {items.map((item, index) => (
//             <ul>
//               <li>{item}</li>
//             </ul>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default Home;
