import React, { Component } from "react";
import "./TodoForm.css";
class TodoForm extends Component {
  state = {
    name: "",
  };
  handlchang = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handlsubmit = (e) => {
    e.preventDefault();
    this.props.addItems(this.state);
    this.setState({
      name: "",
     
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handlsubmit}>
          <input
            type="text"
            placeholder="Add a Todo"
            id="name"
            onChange={this.handlchang}
            value={this.state.name}
          />
       
          <input type="submit" value="Add " />
        </form>
      </div>
    );
  }
}
export default TodoForm;
