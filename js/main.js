
const form = document.querySelector('.form')

class validationFunc {
    constructor (name, func, warningText) {
        this.name = name
        this.check = func 
        this.text = warningText
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
        this.warningText = validator[this.typeOfValidation].text
    }

    #addInfoMessage = ()=>{
        const parentOfInput = this.element.parentElement
        if (parentOfInput.querySelector('.error')) {return}
        const message = document.createElement('div')
        message.textContent = this.warningText
        message.classList.add(`error`)
        parentOfInput.append(message)
    }

    #removeInfoMessage = ()=>{
        const parentOfInput = this.element.parentElement
        if (parentOfInput.querySelector('.error')) {parentOfInput.querySelector('.error').remove()}
    }
    
    #changeStateOfElement = (newState) => this.state = newState

    #addSuccessStatus = () => {
        this.element.classList.remove('failed')
        this.element.classList.add('success')
    }
    
    #addFailedStatus = () => {
        this.element.classList.remove('success')
        this.element.classList.add('failed')
    }
    
    checkFailOrSucsess = () => {
       if (this.state) {
        this.#addSuccessStatus()
        this.#removeInfoMessage()
        } else {
            this.#addFailedStatus()
            this.#addInfoMessage()
        }
    }

    addValidatorToElem= ()=>{
        const validation = this.typeOfValidation
        if (!validator[validation]) {return}
        const validationTypeFn = validator[validation]

        const validationElemFn = ()=> {

            if (validation === 'isSamePasswords') {
                const referencePass = document.querySelector('[data-validation-type="isPassword"]')
                this.#changeStateOfElement(validationTypeFn.check(this.element.value, referencePass.value))
            } else {
                this.#changeStateOfElement(validationTypeFn.check(this.element.value))
            }

            this.checkFailOrSucsess()
        }
        this.element.addEventListener('change', validationElemFn)
        this.element.addEventListener('keyup', validationElemFn)
    }
}

class formValidation  {
    constructor(form) {
        this.form = form
    }

    addValidationToForm = ()=>{
        const inputs = this.form.querySelectorAll('input')
        const inputsArray = []
        inputs.forEach((input)=>{
            if (!input.dataset.validationType) {return}
            const validationElem = new StateOfValidation(input)
            validationElem.addValidatorToElem()
            inputsArray.push(validationElem)
        })

        this.form.addEventListener('submit', (e)=>{
            let isFormValid 
            inputsArray.forEach((input)=>{
                input.checkFailOrSucsess()
                if (!input.state) {isFormValid=input.state}
            })
            if (isFormValid === false) {e.preventDefault()}
        })
    }
    
}

const isEmail = new validationFunc ('isEmail', (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), 'Wrong e-mail address')
const isDate = new validationFunc('isDate',(value) => !isNaN(Date.parse(value)), 'Not a date')
const isRequired = new validationFunc('isRequired', (value) => value, 'Field must be filled')
const isSamePasswords = new validationFunc('isSamePasswords', (value1, value2) => value1==value2, 'Passwords are not match')
const isPassword = new validationFunc('isPassword', (value) => /(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(value), 'Wrong password format min 6 symbols + 1 Upper Case letter + 1 lower case letter + special character ')

const validator = new Validator([isEmail,isDate,isRequired,isSamePasswords,isPassword])

const formValid = new formValidation(form)

formValid.addValidationToForm()

