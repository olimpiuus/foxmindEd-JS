class TaskItem {
  text:string
  id:number
  task:HTMLElement

  constructor(text:string, id:number){
    this.text = text
    this.id = id
    this.task = this.createElement()
  }
  createElement = ()=>{
    const task= document.createElement('li')
    task.classList.add('item__task')
    task.classList.add('task')
    task.dataset.id = this.id.toString()
    task.innerHTML=`
      <p class="task__text">${this.text}</p>
      <div class="task__btn-group">
          <button class="task__btn_edit"></button>
          <button class="task__btn_delete"></button>
      </div>
    `
    return task
  }

  changeValue = (newValue:string)=>{
    this.text = newValue
  }

  changingTextField = ()=>{
    this.task.style.display="none"
    const taskParent = this.task.parentElement

    const form = document.createElement('form')
    taskParent?.append(form)

    form.classList.add('item__input-block')

    form.innerHTML=`
      <input type="text" class="item__input" value="${this.text}">
      <button type="submit" class="item__btn-add-note">Ok</button>
    `

    const input = form.querySelector('input')

    const inputEvent =(inp:HTMLElement):any=>{
      
    }

    input?.addEventListener('focusout', ()=>{
      alert('Finish editing element')
      input.focus()
    })

    form.addEventListener('submit', (e)=>{
      // input?.removeEventListener('focusout', inputEvent(input) )
      e.preventDefault()
      console.log('submit');
      
    })

    

    
    

    
    
  }
}
const list = document.querySelector('.item__tasks-list')
const newT = new TaskItem('test',1)
list?.append(newT.task)
newT.changingTextField()

