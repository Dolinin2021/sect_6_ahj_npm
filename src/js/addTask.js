import dragNdrop from './dragNdrop';

export default function addTask(elem) {
  const addBtn = elem.target;
  const parent = addBtn.closest('.boards__item');
  const addItemBtn = parent.querySelector('.add__item-btn');
  const textarea = parent.querySelector('.textarea');
  const form = parent.querySelector('.form');
  const cancelBtn = parent.querySelector('.cancel__item-btn');
  let value;

  form.style.display = 'block';
  addBtn.style.display = 'none';
  addItemBtn.style.display = 'none';

  function textareaInput() {
    value = textarea.value;
    if (value) {
      addItemBtn.style.display = 'block';
    } else {
      addItemBtn.style.display = 'none';
    }
  }

  textarea.addEventListener('input', textareaInput);

  function clear() {
    textarea.value = '';
    value = '';
    form.style.display = 'none';
    addBtn.style.display = 'flex';
  }

  cancelBtn.addEventListener('click', clear);

  function addItemList() {
    const list = parent.querySelector('.list');
    const newItem = document.createElement('div');
    newItem.classList.add('list__item');
    newItem.draggable = true;
    newItem.textContent = value;
    list.append(newItem);

    form.style.display = 'none';
    addBtn.style.display = 'flex';

    clear();
    dragNdrop();

    addItemBtn.removeEventListener('click', addItemList);
  }

  addItemBtn.addEventListener('click', addItemList);
}
