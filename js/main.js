"use strict";
class ClickHandler {
    constructor() {
        this.windowClick = () => {
            document.addEventListener('click', (e) => {
                e.target;
            });
        };
    }
}
class FormForEditing {
    constructor(text) {
        this.form = () => {
            const form = document.createElement('form');
            form.classList.add('item__input-block');
            form.innerHTML = `
      <input type="text" class="item__input" value="${this.value}">
      <button type="submit" class="item__btn-add-note">Ok</button>
    `;
            const input = form.querySelector('input');
            document.addEventListener('click', () => {
                alert('Finish editing element');
                input === null || input === void 0 ? void 0 : input.focus();
            });
            form === null || form === void 0 ? void 0 : form.addEventListener('click', (e) => {
                e.stopPropagation();
            });
            //  continue
            form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.taskText = input.value;
                this.task = this.renderElement();
                taskParent === null || taskParent === void 0 ? void 0 : taskParent.removeChild(form);
                taskParent === null || taskParent === void 0 ? void 0 : taskParent.append(this.task);
            });
            return form;
        };
        this.formHTML = this.form();
        this.value = text;
    }
}
class TaskItem {
    constructor(text, id) {
        this.renderElement = () => {
            const task = document.createElement('li');
            task.classList.add('item__task');
            task.classList.add('task');
            task.dataset.id = this.id.toString();
            task.innerHTML = `
      <p class="task__text">${this.taskText}</p>
      <div class="task__btn-group">
          <button class="task__btn_edit"></button>
          <button class="task__btn_delete"></button>
      </div>
    `;
            return task;
        };
        this.changeValue = (newValue) => {
            this.taskText = newValue;
        };
        this.changingTextField = () => {
            const taskParent = this.task.parentElement;
            taskParent === null || taskParent === void 0 ? void 0 : taskParent.removeChild(this.task);
            const form = document.createElement('form');
            taskParent === null || taskParent === void 0 ? void 0 : taskParent.append(form);
            form.classList.add('item__input-block');
            form.innerHTML = `
      <input type="text" class="item__input" value="${this.taskText}">
      <button type="submit" class="item__btn-add-note">Ok</button>
    `;
            const input = form.querySelector('input');
            document.addEventListener('click', () => {
                alert('Finish editing element');
                input === null || input === void 0 ? void 0 : input.focus();
            });
            form === null || form === void 0 ? void 0 : form.addEventListener('click', (e) => {
                e.stopPropagation();
            });
            form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.taskText = input.value;
                this.task = this.renderElement();
                taskParent === null || taskParent === void 0 ? void 0 : taskParent.removeChild(form);
                taskParent === null || taskParent === void 0 ? void 0 : taskParent.append(this.task);
            });
        };
        this.taskText = text;
        this.id = id;
        this.task = this.renderElement();
    }
}
const list = document.querySelector('.item__tasks-list');
const newT = new TaskItem('test', 1);
list === null || list === void 0 ? void 0 : list.append(newT.task);
// newT.changeValue('asdfasdf')
// console.log(newT.taskText);
newT.changingTextField();
