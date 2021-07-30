function populateTodoList(todos) {
  let todoListEls = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.forEach((todo) => {
    let listEl = todoListEls.appendChild(document.createElement("li"));
    listEl.classList =
      "list-group-item d-flex justify-content-between align-items-center";
    listEl.innerText = `${todo.task}`;

    let spanEl = listEl.appendChild(document.createElement("span"));
    let iEl1 = spanEl.appendChild(document.createElement("i"));
    let iEl2 = spanEl.appendChild(document.createElement("i"));

    spanEl.classList = "badge bg-primary rounded-pill";

    iEl1.classList = "fa fa-check";
    iEl2.classList = "fa fa-trash";

    iEl1.setAttribute("aria-hidden", "true");
    iEl2.setAttribute("aria-hidden", "true");

    iEl1.addEventListener("click", () => {
      listEl.classList.toggle("completed");
    });

    iEl2.addEventListener("click", () => {
      listEl.remove();
      alert("You have deleted an element from the Todolist.");
    });
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
