"use strict";
class TaskItem {
    constructor(text, id) {
        this.createElement = () => {
            const task = document.createElement('li');
            task.classList.add('item__task');
            task.classList.add('task');
            task.dataset.id = this.id.toString();
            task.innerHTML = `
      <p class="task__text">${this.text}</p>
      <div class="task__btn-group">
          <button class="task__btn_edit"></button>
          <button class="task__btn_delete"></button>
      </div>
    `;
            return task;
        };
        this.changeValue = (newValue) => {
            this.text = newValue;
        };
        this.changingTextField = () => {
            this.task.style.display = "none";
            const taskParent = this.task.parentElement;
            const form = document.createElement('form');
            taskParent === null || taskParent === void 0 ? void 0 : taskParent.append(form);
            form.classList.add('item__input-block');
            form.innerHTML = `
      <input type="text" class="item__input" value="${this.text}">
      <button type="submit" class="item__btn-add-note">Ok</button>
    `;
            const input = form.querySelector('input');
            const inputEvent = (inp) => {
            };
            input === null || input === void 0 ? void 0 : input.addEventListener('focusout', () => {
                alert('Finish editing element');
                input.focus();
            });
            form.addEventListener('submit', (e) => {
                // input?.removeEventListener('focusout', inputEvent(input) )
                e.preventDefault();
                console.log('submit');
            });
        };
        this.text = text;
        this.id = id;
        this.task = this.createElement();
    }
}
const list = document.querySelector('.item__tasks-list');
const newT = new TaskItem('test', 1);
list === null || list === void 0 ? void 0 : list.append(newT.task);
newT.changingTextField();
