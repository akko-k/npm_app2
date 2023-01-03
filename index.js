import fetch from "node-fetch";

fetch("https://www.oshiri-tantei.com/character/")
  .then((res) => res.text())
  .then((body) => console.log(body));
