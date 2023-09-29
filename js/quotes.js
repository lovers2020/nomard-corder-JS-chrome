const quotes = [
  {
    quote: "Convictions are the more dangerous enemy of truth than lies.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "The real world is much smaller than the imaginary.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "Youth is easily deceived because it is quick to hope.",
    author: "Aristotle",
  },
  {
    quote: "Nothing great in the world has been accomplished without passion.",
    author: "Georg Wilhelm",
  },
  {
    quote:
      "I don't think of the past. The only thing that matters is the everlasting present.",
    author: "William Somerset Maugham",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
