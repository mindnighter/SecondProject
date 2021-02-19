import user from './modules/registration';
import getCards from './modules/getcards';
import deleteCards from './modules/deletecards';
import Card from './modules/card';

document.addEventListener('DOMContentLoaded',async () => {
    let info;

    login.addEventListener('submit',async (event)=>{
        event.preventDefault();
        info = await user.SingIN();
       // console.log(info);
       // deletecard.Delete(info.jwt);
       // console.log(createCards.Create(info.jwt));
       const startCard = await getCards.Get(info.jwt);
       const card = new Card(startCard,info.jwt)
       card.run();
    })

    registration.addEventListener('submit',(event)=>{
        event.preventDefault();
        user.Registrate();
    })

    
});


