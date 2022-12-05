"use strict";
const removeElemFromArrayByIndex = (arr, index) => {
    arr.splice(index, 1);
    return arr;
};
const getIndexListById = (id) => toDo.plans.findIndex(element => element.id === id);
class ClickHandler {
    constructor() {
        this.windowClick = () => {
            document.addEventListener('click', (e) => {
                var _a, _b, _c, _d;
                const target = e.target;
                if (!(target instanceof HTMLElement)) {
                    return;
                }
                const classesOfTarget = target.classList;
                // Edit Task and Delete Task
                if (classesOfTarget.contains('task__btn_edit') || classesOfTarget.contains('task__btn_delete')) {
                    const id = (_b = (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.dataset.id;
                    const [listNumber, taskNumber] = id.split('_');
                    const listIndex = toDo.getIndexListById(parseInt(listNumber));
                    const list = toDo.plans[listIndex];
                    const taskIndex = list.getIndexTaskByID(id);
                    const task = list.tasks[taskIndex];
                    toDo.saveToCookie();
                    if (classesOfTarget.contains('task__btn_edit')) {
                        task.changingTextField();
                    }
                    else {
                        if (confirm(`Delete task?`)) {
                            task.delete();
                            removeElemFromArrayByIndex(list.tasks, taskIndex);
                            toDo.saveToCookie();
                        }
                        else {
                            return;
                        }
                    }
                }
                // clear List
                if (classesOfTarget.contains('item__clear-list')) {
                    const id = parseInt((_c = target.parentElement) === null || _c === void 0 ? void 0 : _c.dataset.id);
                    const listIndex = toDo.getIndexListById(id);
                    toDo.plans[listIndex].clearList();
                    toDo.saveToCookie();
                }
                // delete List 
                if (classesOfTarget.contains('item__delete-list')) {
                    const id = parseInt((_d = target.parentElement) === null || _d === void 0 ? void 0 : _d.dataset.id);
                    const listIndex = toDo.getIndexListById(id);
                    if (confirm(`Delete list with title:"${toDo.plans[listIndex].title}"`)) {
                        toDo.plans[listIndex].delete();
                        removeElemFromArrayByIndex(toDo.plans, listIndex);
                        toDo.saveToCookie();
                    }
                    else {
                        return;
                    }
                }
            });
        };
        this.submitNewTaskList = () => {
            const form = document.querySelector('#form-add-new');
            form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {
                e.preventDefault();
                const input = form.querySelector('input');
                let value = input.value;
                if (value === '') {
                    if (confirm('Create task with title : "TITLE"')) {
                        value = 'title';
                    }
                    else {
                        return;
                    }
                }
                toDo.addTask(value);
                input.value = '';
                toDo.saveToCookie();
            });
        };
        this.submitNewTaskList();
        this.windowClick();
    }
}
class FormForEditing {
    constructor(parentBlock, text = '', type = 'add') {
        this._htmlElem = () => {
            const form = document.createElement('form');
            form.classList.add('item__input-block');
            form.innerHTML = this._type === 'edit' ? `
    <input type="text" class="item__input" value="${this.value}">
    <button type="submit" class="item__btn-add-note">Ok</button>
    ` : `
    <input type="text" class="item__input" placeholder="e.g. eggs">
    <button type="submit" class="item__btn-add-note">Add</button>
    `;
            this._parentBlock.append(form);
            return form;
        };
        this._addAlerts = () => {
            document.addEventListener('click', this._alertsFN.focusInputWithAlert);
            this.htmlElement.addEventListener('click', this._alertsFN.stopPropagation);
        };
        this.getValue = () => {
            this.value = this.input.value;
            return this.value;
        };
        this.removeFromDOM = () => {
            document.removeEventListener('click', this._alertsFN.focusInputWithAlert);
            this.htmlElement.removeEventListener('click', this._alertsFN.stopPropagation);
            this._parentBlock.removeChild(this.htmlElement);
        };
        this._type = type;
        this.value = text;
        this._parentBlock = parentBlock;
        this.htmlElement = this._htmlElem();
        this.input = this.htmlElement.querySelector('input');
        this._alertsFN = {
            stopPropagation: function (e) { e.stopPropagation(); },
            focusInputWithAlert: () => {
                alert('Finish editing element');
                this.input.focus();
            }
        };
        if (this._type === 'edit') {
            this._addAlerts();
        }
    }
}
class TaskItem {
    constructor(text, id) {
        this.id = id;
        this._renderElement = () => {
            const task = document.createElement('li');
            task.classList.add('item__task');
            task.classList.add('task');
            task.dataset.id = this.id;
            task.innerHTML = `
      <p class="task__text">${this.taskText}</p>
      <div class="task__btn-group">
          <button class="task__btn_edit"></button>
          <button class="task__btn_delete"></button>
      </div>
    `;
            return task;
        };
        this.delete = () => {
            const taskParent = this.taskHtml.parentElement;
            taskParent.removeChild(this.taskHtml);
        };
        this.changingTextField = () => {
            const taskParent = this.taskHtml.parentElement;
            taskParent.removeChild(this.taskHtml);
            const editForm = new FormForEditing(taskParent, this.taskText, 'edit');
            editForm.input.focus();
            editForm.htmlElement.addEventListener('submit', (e) => {
                e.preventDefault();
                const newValue = editForm.getValue();
                this.taskText = newValue;
                this.taskHtml = this._renderElement();
                editForm.removeFromDOM();
                taskParent.append(this.taskHtml);
                // delete if empty
                if (newValue === '') {
                    this.taskHtml.querySelector('.task__btn_delete').click();
                }
            });
        };
        this.taskText = text;
        this.taskHtml = this._renderElement();
    }
}
class TaskGroup {
    constructor(parent, title, id) {
        this.title = title;
        this.id = id;
        this.addNewTask = (value, id) => {
            const newTask = new TaskItem(value, id);
            this.tasks.push(newTask);
            this.taskList.append(newTask.taskHtml);
        };
        this._html = () => {
            const group = document.createElement('li');
            group.dataset.id = this.id.toString();
            group.innerHTML = `
      <h2 class="item__title">${this.title}</h2>
      <div class="item__input-block"></div>
      <ul class="item__tasks-list"></ul>
      <button class="item__clear-list">Clear items</button>
      <button class="item__delete-list">x</button>
    `;
            group.classList.add('todo__item');
            group.classList.add('item');
            return group;
        };
        this._addListener = () => {
            this._inputForNewTask.htmlElement.addEventListener('submit', (e) => {
                e.preventDefault();
                if (this._inputForNewTask.input.value === '') {
                    return alert('Cant add empty task');
                }
                this.addNewTask(this._inputForNewTask.input.value, this.id.toString() + '_' + this.tasks.length);
                this._inputForNewTask.input.value = '';
                toDo.saveToCookie();
            });
        };
        this.getIndexTaskByID = (id) => this.tasks.findIndex(elem => elem.id === id);
        this._parent = parent;
        this.html = this._html();
        this.tasks = [];
        this._inputForNewTask = new FormForEditing(this.html.querySelector('.item__input-block'), '', 'add');
        this.taskList = this.html.querySelector('.item__tasks-list');
        this._parent.prepend(this.html);
        this._addListener();
    }
    clearList() {
        this.tasks = [];
        this.taskList.innerHTML = '';
        toDo.saveToCookie();
    }
    delete() {
        this._parent.removeChild(this.html);
        toDo.saveToCookie();
    }
}
class ToDo {
    constructor(container) {
        this._createHtml = () => {
            const ul = document.createElement('ul');
            ul.classList.add('todo__list');
            ul.innerHTML = `
      <li class="todo__item_add-new ">
        <h2 class="item__title">Add new tasks list</h2>
            <form class="item__input-block" id="form-add-new"">
              <input type="text" class="item__input" placeholder="Title">
              <button type="submit" class="item__btn-add-note">Add</button>
            </form>
      </li>`;
            this.parent.append(ul);
            return ul;
        };
        this.addTask = (title, id = this.plans.length) => {
            this.plans.push(new TaskGroup(this.listHtml, title, id));
        };
        this.getIndexListById = (id) => this.plans.findIndex(element => element.id === id);
        this.saveToCookie = (options = {}) => {
            document.cookie = "toDoList=; expires=-1";
            const toDoRedused = () => {
                const redused = [];
                this.plans.forEach(({ title, id, tasks }) => {
                    redused.push({ title, id, tasks });
                });
                return redused;
            };
            const value = JSON.stringify(toDoRedused());
            options = Object.assign({ path: '/', 'max-age': 86400 }, options);
            if (options.expires instanceof Date) {
                options.expires = options.expires.toUTCString();
            }
            let updatedCookie = encodeURIComponent('toDoList') + "=" + encodeURIComponent(value);
            for (let optionKey in options) {
                updatedCookie += "; " + optionKey;
                let optionValue = options[optionKey];
                if (optionValue !== true) {
                    updatedCookie += "=" + optionValue;
                }
            }
            document.cookie = updatedCookie;
        };
        this._getCookie = () => {
            let matches = document.cookie.match(new RegExp("(?:^|; )" + 'toDoList'.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        };
        this._getObjFromCookie = () => JSON.parse(this._getCookie());
        this.restoreToDo = () => {
            const toDoData = this._getObjFromCookie();
            toDoData.forEach((ele) => {
                this.addTask(ele.title, ele.id);
                ele.tasks.forEach((task) => {
                    this.plans[this.plans.length - 1].addNewTask(task.taskText, task.id);
                });
            });
        };
        this.plans = [];
        this.parent = container;
        this.listHtml = this._createHtml();
    }
}
const container = document.querySelector('.todo__container');
const toDo = new ToDo(container);
const clickHandler = new ClickHandler;
toDo.restoreToDo();
