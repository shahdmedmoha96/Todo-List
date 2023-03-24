import React, { Component } from "react";
import TodoForm from "../TodoForm/TodoForm";
import Todolist from "../Todolist/Todolist";
import "./Todo.css";
class Todo extends Component {
  state = {
    items: [],
  };
  deleteItems = (id) => {
    let items = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({ items });
  };
  clearlisttodo = () => {
    let items = this.state.items.filter((item) => {
      return !item.id;
    });
    this.setState({ items });
  };
 
  addItems = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    if (item.name && item.name.length > 2) {
      items.push(item);
      this.setState(items);
    }
  };
  render() {
    return (
      <div className="todo">
        <h1 className="text-header">TodoList App</h1>
        <TodoForm addItems={this.addItems} />
        <Todolist
          items={this.state.items}
          deleteItems={this.deleteItems}
          updata={this.updata}
          clearlisttodo={this.clearlisttodo}
         
        />
      </div>
    );
  }
}

export default Todo;
