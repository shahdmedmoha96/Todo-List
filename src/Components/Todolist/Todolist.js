import React from "react";
import "./Todolist.css";
import { RiCloseCircleLine } from "react-icons/ri";
function Todolist(props) {
  const { items, deleteItems, clearlisttodo } = props;
  let length = items.length;
  const itemlist = length ? (
    items.map((item) => {
      return (
        <div key={item.id} className="list-todo">
          <span className="name ">{item.name}</span>
          <span className="action click" onClick={() => deleteItems(item.id)}>
            <RiCloseCircleLine />
          </span>
          
        </div>
      );
    })
  ) : (
    <p>There is no Todo to show</p>
  );

  let clear =
    length >= 2? (
      <button onClick={() => clearlisttodo()} className="button-clear">
        Clear
      </button>
    ) : (
      ""
    );

  return (
    <div className="listItems">
      {itemlist}
      {clear}
    </div>
  );
}

export default Todolist;
