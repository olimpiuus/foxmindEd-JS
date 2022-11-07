const inputNme = document.querySelector('[name="Last-name"]')
const inputEmail = document.querySelector('[type="email"]')

class Validator {
    isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    isDate = (value) => !isNaN(Date.parse(value))
    IsRequired = (htmlElem) => htmlElem.required = true
}

class StateOfValidation {
    constructor(element, value ) {
        this.value = value
        this.element = element
    }

    checkState = () => {
        this.value === true ? this.#addCheckedStatus() : this.#addFailedStatus()
    }

    #addCheckedStatus = () => {
        this.element.classList.add('checked')
        console.log('checked');
    }
    #addFailedStatus = () => {
        this.element.classList.add('failed')
        console.log('failed');
    }

    // this.element.addEventListener('')
}

const validator = new Validator
const stateSetterEmail = new StateOfValidation(inputEmail, validator.isEmail(inputEmail))

console.log(stateSetterEmail.checkState());