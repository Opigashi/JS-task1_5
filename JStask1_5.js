'use strict';

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();

  const FizzNum = document.getElementById('Fizz').value;
  const BuzzNum = document.getElementById('Buzz').value;

  if ((FizzNum % 1 === 0) && (BuzzNum % 1 === 0) && (FizzNum !== '') && (BuzzNum !== '')) {

    const ul = document.querySelector('ul');

    const addList = (text) => {
      const li = document.createElement('li');
      li.textContent = text;
      ul.appendChild(li);
    }

    for (let int = 1; int <= 99; int++) {
      if ((int % FizzNum === 0) && (int % BuzzNum === 0)) {
        addList('FizzBuzz ' + int);
      } else if (int % FizzNum === 0) {
        addList('Fizz ' + int);
      } else if (int % BuzzNum === 0) {
        addList('Buzz ' + int);
      }
    }
  } else {
    console.log('整数を入力してください');
  }
});

