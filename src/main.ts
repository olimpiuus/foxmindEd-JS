const removeElemFromArrayByIndex = (arr:any[], index:number)=>{
  arr.splice(index,1)
  return arr
}

const getIndexListById = (id:number)=>toDo.plans.findIndex(element => element.id === id)


class ClickHandler {
  constructor(){
    this.submitNewTaskList()
    this.windowClick()
  }
  windowClick = ()=>{
    document.addEventListener('click',(e)=>{
      const target = e.target!
      if (!(target instanceof HTMLElement)) {return}
      const classesOfTarget = target.classList
      
      // Edit Task and Delete Task
      if (classesOfTarget.contains('task__btn_edit')||classesOfTarget.contains('task__btn_delete')) {
        const id = target.parentElement?.parentElement?.dataset.id!
        const [listNumber, taskNumber] = id.split('_')
        const listIndex = toDo.getIndexListById(parseInt(listNumber))
        const list = toDo.plans[listIndex]
        const taskIndex = list.getIndexTaskByID(id)
        const task = list.tasks[taskIndex]
        
        if (classesOfTarget.contains('task__btn_edit')) {
          task.changingTextField()
        } else {
          if (confirm(`Delete task?`)) {
            task.delete()
            removeElemFromArrayByIndex(list.tasks, taskIndex)
          } else {return}
        }
      }

      // clear List
      if (classesOfTarget.contains('item__clear-list')) {
        const id = parseInt(target.parentElement?.dataset.id!)
        const listIndex = toDo.getIndexListById(id)
        toDo.plans[listIndex].clearList()
      }

      // delete List 
      if (classesOfTarget.contains('item__delete-list')) {
        const id = parseInt(target.parentElement?.dataset.id!)
        const listIndex = toDo.getIndexListById(id)

        if (confirm(`Delete list with title:"${toDo.plans[listIndex].title}"`)) {
          toDo.plans[listIndex].delete()
          removeElemFromArrayByIndex(toDo.plans,listIndex)
        } else {return}
        
      }
    })
  }
  submitNewTaskList = ()=>{
    const form = document.querySelector('#form-add-new')
    form?.addEventListener('submit', (e:Event)=>{
      e.preventDefault()
      const input = form.querySelector('input')!
      let value = input.value
      if (value==='') {if (confirm('Create task with title : "TITLE"')) {value='title'}else {return }}
      toDo.addTask(value)
      input.value = ''
    })
  }
}

class FormForEditing {
  value:string
  private _type: 'edit'|'add'
  htmlElement: HTMLFormElement
  input:HTMLInputElement
  private _parentBlock:HTMLElement
  private _alertsFN:any
  

  constructor(parentBlock:HTMLElement, text:string='',  type:'edit'|'add'='add'){
    this._type = type
    this.value = text
    this._parentBlock = parentBlock
    this.htmlElement = this._htmlElem()
    this.input = this.htmlElement.querySelector('input')!
    this._alertsFN = {
      stopPropagation : function(e:Event) {e.stopPropagation()} ,
      focusInputWithAlert: ()=> {
            alert('Finish editing element')
            this.input.focus()
          }
    }
    if (this._type==='edit') {this._addAlerts()}
  }

  private _htmlElem = () => { 
    const form = document.createElement('form')
    form.classList.add('item__input-block')
    
    form.innerHTML= this._type==='edit' ? `
    <input type="text" class="item__input" value="${this.value}">
    <button type="submit" class="item__btn-add-note">Ok</button>
    ` : `
    <input type="text" class="item__input" placeholder="e.g. eggs">
    <button type="submit" class="item__btn-add-note">Add</button>
    `
    this._parentBlock.append(form)
    return form
  }

  private _addAlerts = ()=>{
    document.addEventListener('click', this._alertsFN.focusInputWithAlert)
    this.htmlElement.addEventListener('click', this._alertsFN.stopPropagation)
  } 

  getValue = ()=>{
    this.value = this.input.value
    return this.value
  }

  removeFromDOM = ()=> {
    document.removeEventListener('click', this._alertsFN.focusInputWithAlert)
    this.htmlElement.removeEventListener('click', this._alertsFN.stopPropagation)
    this._parentBlock.removeChild(this.htmlElement)
  }
}

