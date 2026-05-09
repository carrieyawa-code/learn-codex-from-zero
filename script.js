const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo(input.value);
  input.value = "";
});

function addTodo(text) {
  if (text === "") {
    return;
  }

  const item = document.createElement("li");
  item.className = "todo-item";

  const label = document.createElement("span");
  label.textContent = text;

  const doneButton = document.createElement("button");
  doneButton.textContent = "完成";
  doneButton.addEventListener("click", () => {
    item.classList.toggle("done");
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "删除";
  deleteButton.addEventListener("click", () => {
    item.remove();
  });

  item.append(label, doneButton, deleteButton);
  list.append(item);
}
