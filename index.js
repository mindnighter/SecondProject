import Registration from './modules/registration';
import GetCards from './modules/getcards';
import CreateCards from './modules/createcards';
import DeleteCards from './modules/deletecards'

document.addEventListener('DOMContentLoaded',async () => {
    const user = new Registration();
    const cards = new GetCards();
    const create = new CreateCards();
    const deletecard = new DeleteCards();
    let info;

    login.addEventListener('submit',async (event)=>{
        event.preventDefault();
        info = await user.SingIN();
        console.log(info);
       // deletecard.Delete(info.jwt);
       // console.log(create.Create(info.jwt));
        console.log(cards.Get(info.jwt));
        
    })

    registration.addEventListener('submit',(event)=>{
        event.preventDefault();
        user.Registrate();
    })
});


