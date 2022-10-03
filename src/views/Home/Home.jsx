import React, { Component } from "react";
import Button from "../../components/Button";
// import { isSupported } from "workbox-navigation-preload";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: "",
      lists: []
    };

    const handleChange = e => {
      e.preventDefault();
      this.setState = {
        newTodo: e.target.value
      };
    };
  }
  render() {
    const lists = this.state.value;
    return (
      <div>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            id="todo"
            placeholder="todo item"
            onChange={this.handleChange}
            name="newTodo"
          />
          <Button />
        </div>
        {lists.map(list => (
          <ul>
            <li>{list}</li>
          </ul>
        ))}
        }
      </div>
    );
  }
}

export default Home;
