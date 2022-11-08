const inputNme = document.querySelector('[name="Last-name"]')
const inputEmail = document.querySelector('[type="email"]')

class Validator {
    isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    isDate = (value) => !isNaN(Date.parse(value))
    IsRequired = (htmlElem) => htmlElem.value
}

class StateOfValidation extends Validator {
    
    constructor(element, state = false) {
        super()
        this.element = element
        this.state = state
    }

    #changeStateOfElement = (newState)=>this.state = newState
    #addClassFailOrSucsess = () => this.state ? this.#addSuccessStatus() : this.#addFailedStatus()
    #addSuccessStatus = () => this.element.classList.add('success')
    #addFailedStatus = () => this.element.classList.add('failed')

    addEmailValidation = ()=>{
        this.element.addEventListener('keydown',()=> {
            this.#changeStateOfElement(this.isEmail(this.element.value))
            this.#addClassFailOrSucsess()
        })
    }


    
}

const validator = new Validator
const validationEmail = new StateOfValidation(inputEmail)
validationEmail.addEmailValidation()
// inputEmail.addEventListener('click', console.log('aa'))