
const form = document.querySelector('.form')

class validationFunc {
    constructor (name, func) {
        this.name = name
        this.check = func 
    }
}

class Validator {
    constructor ([...validationFunctions]) {
        validationFunctions.forEach((validationFunc)=> this[validationFunc.name] = validationFunc)
    }
}


class StateOfValidation  {
    
    constructor(element, state = false) {
        this.element = element
        this.state = state
        this.typeOfValidation = element.dataset.validationType
    }

    #changeStateOfElement = (newState)=>this.state = newState
    #addClassFailOrSucsess = () => this.state ? this.#addSuccessStatus() : this.#addFailedStatus()

    #addSuccessStatus = () => {
        this.element.classList.remove('failed')
        this.element.classList.add('success')
    }

    #addFailedStatus = () => {
        this.element.classList.remove('success')
        this.element.classList.add('failed')
    }
    addValidatorToElem= ()=>{
        const validation = this.typeOfValidation
        const validationFn = ()=> {
            this.#changeStateOfElement(validator[validation].check(this.element.value))
            this.#addClassFailOrSucsess()
        }

        this.element.addEventListener('keydown',validationFn)
        this.element.addEventListener('submit',validationFn)
    }
}

class formValidation  {
    constructor(form) {
        this.form = form

    }

    addValidationToForm = ()=>{
        const inputs = this.form.querySelectorAll('input')
        const inputObj = []
        inputs.forEach((input)=>{
            if (!input.dataset.validationType) {return}
            const validationElem = new StateOfValidation(input)
            validationElem.addValidatorToElem()
            inputObj.push(validationElem)
        })

        this.form.addEventListener('submit', (e)=>{
            e.preventDefault()
            // console.log(inputObj.);
            
        })
    }


    
}

const isEmail = new validationFunc ('isEmail', (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) )
const isDate = new validationFunc('isDate',(value) => !isNaN(Date.parse(value)) )
const isRequired = new validationFunc('isRequired', (value) => value)


const validator = new Validator([isEmail,isDate,isRequired])

const formValid = new formValidation(form)
formValid.addValidationToForm()