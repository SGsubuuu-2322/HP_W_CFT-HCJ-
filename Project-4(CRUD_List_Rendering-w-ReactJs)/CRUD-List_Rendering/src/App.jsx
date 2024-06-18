import { useEffect, useState } from "react";

function App() {
  const [formText, setformText] = useState({
    text: "",
  });

  const [listItems, setlistItems] = useState(
    JSON.parse(localStorage.getItem("listItems")) || []
  );

  useEffect(() => {
    console.log(listItems);
    localStorage.setItem("listItems", JSON.stringify(listItems));
  }, [listItems]);

  const inputHandler = (e) => {
    setformText({
      ...formText,
      [e.target.name]: e.target.value,
    });
    // console.log(e.target);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setlistItems([...listItems, formText.text]);
    // console.log(listItems);
  };

  return (
    <>
      <div className="h-[100vh] w-full bg-red-400 flex items-center justify-center">
        <div className="w-1/3 h-2/3 bg-white p-5 shadow-xl shadow-red-600 flex flex-col gap-2">
          <form className="flex justify-between" onSubmit={submitHandler}>
            <input
              type="text"
              name="text"
              value={formText.text}
              onChange={inputHandler}
              className="border-2 border-black w-full px-3 focus:rounded-lg duration-200"
              placeholder="Enter text for list items..."
            />
            <button
              type="submit"
              className="px-3 py-2 bg-red-500 rounded-lg text-white active:scale-110 duration-300 ml-3"
            >
              Submit
            </button>
          </form>
          <div className="w-full h-full text-center flex flex-col gap-1  bg-slate-200">
            <h1 className="font-bold text-xl font-serif">List-Items</h1>
            <ul className="flex flex-col gap-2">
              {listItems?.map((item, i) => (
                <li
                  key={i}
                  className="w-full py-3 bg-white shadow-xl shadow-black"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
