
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
        this.element.classList.add(this.typeOfValidation)
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

            this.#addClassFailOrSucsess()
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
        const inputObj = []
        inputs.forEach((input)=>{
            if (!input.dataset.validationType) {return}
            const validationElem = new StateOfValidation(input)
            validationElem.addValidatorToElem()
            inputObj.push(validationElem)
        })

        this.form.addEventListener('submit', (e)=>{
            let isFormValid 
            e.preventDefault()
            inputObj.forEach((input)=>{
                if (!input.state) {isFormValid=input.state}
            })
            if (isFormValid !== false) {console.log('subited');}
        })
    }
    
}

const isEmail = new validationFunc ('isEmail', (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
const isDate = new validationFunc('isDate',(value) => !isNaN(Date.parse(value)))
const isRequired = new validationFunc('isRequired', (value) => value)
const isSamePasswords = new validationFunc('isSamePasswords', (value1, value2) => value1==value2)
const isPassword = new validationFunc('isPassword', (value) => /(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(value))

const validator = new Validator([isEmail,isDate,isRequired,isSamePasswords,isPassword])

const formValid = new formValidation(form)

formValid.addValidationToForm()

console.log(document.querySelector('[data-validation-type="isPassword"]').value);
