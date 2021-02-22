class View {
    #reg_But = document.querySelector('.registr__log');
    #log_But = document.querySelector('.admission__reg');
    #log = document.querySelector('.admission__block');
    #reg = document.querySelector('.registr__block');
    #err_But = document.querySelector('.modal-error__close');
    #err = document.querySelector('.modal-error');
    #registrationForms = document.querySelector('.registration');
    render(){
        this.#log_But.addEventListener('click',()=>{
           this.#log.classList.add('hide');
           this.#reg.classList.remove('hide');
        })
        this.#reg_But.addEventListener('click',()=>{
            this.#reg.classList.add('hide');
            this.#log.classList.remove('hide');
        })
        this.#err_But.addEventListener('click',()=>{
            this.#err.classList.add('hide');
            this.#registrationForms.classList.remove('hide');
        })
    }
}

export default new View();