'use strict';

const btnEl = document.querySelectorAll('.btn');
const answerEl = document.querySelectorAll('.answer');

btnEl.forEach((el, i) => {
  el.addEventListener('click', function () {
    el.classList.toggle('bold');
    document.querySelector(`.ans${i}`).classList.toggle('hidden');
    document.querySelector(`.arrow-${i}`).classList.toggle('rotate');
  });
});
