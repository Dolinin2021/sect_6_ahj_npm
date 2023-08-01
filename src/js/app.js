import dragNdrop from './dragNdrop';
import addTask from './addTask';
import changeTitle from './changeTitle';
import addBoard from './addBoard';

const button = document.querySelector('.button');
const arrAddBtn = document.querySelectorAll('.add__btn');

arrAddBtn.forEach((elem) => {
  elem.addEventListener('click', (e) => addTask(e));
});

button.addEventListener('click', addBoard);

changeTitle();

dragNdrop();
