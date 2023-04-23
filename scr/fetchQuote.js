export default async function fetchQuotes() {
  try {
    const response = await fetch("https://api.quotable.io/quotes/random");
    const quote = await response.json();

    return quote;
  } catch (error) {
    throw new Error(error);
  }
}
