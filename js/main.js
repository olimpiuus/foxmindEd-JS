"use strict";
class ClickHandler {
    constructor() {
        this.windowClick = () => {
            document.addEventListener('click', (e) => {
                var _a, _b;
                const target = e.target;
                if (!(target instanceof HTMLElement)) {
                    return;
                }
                if (target.classList.contains('task__btn_edit')) {
                    const id = parseInt((_b = (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.dataset.id);
                    group.tasks[id].changingTextField();
                }
            });
        };
    }
}
class FormForEditing {
    constructor(parentBlock, text = '', type = 'add') {
        this._htmlElem = () => {
            const form = document.createElement('form');
            form.classList.add('item__input-block');
            form.innerHTML = this.type === 'edit' ? `
    <input type="text" class="item__input" value="${this.value}">
    <button type="submit" class="item__btn-add-note">Ok</button>
    ` : `
    <input type="text" class="item__input" placeholder="e.g. eggs">
    <button type="submit" class="item__btn-add-note">Add</button>
    `;
            this.parentBlock.append(form);
            return form;
        };
        this._addAlerts = () => {
            document.addEventListener('click', this.alertsFN.focusInputWithAlert);
            this.htmlElement.addEventListener('click', this.alertsFN.stopPropagation);
        };
        this.getValue = () => {
            this.value = this.input.value;
            return this.value;
        };
        this.removeFromDOM = () => {
            document.removeEventListener('click', this.alertsFN.focusInputWithAlert);
            this.htmlElement.removeEventListener('click', this.alertsFN.stopPropagation);
            this.parentBlock.removeChild(this.htmlElement);
        };
        this.type = type;
        this.value = text;
        this.parentBlock = parentBlock;
        this.htmlElement = this._htmlElem();
        this.input = this.htmlElement.querySelector('input');
        this.alertsFN = {
            stopPropagation: function (e) { e.stopPropagation(); },
            focusInputWithAlert: () => {
                alert('Finish editing element');
                this.input.focus();
            }
        };
        if (this.type === 'edit') {
            this._addAlerts();
        }
    }
}
class TaskItem {
    constructor(text, id) {
        this._renderElement = () => {
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
        this.changingTextField = () => {
            const taskParent = this.task.parentElement;
            taskParent.removeChild(this.task);
            const editForm = new FormForEditing(taskParent, this.taskText, 'edit');
            editForm.htmlElement.addEventListener('submit', (e) => {
                e.preventDefault();
                this.taskText = editForm.getValue();
                editForm.removeFromDOM();
                this.task = this._renderElement();
                taskParent.append(this.task);
            });
        };
        this.taskText = text;
        this.id = id;
        this.task = this._renderElement();
    }
}
class TaskGroup {
    constructor() {
        this._html = () => {
            const group = document.createElement('li');
            group.innerHTML = `
      <h2 class="item__title">Title</h2>
      <div class="item__input-block"></div>
      <ul class="item__tasks-list"></ul>
      <button class="item__clear-list">Clear items</button>
    `;
            group.classList.add('todo__item');
            group.classList.add('item');
            return group;
        };
        this._addListener = () => {
            this.inputForNewTask.htmlElement.addEventListener('submit', (e) => {
                e.preventDefault();
                if (this.inputForNewTask.input.value === '') {
                    return alert('Cant add empty task');
                }
                const newTask = new TaskItem(this.inputForNewTask.input.value, this.tasks.length);
                this.inputForNewTask.input.value = '';
                this.tasks.push(newTask);
                this.taskList.append(newTask.task);
            });
        };
        this.html = this._html();
        this.tasks = [];
        this.inputForNewTask = new FormForEditing(this.html.querySelector('.item__input-block'), '', 'add');
        this.taskList = this.html.querySelector('.item__tasks-list');
        this._addListener();
    }
}
const list = document.querySelector('.todo__list');
// const newT = new TaskItem('test',1)
const clickHandler = new ClickHandler;
clickHandler.windowClick();
const group = new TaskGroup();
list === null || list === void 0 ? void 0 : list.insertAdjacentElement("afterbegin", group.html);
