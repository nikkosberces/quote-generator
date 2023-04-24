import "./style.css";
import appendQuote from "./scr/appendQuote";
import fetchQuotes from "./scr/fetchQuote";

let intervalId = null;

const refreshBtn = document.getElementById("refresh-btn");
const pause = document.getElementById("hr-lines");

refreshBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (intervalId === null) {
    intervalId = setInterval(() => {
      fetchQuotes().then((quotes) => {
        appendQuote(quotes[0]);
      });
    }, 3000);
  }

  refreshBtn.classList.add("active");
});

pause.addEventListener("click", (event) => {
  event.preventDefault();
  clearInterval(intervalId);
  intervalId = null;

  refreshBtn.classList.remove("active");
});

fetchQuotes().then((quote) => {
  appendQuote(quote[0]);
});
