const quotes = [
  {
    quote:
      "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    author: "John 3:16",
  },
  {
    quote:
      "Trust in the LORD with all your heart, and do not lean on your own understanding.",
    author: "Proverbs 3:5",
  },
  {
    quote: "The Lord is my shepherd; I shall not want.",
    author: "Psalm 23:1",
  },
  {
    quote: "I can do all things through him who strengthens me.",
    author: "Philippians 4:13 ",
  },
  {
    quote: "Be still, and know that I am God.",
    author: "Psalm 46:10",
  },
  {
    quote:
      "And we know that for those who love God all things work together for good, for those who are called according to his purpose.",
    author: "Romans 8:28",
  },
  {
    quote:
      "But seek first the kingdom of God and his righteousness, and all these things will be added to you.",
    author: "Matthew 6:33",
  },
  {
    quote: "In the beginning, God created the heavens and the earth.",
    author: "Genesis 1:1 ",
  },
  {
    quote:
      "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God.",
    author: "Ephesians 2:8 ",
  },
  {
    quote:
      "And Jesus said to him, 'I am the way, and the truth, and the life. No one comes to the Father except through me.",
    author: "John 14:6",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
