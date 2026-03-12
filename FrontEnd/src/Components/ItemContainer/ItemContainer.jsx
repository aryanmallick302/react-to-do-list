import { useEffect, useState } from "react";
import crossBtn from "../../assets/close.png";
import React from "react";

function ItemContainer() {
  const [item, setItem] = useState([]);
  const [task, setTask] = useState("");

  function itemAdd() {
    if (task == "") return;
    setItem([...item, task]);
    setTask("");
  }

  function deleteItem(evt) {
    console.log(evt.target.parentElement.remove());
  }
  return (
    <>
      <div
        id="item-container"
        className="min-h-screen bg-white px-6 md:px-12 py-12"
      >
        <div className="max-w-2xl mx-auto mb-8">
          <h1 className="text-4xl font-light text-gray-900 tracking-wide mb-8">
            Today's Tasks
          </h1>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Add a task..."
              className="flex-1 px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all"
              id="inputBox"
              onChange={(e) => setTask(e.target.value)}
              value={task}
            />
            <button
              className="bg-gray-900 text-white px-6 py-3 rounded-md font-medium text-sm hover:bg-gray-800 transition-colors duration-200 whitespace-nowrap"
              onClick={itemAdd}
            >
              Add
            </button>
          </div>
        </div>
        <div id="item-list" className="max-w-2xl mx-auto">
          {item.map((items, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-4 px-2 border-b bg-gray-200 rounded-[10px] border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <span className="text-gray-900 font-normal">{items}</span>
              <img
                src={crossBtn}
                className="w-5 h-5 cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
                onClick={deleteItem}
                alt="delete"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ItemContainer;
