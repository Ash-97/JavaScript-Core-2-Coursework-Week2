function todoList(todos) {
  // Write your code here.
  let content = document.getElementById("content");
  let unorderedListEl = document.createElement("ul");
  content.appendChild(unorderedListEl);

  todos.forEach((element) => {
    let listEl = document.createElement("li");
    unorderedListEl.appendChild(listEl);
    listEl.className = "todoList";
    listEl.innerHTML = `${element.todo}`;
  });

  document.querySelectorAll(".todoList").forEach((item) => {
    item.addEventListener("click", () => {
      if (item.style.textDecoration === "none") {
        item.style.textDecoration = "line-through";
      } else {
        item.style.textDecoration = "none";
      }
    });
  });
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
