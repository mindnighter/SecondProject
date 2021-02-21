import user from './modules/registration';
import getCards from './modules/getcards';
import Card from './modules/card';

document.addEventListener('DOMContentLoaded',async () => {
    let info;

    document.querySelector('.admission__form').addEventListener('submit',async (event)=>{
        event.preventDefault();
        info = await user.singIN();
       // console.log(info);
       const startCards = await getCards.get(info.jwt);
       const card = new Card(startCards,info.jwt)
       card.run();
    })

    document.querySelector('.registr__form').addEventListener('submit',(event)=>{
        event.preventDefault();
        user.registrate();
    })

    
});


