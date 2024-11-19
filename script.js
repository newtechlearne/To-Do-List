const textArea = document.querySelector("#task-input");
const button = document.querySelector("#add-task-button");
const todoList = document.querySelector("#task-list");

button.addEventListener("click", addToDoListItem);

function addToDoListItem() {
  // Check if the input is empty
  if (textArea.value === '') return;

  // Generate random RGB color
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

  // Create the task container
  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("todo-item");
  toDoDiv.style.backgroundColor = randomColor;  // Apply random background color

  // Create the task text
  const item = document.createElement("p");
  item.textContent = textArea.value;

  // Create the delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deleteButton.classList.add("trash-button");

  // Append the task and button to the task container
  toDoDiv.appendChild(item);
  toDoDiv.appendChild(deleteButton);

  // Add the task container to the task list
  todoList.appendChild(toDoDiv);

  // Clear the input field
  textArea.value = '';

  // Add event listener for deleting the task
  deleteButton.addEventListener("click", function() {
    toDoDiv.remove();
  });
}
