let jumbotronEl = document.querySelector(".jumbotron");

let donateButtonEl = document.querySelector(".buttons .btn-primary");
let volunteerButtonEl = document.querySelector(".buttons .btn-secondary");

let blueButtonEl = document.getElementById("blueBtn");
blueButtonEl.addEventListener("click", () => {
  jumbotronEl.style.backgroundColor = `#588fbd`;
  donateButtonEl.style.backgroundColor = `#ffa500`;
  volunteerButtonEl.style.backgroundColor = `black`;
  volunteerButtonEl.style.color = "white";
});

let orangeButtonEl = document.getElementById("orangeBtn");
orangeButtonEl.addEventListener("click", () => {
  jumbotronEl.style.backgroundColor = `#f0ad4e`;
  donateButtonEl.style.backgroundColor = `#5751fd`;
  volunteerButtonEl.style.backgroundColor = `#31b0d5`;
  volunteerButtonEl.style.color = "white";
});

let greenButtonEl = document.getElementById("greenBtn");
greenButtonEl.addEventListener("click", () => {
  jumbotronEl.style.backgroundColor = `#87ca8a`;
  donateButtonEl.style.backgroundColor = `black`;
  volunteerButtonEl.style.backgroundColor = `#8c9c08`;
});

// Part 2

let emailInputEl = document.getElementById("exampleInputEmail1");
let nameInputEl = document.getElementById("example-text-input");
let describeYourselfEl = document.getElementById("exampleTextarea");

let submitButtonEl = document.querySelector("form button");
submitButtonEl.addEventListener("click", submitForm);

function submitForm(e) {
  e.preventDefault();
  if (
    emailInputEl.value.length !== 0 &&
    emailInputEl.value.includes("@") &&
    nameInputEl.value.length !== 0 &&
    describeYourselfEl.value.length !== 0
  ) {
    emailInputEl.value = "";
    emailInputEl.style.background = "white";
    nameInputEl.value = "";
    nameInputEl.style.background = "white";
    describeYourselfEl.value = "";
    describeYourselfEl.style.background = "white";
    window.alert("Thank you for filling out the form!");

    document.getElementsByTagName("form").reset();
  }
  if (
    emailInputEl.value.length === 0 &&
    emailInputEl.value.includes("@") === false
  ) {
    emailInputEl.style.backgroundColor = "red";
  }
  if (nameInputEl.value.length === 0) {
    nameInputEl.style.backgroundColor = "red";
  }
  if (describeYourselfEl.value.length === 0) {
    describeYourselfEl.style.backgroundColor = "red";
  }
}
