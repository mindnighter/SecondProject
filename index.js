import user from './modules/registration';
import getCards from './modules/getcards';
import Card from './modules/card';
import view from './modules/view';

document.addEventListener('DOMContentLoaded',async () => {
    view.render();
    const runCard = async (info) =>{
        document.querySelector('.registration').classList.add('hide');
        if(info.jwt){
            const startCards = await getCards.get(info.jwt);
           // console.log(startCards);
            const card = new Card(startCards,info.jwt)
            card.run();
        } else {
            document.querySelector('.modal-error').classList.remove('hide');
        }
    }
    document.querySelector('.admission__form').addEventListener('submit',async (event)=>{
        event.preventDefault();
        const info = await user.singIN();
        runCard(info);
    })
    document.querySelector('.registr__form').addEventListener('submit',async (event)=>{
        event.preventDefault();
        const info = await user.registrate();
        runCard(info);
    })
});


