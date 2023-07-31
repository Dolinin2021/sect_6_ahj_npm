import dragNdrop from './dragNdrop';
import addTask from './addTask';
import changeTitle from './changeTitle';
import addBoard from './addBoard';

const button = document.querySelector('.button');

addTask();

button.addEventListener('click', addBoard);

changeTitle();

dragNdrop();
