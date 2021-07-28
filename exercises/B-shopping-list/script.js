function shoppingList(arrayOfItems) {
  // Write your code here...
  let content = document.querySelector("#content");
  let unorderedListEl = document.createElement("ul");

  for (let item of arrayOfItems) {
    let shoppingEl = document.createElement("li");
    shoppingEl.innerText = item;
    unorderedListEl.appendChild(shoppingEl);
  }
  content.append(unorderedListEl);
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
