import changeTitle from './changeTitle';
import dragNdrop from './dragNdrop';

export default function addBoard() {
  const boards = document.querySelector('.boards');
  const board = document.createElement('div');

  board.classList.add('boards__item');
  board.innerHTML = `
    <span contenteditable="true" class="title">Введите название</span>
    <div class="list">
        <div class="list__item" draggable="true">Стартовая карточка</div>
    </div>
    <div class="form">
        <textarea class="textarea" placeholder="Введите название для этой карточки"></textarea>
        <div class="buttons">
            <button class="add__item-btn">Добавить</button>
            <button class="cancel__item-btn">Отмена</button>
        </div>
    </div>
    <div class="add__btn"> <span> + </span> Добавить карточку </div>
    `;
  boards.append(board);
  changeTitle();
  dragNdrop();
}
