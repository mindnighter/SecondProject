import Registration from './modules/registration'
document.addEventListener('DOMContentLoaded', () => {
    let a = new Registration();

login.addEventListener('submit',(event)=>{
       event.preventDefault();
       a.log.identifier = login.identifier.value;
        a.log.password = login.password.value;
        a.SingIN();
    })
  });

