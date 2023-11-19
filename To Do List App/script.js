
const toDoList = document.getElementById("todoList");
const newTodoinput = document.getElementById("newtodoinput");
const addTodoBtn = document.getElementById("addTodoBtn");

addTodoBtn.addEventListener("click", () => {
  const newTodoText = newTodoinput.value;

  if (newTodoText !== "") {
    const newtodoitem = document.createElement("li");

    const todoTextSpan = document.createElement("span");
    todoTextSpan.textContent = newTodoText;
    newtodoitem.appendChild(todoTextSpan);

    const deletetodoBtn = createButton("X", "delete-todo-btn", () => {
      newtodoitem.remove();
    });

    const editTodoBtn = createButton("Edit", "edit-todo-btn", () => {
      const existingText = todoTextSpan.textContent;
      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = existingText;

      const saveEditBtn = createButton("Save", "save-edit-btn", () => {
        todoTextSpan.textContent = editInput.value;
        newtodoitem.removeChild(editInput);
        newtodoitem.removeChild(saveEditBtn);
        newtodoitem.appendChild(deletetodoBtn);
        newtodoitem.appendChild(editTodoBtn);
      });

      newtodoitem.innerHTML = ""; // Clear the contents
      newtodoitem.appendChild(todoTextSpan);
      newtodoitem.appendChild(editInput);
      newtodoitem.appendChild(saveEditBtn);
      newtodoitem.removeChild(deletetodoBtn);
    });

    newtodoitem.appendChild(deletetodoBtn);
    newtodoitem.appendChild(editTodoBtn);
    toDoList.appendChild(newtodoitem);
    newTodoinput.value = "";
  }
});

function createButton(text, className, clickHandler) {
  const button = document.createElement("button");
  button.innerText = text;
  button.classList.add(className);
  button.addEventListener("click", clickHandler);
  return button;
}
