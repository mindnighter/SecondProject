import createCards from './createcards';
import deleteCard from './deletecards';
import updateCard from './updatecards';

export default class Card {
    constructor(data,jwt) {
        this.data = data;
        this.jwt = jwt;
    }
    viewModal(isOpen, title = '', descr = '') {
        const backgroundModal = document.querySelector('.overlay-modal');
        const modal = document.querySelector('.modal-create');
        const modalTitle = document.querySelector('.modal-create__title');
        const modalDescr = document.querySelector('.modal-create__descr');
        modal.addEventListener('submit', (event) => {
            event.preventDefault();
        });

        if (isOpen) {
            backgroundModal.classList.remove('hide');
            modal.classList.remove('hide');
            modalTitle.value = title;
            modalDescr.value = descr;
        } else {
            backgroundModal.classList.add('hide');
            modal.classList.add('hide');
            modalTitle.value = title;
            modalDescr.value = descr;
        }
    }
    createElement(classParent, title, description, id) {
        const blockCards = document.querySelector(classParent).querySelector('.board-block__list');
        const newCard = document.createElement('li');
        const newCardTitle = document.createElement('div');
        const newCardDescr = document.createElement('div');
        const newCardBtns = document.createElement('div');
        const newCardBtnView = document.createElement('button');
        const newCardBtnChange = document.createElement('button');
        const newCardBtnDelete = document.createElement('button');
        
        newCard.classList.add('board-block__card');
        newCardTitle.classList.add('card-title');
        newCardDescr.classList.add('card-desciption');
        newCardDescr.classList.add('hide');
        newCardBtns.classList.add('card-btns');
        newCardBtnView.classList.add('card-btns__view');
        newCardBtnChange.classList.add('card-btns__change');
        newCardBtnDelete.classList.add('card-btns__delete');

        newCardTitle.innerHTML = title;
        newCardDescr.innerHTML = description;


        newCardBtnView.innerHTML = "show";
        newCardBtnChange.innerHTML = "change";
        newCardBtnDelete.innerHTML = "delete";
        newCardBtns.append(newCardBtnView);
        newCardBtns.append(newCardBtnChange);
        newCardBtns.append(newCardBtnDelete);
        newCard.append(newCardTitle);
        newCard.append(newCardDescr);
        newCard.append(newCardBtns);
        newCard.id = id;
        newCard.addEventListener('click', (event) => {
            if (event.target.classList.value === 'card-btns__view') {
                this.showCard(id);
            } 
            else if (event.target.classList.value === 'card-btns__change') {
                this.changeCard(id)
            } 
            else if (event.target.classList.value === 'card-btns__delete') {
                this.deleteCard(id);             
            } 
        });
        blockCards.append(newCard)

    }

    create(classElement) {
        this.viewModal(true);

        const modalCloseBtn = document.querySelector('.modal-create__close');
        const modalCreateBtn = document.querySelector('.modal-create__done');

        modalCloseBtn.onclick = () => {
            this.viewModal(false)
        };
        modalCreateBtn.onclick = async () => {
            const tittle = document.querySelector('.modal-create__title').value;
            const desciption = document.querySelector('.modal-create__descr').value;
            const response = await createCards.create(this.jwt, classElement.slice(1), tittle, desciption);
            this.createElement(classElement, tittle, desciption, response.id);
            this.viewModal(false);
        };
    }
    run() {
        const board = document.querySelector('.board');
        const createTodoBtn = document.querySelector('.to_do').querySelector('.board-block__add-card');
        const createProgressBtn = document.querySelector('.in_progress').querySelector('.board-block__add-card');
        const createTestingBtn = document.querySelector('.testing').querySelector('.board-block__add-card');
        const createDoneBtn = document.querySelector('.done').querySelector('.board-block__add-card');

        board.classList.remove('hide');
        this.data.map((elem)=> {
            this.createElement(`.${elem.status}`, elem.title, elem.description, elem.id);
        });
        createTodoBtn.addEventListener('click', () => {
            this.create('.to_do');
        });
        createProgressBtn.addEventListener('click', () => {
            this.create('.in_progress');
        });
        createTestingBtn.addEventListener('click', () => {
            this.create('.testing');
        });
        createDoneBtn.addEventListener('click', () => {
            this.create('.done');
        });
    }
    showCard(cardId) {
        const card = document.getElementById(cardId);
        const description = card.querySelector('.card-desciption');
        const showBtn = card.querySelector('.card-btns__view');
        if(description.classList.contains('hide')) {
            description.classList.remove('hide');
            showBtn.innerHTML = "hide";
        } else {
            description.classList.add('hide');
            showBtn.innerHTML = "show";
        }
    }

    changeCard(cardId) {
        const card = document.getElementById(cardId);
        const descriptionElem = card.querySelector('.card-desciption');
        const titleElem = card.querySelector('.card-title');
        const modalCloseBtn = document.querySelector('.modal-create__close');
        const modalCreateBtn = document.querySelector('.modal-create__done');
        this.viewModal(true, titleElem.innerHTML, descriptionElem.innerHTML);

        modalCloseBtn.onclick = () => {
            this.viewModal(false)
        };
        modalCreateBtn.onclick = () => {
            // LATER SOMETHING DO WHITH TAT
            const status = card.parentNode.parentNode.className.slice(12)
            //
            const tittleValue = document.querySelector('.modal-create__title').value;
            const descriptionValue = document.querySelector('.modal-create__descr').value;
            descriptionElem.innerHTML = descriptionValue;
            titleElem.innerHTML = tittleValue;
            updateCard.update(this.jwt,cardId,status,tittleValue,descriptionValue);
            this.viewModal(false);
        };
    }
    deleteCard(cardId) {
        deleteCard.delete(this.jwt,cardId);
        document.getElementById(cardId).remove();
    }
    

}