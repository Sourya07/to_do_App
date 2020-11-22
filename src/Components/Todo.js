import React from "react";
import "./Todo.css";

const Todo = (props) => {
  const items = props.item;
  const itemsList = items.map((item) => {
    return (
      <div className="todo_list_card" key={item.key}>
        <span style={{ display: "inline"}}>
          <input
            type="text"
            value={item.text}
            onChange={(e) => props.updateTodo(e.target.value, item.key)}
          />
        </span>
        <button style={{position: "absolute", right: "10px", marginTop: "6px"}} onClick={() => props.deleteTodo(item.key)}>Delete</button>
      </div>
    );
  });
  return <div className="todo_list">{itemsList}</div>;
};

export default Todo;
