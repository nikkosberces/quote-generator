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
  content.classList.add("content");
  content.textContent = `"${quote.content}"`;

  main.append(author, content);

  app.append(title, main);
}
