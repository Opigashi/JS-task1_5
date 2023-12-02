'use strict';

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const FizzNum = document.getElementById("Fizz").value;
  const BuzzNum = document.getElementById("Buzz").value;

  if ((FizzNum % 1 === 0) && (BuzzNum % 1 === 0) && (FizzNum !== '') && (BuzzNum !== '')) {

    const ul = document.querySelector('ul');

    for (let int = 1; int <= 99; int++) {
      const li = document.createElement('li');

      if ((int % FizzNum === 0) && (int % BuzzNum === 0)) {
        li.textContent = 'FizzBuzz ' + int;
        ul.appendChild(li);
      } else if (int % FizzNum === 0) {
        li.textContent = 'Fizz ' + int;
        ul.appendChild(li);
      } else if (int % BuzzNum === 0) {
        li.textContent = 'Buzz ' + int;
        ul.appendChild(li);
      }
    }
  } else {
    console.log("整数を入力してください");
  }
});