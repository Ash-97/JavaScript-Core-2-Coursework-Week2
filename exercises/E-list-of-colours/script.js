function listOfColours(colours) {
  // Write your code here...
  let content = document.getElementById("content");
  let selectEl = document.createElement("select");
  let paragraphEl = document.createElement("p");

  content.appendChild(selectEl);
  content.appendChild(paragraphEl);

  colours.forEach((arrayOfColors) => {
    let optionEl = document.createElement("option");
    selectEl.appendChild(optionEl);
    optionEl.innerHTML = arrayOfColors;
    selectEl.className = "container";
  });

  document.querySelectorAll(".container").forEach((element) => {
    element.addEventListener("click", () => {
      paragraphEl.innerHTML = `You have selected: ${element.value}`;
      paragraphEl.style.color = `${element.value}`;
    });
  });
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
