function readingList(books) {
  // Write your code here...
  let content = document.getElementById("content");
  let unorderedList = document.createElement("ul");
  content.appendChild(unorderedList);

  unorderedList.style.width = "calc( 100% - 41px)";
  unorderedList.style.listStyle = "none";
  unorderedList.style.display = "flex";
  unorderedList.style.flexWrap = "wrap";

  books.forEach((element) => {
    let listEl = document.createElement("li");
    let paragraphEl = document.createElement("p");
    let imageEl = document.createElement("img");
    imageEl.src = element.imageUrl;

    unorderedList.appendChild(listEl);
    listEl.appendChild(paragraphEl);
    listEl.appendChild(imageEl);
    paragraphEl.innerHTML = `${element.title} - ${element.author}`;

    imageEl.style.width = "182px";
    listEl.style.margin = "15px";
    listEl.style.padding = "10px";
    listEl.style.minWidth = "350px";

    if (element.alreadyRead) {
      return (listEl.style.backgroundColor = "green");
    } else {
      return (listEl.style.backgroundColor = "red");
    }
  });
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL.jpg",
  },
];

readingList(books);
