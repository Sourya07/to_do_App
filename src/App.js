import React, { Component } from "react";
import "./App.css";
import Todo from "./Components/Todo";

class App extends Component {
  state = {
    items: [],
    currentItem: {
      text: "",
      key: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      console.log(newItems);
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  };

  handleDelete = (key) => {
    const del = this.state.items.filter((item) => item.key !== key);
    this.setState({ items: del });
  };

  handleUpdate = (text, key) => {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({
      items: items,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>TO-DOs</h1>
        <form onSubmit={this.addItem} className="todo-form">
          <input
            type="text"
            placeholder="Enter text"
            value={this.state.currentItem.text}
            onChange={this.handleChange}
          />
          <button>Add item</button>
        </form>
        <Todo
          item={this.state.items}
          deleteTodo={this.handleDelete}
          updateTodo={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
