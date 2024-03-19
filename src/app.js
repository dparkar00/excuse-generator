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

  
  let sentence =
    who[rand(who.length)] + 
    " " +
    action[rand(action.length)] +
    " " +
    what[rand(what.length)] +
    " " +
    when[rand(when.length)];
 
  let excuseSpan = document.querySelector("#excuse");


  excuseSpan.innerHTML = sentence;
};

function rand(length) {
  
  let number = Math.floor(Math.random() * length);
  return number;
}
