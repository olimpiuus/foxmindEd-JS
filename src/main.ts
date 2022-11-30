class ClickHandler {
  constructor(){
  }
  windowClick = ()=>{
    document.addEventListener('click',(e)=>{
      e.target
    })
  }

}

class FormForEditing {
  formHTML:HTMLElement
  value:string
  constructor(text:string){
    this.formHTML = this.form()
    this.value = text
  }

  form = ()=>{
    const form = document.createElement('form')
    form.classList.add('item__input-block')

    form.innerHTML=`
      <input type="text" class="item__input" value="${this.value}">
      <button type="submit" class="item__btn-add-note">Ok</button>
    `
    const input = form.querySelector('input')

    document.addEventListener('click', ()=>{
      alert('Finish editing element')
      input?.focus()
    })
    
    form?.addEventListener('click', (e)=>{
      e.stopPropagation()
    })
  //  continue
    form?.addEventListener('submit', (e)=>{
      e.preventDefault()
      this.taskText = input!.value
      this.task = this.renderElement()

      taskParent?.removeChild(form)
      
      taskParent?.append(this.task)
    })
    return form
  }

}

class TaskItem {
  taskText:string
  id:number
  task:HTMLElement

  constructor(text:string, id:number){
    this.taskText = text
    this.id = id
    this.task = this.renderElement()
  }
  renderElement = ()=>{
    const task= document.createElement('li')
    task.classList.add('item__task')
    task.classList.add('task')
    task.dataset.id = this.id.toString()
    task.innerHTML=`
      <p class="task__text">${this.taskText}</p>
      <div class="task__btn-group">
          <button class="task__btn_edit"></button>
          <button class="task__btn_delete"></button>
      </div>
    `
    return task
  }

  changeValue = (newValue:string)=>{
    this.taskText = newValue
  }

  changingTextField = ()=>{
    const taskParent = this.task.parentElement

    taskParent?.removeChild(this.task)

    const form = document.createElement('form')
    taskParent?.append(form)

    form.classList.add('item__input-block')

    form.innerHTML=`
      <input type="text" class="item__input" value="${this.taskText}">
      <button type="submit" class="item__btn-add-note">Ok</button>
    `
    const input = form.querySelector('input')

    document.addEventListener('click', ()=>{
      alert('Finish editing element')
      input?.focus()
    })
    
    form?.addEventListener('click', (e)=>{
      e.stopPropagation()
    })

    form?.addEventListener('submit', (e)=>{
      e.preventDefault()
      this.taskText = input!.value
      this.task = this.renderElement()

      taskParent?.removeChild(form)
      
      taskParent?.append(this.task)
    })


  }
}
const list = document.querySelector('.item__tasks-list')
const newT = new TaskItem('test',1)
list?.append(newT.task)
// newT.changeValue('asdfasdf')
// console.log(newT.taskText);

newT.changingTextField()


