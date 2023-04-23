import "./style.css";
import appendQuote from "./scr/appendQuote";
import fetchQuotes from "./scr/fetchQuote";

const refreshBtn = document.getElementById("refresh-btn");
refreshBtn.addEventListener("click", () => {
  fetchQuotes().then((quotes) => {
    appendQuote(quotes[0]);
  });
});

fetchQuotes().then((quote) => {
  appendQuote(quote[0]);
});
