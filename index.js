import Registration from './modules/registration'
document.addEventListener('DOMContentLoaded', () => {
    let user = new Registration();

    login.addEventListener('submit',(event)=>{
            event.preventDefault();
            user.log.identifier = login.identifier.value;
            user.log.password = login.password.value;
            user.SingIN();
        })

    registration.addEventListener('submit',(event)=>{
        event.preventDefault();
        user.data.email = registration.email.value;
        user.data.username = registration.identifier.value;
        user.data.password = registration.password.value;
        user.Registrate();
    })
});