class TaskItem {
  taskText:string
  taskHtml:Element

  constructor(text:string, public id:string){
    this.taskText = text
    this.taskHtml = this._renderElement()
  }
  private _renderElement = ()=>{
    const task= document.createElement('li')
    task.classList.add('item__task')
    task.classList.add('task')
    task.dataset.id = this.id
    task.innerHTML=`
      <p class="task__text">${this.taskText}</p>
      <div class="task__btn-group">
          <button class="task__btn_edit"></button>
          <button class="task__btn_delete"></button>
      </div>
    `
    return task
  }

  public delete = ()=>{
    const taskParent = this.taskHtml.parentElement!
    taskParent.removeChild(this.taskHtml)
  }

  changingTextField = ()=>{
    const taskParent = this.taskHtml.parentElement!
    taskParent.removeChild(this.taskHtml)
    const editForm = new FormForEditing(taskParent, this.taskText, 'edit')
    editForm.input.focus()
    editForm.htmlElement.addEventListener('submit', (e:Event)=>{
      e.preventDefault()
      const newValue = editForm.getValue()
      this.taskText = newValue
      this.taskHtml = this._renderElement()
      editForm.removeFromDOM()
      taskParent.append(this.taskHtml)
      
      // delete if empty
      if (newValue==='') {
        this.taskHtml.querySelector('.task__btn_delete')!.click()
      }
     })
  }
}

class TaskGroup {
  tasks:TaskItem[]
  html:HTMLElement
  private _inputForNewTask:FormForEditing
  taskList:HTMLUListElement
  private _parent:Element


  constructor(parent:Element, public title:string, public id:number){
    this._parent = parent
    this.html = this._html()
    this.tasks = []
    this._inputForNewTask = new FormForEditing (this.html.querySelector('.item__input-block')!,'','add')
    this.taskList = this.html.querySelector('.item__tasks-list')!
    this._parent.prepend(this.html)
    this._addListener()
  }

  private _html = ()=>{
    const group = document.createElement('li')
    
    group.dataset.id = this.id.toString()
    group.innerHTML=`
      <h2 class="item__title">${this.title}</h2>
      <div class="item__input-block"></div>
      <ul class="item__tasks-list"></ul>
      <button class="item__clear-list">Clear items</button>
      <button class="item__delete-list">x</button>
    `
    group.classList.add('todo__item')
    group.classList.add('item')
    return group
  }

  private _addListener = ()=>{
    this._inputForNewTask.htmlElement.addEventListener('submit', (e:Event)=>{
      e.preventDefault()
      if (this._inputForNewTask.input.value==='') { return alert('Cant add empty task') }
      const newTask = new TaskItem(this._inputForNewTask.input.value,this.id.toString()+'_'+this.tasks.length)
      this._inputForNewTask.input.value = ''
      this.tasks.push(newTask)
      this.taskList.append(newTask.taskHtml)
    })
  }

  public clearList() {
    this.tasks = []
    this.taskList.innerHTML = ''
  }
  public delete() {
    this._parent.removeChild(this.html)
  }
  public getIndexTaskByID = (id:string) => this.tasks.findIndex(elem => elem.id===id)

}

class ToDo {
  listHtml:HTMLElement
  plans:TaskGroup[]
  parent:Element
  constructor(container:Element) {
    this.plans = []
    this.parent = container
    this.listHtml = this._createHtml()

  }
  private _createHtml = ()=>{
    const ul = document.createElement('ul')
    ul.classList.add('todo__list')
    ul.innerHTML=`
      <li class="todo__item_add-new ">
        <h2 class="item__title">Add new tasks list</h2>
            <form class="item__input-block" id="form-add-new"">
              <input type="text" class="item__input" placeholder="Title">
              <button type="submit" class="item__btn-add-note">Add</button>
            </form>
      </li>`
    this.parent.append(ul)
    return ul
  }
  public addTask = (title:string)=>{
    this.plans.push(new TaskGroup(this.listHtml, title,this.plans.length))
  }

  public getIndexListById = (id:number)=>this.plans.findIndex(element => element.id === id)
}
const container = document.querySelector('.todo__container')!
const toDo = new ToDo(container)
const clickHandler = new ClickHandler

toDo.addTask('title')

console.log(toDo);



