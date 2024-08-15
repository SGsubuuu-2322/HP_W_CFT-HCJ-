document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.querySelector(".todo-form");
  const todoInput = document.querySelector(".todo-input");
  const todoSubmit = document.querySelector(".todo-submit");
  const todoList = document.querySelector(".todo-list");

  let editTodo = false;
  let todoListItem = null;

  function handleSubmit(e) {
    e.preventDefault();
    const todoValue = todoInput.value.trim();
    if (todoValue) {
      if (editTodo) {
        todoListItem.firstChild.innerText = todoValue;
        todoListItem = null;
        editTodo = false;
      } else {
        todoListing(todoValue);
      }
      todoInput.value = "";
    } else {
      alert("Atleast enter a todo-item...");
    }
    // console.log(todoInput.value);
  }

  const editTodoItem = (todoItem) => {
    // console.log(todoItem);
    todoInput.value = todoItem.firstChild.textContent;
    todoInput.focus();
    todoSubmit.innerText = "Edit Item";
    editTodo = true;
    todoListItem = todoItem;
  };

  todoList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const todoItem = e.target.parentNode;
      if (e.target.innerText === "✏️") {
        // console.log(e.target.parentNode);
        editTodoItem(todoItem);
      } else if (e.target.innerText === "❌") {
        todoItem.remove();
      }
    }
  });

  const todoListing = (value) => {
    // console.log(value);
    const todoListItem = document.createElement("li");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    todoListItem.innerHTML = `<span>${value}</span>`;
    editButton.innerText = "✏️";
    deleteButton.innerText = "❌";

    todoListItem.appendChild(editButton);
    todoListItem.appendChild(deleteButton);
    todoList.appendChild(todoListItem);
  };

  todoForm.addEventListener("submit", handleSubmit);
});
