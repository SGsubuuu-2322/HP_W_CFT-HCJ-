import { useEffect, useRef, useState } from "react";

function App() {
  const [inputValue, setinputValue] = useState("");
  const [todoItems, settodoItems] = useState([]);

  const [editTodo, seteditTodo] = useState(false);
  const [editItem, seteditItem] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (editTodo && inputRef.current) {
      inputRef.current.focus();
    }
    // console.log(todoItems);
  }, [editTodo, todoItems]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      if (editTodo) {
        const index = todoItems.findIndex((item) => item.item === editItem);
        if (index !== -1) {
          const newTodoItems = [...todoItems];
          newTodoItems[index] = { item: inputValue, marked: false };
          settodoItems(newTodoItems);
          seteditTodo(false);
        }
      } else {
        if (todoItems.find((item) => item.item === inputValue) === undefined) {
          settodoItems([...todoItems, { item: inputValue, marked: false }]);
        } else {
          alert("TODO-Item already exists. Write a new one...");
        }
      }
      setinputValue("");
    }

    // console.log(todoItems);
  };

  const handleDeletion = (e) => {
    const list = e.target.parentNode.parentNode;
    const listItem = list.firstChild.textContent;
    settodoItems(todoItems.filter((item) => item.item != listItem));
    // listItem.remove();
  };

  const handleUpdation = (e) => {
    const list = e.target.parentNode.parentNode;
    // console.log(list);
    setinputValue(list.firstChild.textContent);
    seteditTodo(true);
    seteditItem(list.firstChild.textContent);
  };

  const handleMarked = (e) => {
    const itemText = e.target.parentNode.parentNode.firstChild.textContent;
    const newTodoItems = [...todoItems];
    const index = newTodoItems.findIndex((item) => item.item === itemText);
    newTodoItems[index] = {
      item: itemText,
      marked: !newTodoItems[index].marked,
    };
    settodoItems(newTodoItems);
  };

  const handleClick = (e) => {
    if (e.target.tagName === "BUTTON") {
      if (e.target.textContent === "❌") {
        handleDeletion(e);
      } else if (e.target.textContent === "✏️") {
        handleUpdation(e);
      } else if (e.target.textContent === "✔️") {
        handleMarked(e);
      }
    }
  };

  return (
    <>
      <div className="bg-primary w-full h-screen flex flex-col items-center p-16 gap-5">
        <h1 className="font-bold text-2xl italic text-secondary">TODO-APP</h1>

        <div className="flex flex-col gap-4 p-6 border-dark border-4 rounded-xl max-h-72 overflow-hidden">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              ref={inputRef}
              onChange={(e) => setinputValue(e.target.value)}
              className="focus:bg-[#e1dede] px-2 py-1"
            />
            <button
              type="submit"
              className="bg-secondarylite rounded-lg px-2 py-1 text-[white] active:text-primary active:scale-105 duration-300"
            >
              {editTodo ? "Edit" : "Submit"}
            </button>
          </form>

          <ul
            onClick={handleClick}
            className="w-full flex flex-col items-center gap-2 overflow-y-auto"
          >
            {todoItems.map((item, i) => (
              <li
                className={`px-3 py-1 ${
                  item.marked ? "bg-[#abff03]" : "bg-secondary"
                } w-full flex justify-between rounded-sm hover:bg-secondarylite hover:text-[white]`}
                key={i}
              >
                <span className={`${item.marked ? "line-through" : ""}`}>
                  {item.item}
                </span>
                <div className="flex gap-2">
                  <button className="bg-zinc-300 cursor-pointer active:scale-110 active:duration-300">
                    ✏️
                  </button>
                  <button className="bg-zinc-300 cursor-pointer active:scale-110 active:duration-300">
                    ✔️
                  </button>
                  <button className="bg-zinc-300 cursor-pointer active:scale-110 active:duration-300">
                    ❌
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
