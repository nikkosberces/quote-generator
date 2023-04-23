export default function appendQuote(quote) {
  const app = document.getElementById("app");
  app.innerHTML = "";

  const main = document.createElement("main");

  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "Quote Generator";

  const author = document.createElement("h2");
  author.classList.add("author");
  author.textContent = `${quote.author}`;

  const content = document.createElement("p");
  content.textContent = `"${quote.content}"`;

  const dateAdded = document.createElement("p");
  dateAdded.textContent = `${quote.dateAdded}`;

  main.append(title, author, content, dateAdded);
  app.appendChild(main);
}
