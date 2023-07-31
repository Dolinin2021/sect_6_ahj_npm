import dragNdrop from './dragNdrop';

export default function addTask() {
  let value;

  function clear(textarea, form, btn) {
    textarea.value = '';
    value = '';
    form.style.display = 'none';
    btn.style.display = 'flex';
  }

  btn.addEventListener('click', (e) => {
    const target = e.target;
    const parent = target.closest('.boards__item');
    const addBtn = parent.querySelector('.add__item-btn');
    const textarea = parent.querySelector('.textarea');
    const form = parent.querySelector('.form');
    const btn = parent.querySelector('.add__btn');

    form.style.display = 'block';
    btn.style.display = 'none';
    addBtn.style.display = 'none';

    textarea.addEventListener('input', (e) => {
      value = e.target.value;
      if (value) {
        addBtn.style.display = 'block';
      } else {
        addBtn.style.display = 'none';
      }
    });
  });

  cancelBtn.addEventListener('click', (e) => {
    const target = e.target;
    const parent = target.closest('.boards__item');
    const textarea = parent.querySelector('.textarea');
    const form = parent.querySelector('.form');
    const btn = parent.querySelector('.add__btn');
    clear(textarea, form, btn);
  });

  addBtn.addEventListener('click', (e) => {
    const target = e.target;
    const parent = target.closest('.boards__item');
    const list = parent.querySelector('.list');
    const textarea = parent.querySelector('.textarea');
    const form = parent.querySelector('.form');
    const btn = parent.querySelector('.add__btn');

    const newItem = document.createElement('div');
    newItem.classList.add('list__item');
    newItem.draggable = true;
    newItem.textContent = value;
    list.append(newItem);

    form.style.display = 'none';
    btn.style.display = 'flex';
    clear(textarea, form, btn);

    dragNdrop();
  });
}
