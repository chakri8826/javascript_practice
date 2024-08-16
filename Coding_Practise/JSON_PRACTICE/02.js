let greeting =
  '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';
let parsedGreeting = JSON.parse(greeting);

let fromEl = document.getElementById("from");
let toEl = document.getElementById("to");
fromEl.textContent="From: "+parsedGreeting.from;
toEl.textContent="To: "+parsedGreeting.to;

let greetTextEl = document.getElementById("greetText");
greetTextEl.textContent=parsedGreeting.greetText;