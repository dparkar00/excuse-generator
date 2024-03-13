/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  // Define what a sentence looks like
  let sentence =
    who[rand(who.length)] + // each array's index will be a random number from
    " " +
    action[rand(action.length)] +
    " " +
    what[rand(what.length)] +
    " " +
    when[rand(when.length)];
  // Query the span by ID
  let excuseSpan = document.querySelector("#excuse");

  // Set the span's innerHTML to the sentance
  excuseSpan.innerHTML = sentence;
};

function rand(length) {
  // Given the length, randomize a number between 0 and the length of the array.
  let number = Math.floor(Math.random() * length);
  return number;
}
