import { useEffect, useState } from "react";
import crossBtn from "../../assets/close.png";
import React from "react";

function ItemContainer() {
  const [item, setItem] = useState([]);
  const [task, setTask] = useState("");

  // useEffect(() => {
  //   localStorage.getItem(item);
  // }, []);

  function itemAdd() {
    if (task == "") return;
    setItem([...item, task]);
    setTask("");
    const impTask = JSON.stringify(item);
    // localStorage.setItem("Task", impTask);
  }

  function deleteItem(evt) {
    console.log(evt.target.parentElement.remove());
  }
  return (
    <>
      <div id="item-container" className="bg-gray-50 px-24 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-[#023047] tracking-tight mb-4">
            Task for Today
          </h1>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Add a new task..."
              className="flex-1 px-4 py-2 rounded-lg border-2 border-[#023047] bg-[#ffb703] text-[#023047] placeholder-[#023047]/50 font-medium focus:outline-none focus:ring-2 focus:ring-[#023047] transition-all duration-200"
              id="inputBox"
              onChange={(e) => setTask(e.target.value)}
            />
            <button
              className="bg-[#023047] text-[#ffb703] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#023047]/85 transition-colors duration-200 whitespace-nowrap"
              onClick={itemAdd}
            >
              Add Task
            </button>
          </div>
        </div>
        <div id="item-list">
          {item.map((items) => (
            <ul key={items.indexOf(items)}>
              <li className="flex justify-between items-center py-3 px-4 my-2 rounded-lg shadow-md bg-white">
                <span className="text-base font-medium">{items}</span>
                <img
                  src={crossBtn}
                  className="w-[2.25rem] h-[2.25rem] cursor-pointer"
                  onClick={deleteItem}
                />
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}

export default ItemContainer;
