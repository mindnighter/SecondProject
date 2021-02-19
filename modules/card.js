class Card {
    constructor() {

    }
    viewModal(isOpen, title = '', descr = '') {
        const modal = document.querySelector('.modal-create');
        const modalTitle = document.querySelector('.modal-create__title');
        const modalDescr = document.querySelector('.modal-create__descr');
        modal.addEventListener('submit', (event) => {
            event.preventDefault();
        });

        if (isOpen) {
            modal.classList.remove('hide');
            modalTitle.value = title;
            modalDescr.value = descr;
        } else {
            modal.classList.add('hide');
            modalTitle.value = title;
            modalDescr.value = descr;
        }
    }
    createElement(classParent) {
        const blockCards = document.querySelector(classParent).querySelector('.board-block__list');
        const newCard = document.createElement('li');
        const newCardTitle = document.createElement('div');
        const newCardDescr = document.createElement('div');
        const newCardBtns = document.createElement('div');
        const newCardBtnView = document.createElement('button');
        const newCardBtnChange = document.createElement('button');
        const newCardBtnDelete = document.createElement('button');
        const newCardViewSpanShow = document.createElement('span');
        const newCardViewSpanClose = document.createElement('span');
        const newCardChangeSpan = document.createElement('span');
        const newCardDeleteSpan = document.createElement('span');

        newCardViewSpanClose.classList.add('view-close');
        newCardViewSpanClose.classList.add('hide');
        newCardViewSpanShow.classList.add('view-show')
        newCard.classList.add('board-block__card');
        newCardTitle.classList.add('card-title');
        newCardDescr.classList.add('card-desciption');
        newCardDescr.classList.add('hide');
        newCardBtns.classList.add('card-btns');
        newCardBtnView.classList.add('card-btns__view');
        newCardBtnChange.classList.add('card-btns__change');
        newCardBtnDelete.classList.add('card-btns__delete');


        newCardTitle.innerHTML = document.querySelector('.modal-create__title').value;
        newCardDescr.innerHTML = document.querySelector('.modal-create__descr').value;

        newCardViewSpanShow.innerHTML = `<?xml version="1.0" standalone="no"?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
         "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
         width="50.000000pt" height="50.000000pt" viewBox="0 0 50.000000 50.000000"
         preserveAspectRatio="xMidYMid meet">
        <metadata>
        Created by potrace 1.16, written by Peter Selinger 2001-2019
        </metadata>
        <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
        fill="#000000" stroke="none">
        <path d="M157 395 c-57 -21 -96 -53 -128 -103 -31 -50 -39 -102 -14 -102 8 0
        23 19 33 43 34 77 122 137 202 137 80 0 168 -60 202 -137 22 -50 48 -57 48
        -15 0 35 -48 112 -88 141 -70 49 -176 64 -255 36z"/>
        <path d="M193 310 c-58 -35 -64 -121 -11 -165 40 -34 96 -34 136 0 53 44 47
        130 -11 165 -41 25 -73 25 -114 0z"/>
        </g>
        </svg>`;

        newCardViewSpanClose.innerHTML = `<?xml version="1.0" standalone="no"?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
         "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
         width="50.000000pt" height="50.000000pt" viewBox="0 0 50.000000 50.000000"
         preserveAspectRatio="xMidYMid meet">
        <metadata>
        Created by potrace 1.16, written by Peter Selinger 2001-2019
        </metadata>
        <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
        fill="#000000" stroke="none">
        <path d="M232 267 c-105 -106 -192 -200 -192 -210 0 -31 33 -18 86 34 45 44
        54 50 72 40 36 -19 88 -13 120 14 36 30 45 67 27 117 -11 33 -10 39 6 54 18
        17 21 16 50 -12 18 -16 40 -48 51 -71 22 -50 48 -57 48 -15 0 32 -47 112 -79
        134 -21 15 -21 15 9 43 33 32 40 65 12 65 -9 0 -104 -87 -210 -193z"/>
        <path d="M157 395 c-57 -21 -96 -53 -128 -103 -31 -50 -39 -102 -14 -102 8 0
        23 19 33 43 38 86 138 146 224 134 42 -6 74 17 47 34 -21 13 -119 10 -162 -6z"/>
        </g>
        </svg>`;

        newCardChangeSpan.innerHTML = `<?xml version="1.0" standalone="no"?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
         "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
         width="50.000000pt" height="50.000000pt" viewBox="0 0 50.000000 50.000000"
         preserveAspectRatio="xMidYMid meet">
        <metadata>
        Created by potrace 1.16, written by Peter Selinger 2001-2019
        </metadata>
        <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
        fill="#000000" stroke="none">
        <path d="M208 343 l-156 -158 -28 -87 c-15 -48 -25 -90 -21 -94 3 -4 46 6 94
        20 l88 28 158 156 c180 180 184 187 118 253 -66 66 -73 62 -253 -118z"/>
        </g>
        </svg>`;

        newCardDeleteSpan.innerHTML = `
        <?xml version="1.0" encoding="iso-8859-1"?>
        <!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 48.917 48.917" style="enable-background:new 0 0 48.917 48.917;" xml:space="preserve">
        <g>
            <path style="fill:#010002;" d="M44.458,8.917c0,0-1.324,0-2.958,0s-2.958-0.989-2.958-2.208V4.5c0-2.481-2.019-4.5-4.5-4.5h-19.5
                c-2.481,0-4.5,2.019-4.5,4.5c0,0,0,0.989,0,2.208c0,1.22-1.25,2.208-2.792,2.208H4.458c-1.657,0-3,1.343-3,3v2.334
                c0,1.657,1.343,3,3,3s3,1.343,3,3v25.667c0,1.657,1.343,3,3,3h28c1.657,0,3-1.343,3-3V20.25c0-1.657,1.343-3,3-3s3-1.343,3-3
                v-2.333C47.458,10.26,46.116,8.917,44.458,8.917z M15.792,39.75c0,0.829-0.672,1.5-1.5,1.5s-1.5-0.671-1.5-1.5V19.083
                c0-0.829,0.672-1.5,1.5-1.5s1.5,0.671,1.5,1.5V39.75z M25.958,39.75c0,0.829-0.672,1.5-1.5,1.5s-1.5-0.671-1.5-1.5V19.083
                c0-0.829,0.672-1.5,1.5-1.5s1.5,0.671,1.5,1.5V39.75z M16.042,8.917c-1.657,0-3-0.989-3-2.208V4.5c0-0.827,0.673-1.5,1.5-1.5h19.5
                c0.827,0,1.5,0.673,1.5,1.5c0,0,0,0.989,0,2.208c0,1.22-1.343,2.208-3,2.208L16.042,8.917L16.042,8.917z M36.125,39.75
                c0,0.829-0.672,1.5-1.5,1.5s-1.5-0.671-1.5-1.5V19.083c0-0.829,0.672-1.5,1.5-1.5s1.5,0.671,1.5,1.5V39.75z"/>
        </g></svg>`;

        newCardBtnView.append(newCardViewSpanShow);
        newCardBtnView.append(newCardViewSpanClose);
        newCardBtnChange.append(newCardChangeSpan);
        newCardBtnDelete.append(newCardDeleteSpan);
        newCardBtns.append(newCardBtnView);
        newCardBtns.append(newCardBtnChange);
        newCardBtns.append(newCardBtnDelete);
        newCard.append(newCardTitle);
        newCard.append(newCardDescr);
        newCard.append(newCardBtns);
        blockCards.append(newCard)

    }

    create(classElement) {
        this.viewModal(true);

        const modalCloseBtn = document.querySelector('.modal-create__close');
        const modalCreateBtn = document.querySelector('.modal-create__done');

        modalCloseBtn.onclick = () => {
            this.viewModal(false)
        };
        modalCreateBtn.onclick = () => {
            this.createElement(classElement);
            this.viewModal(false);
        };
    }
    run() {
        const createTodoBtn = document.querySelector('.board-todo').querySelector('.board-block__add-card');
        const createProgressBtn = document.querySelector('.board-progress').querySelector('.board-block__add-card');
        const createTestingBtn = document.querySelector('.board-testing').querySelector('.board-block__add-card');
        const createDoneBtn = document.querySelector('.board-done').querySelector('.board-block__add-card');

        createTodoBtn.addEventListener('click', () => {
            this.create('.board-todo');
        });
        createProgressBtn.addEventListener('click', () => {
            this.create('.board-progress');
        });
        createTestingBtn.addEventListener('click', () => {
            this.create('.board-testing');
        });
        createDoneBtn.addEventListener('click', () => {
            this.create('.board-done');
        });
        
        
        
    }
    showCard() {

    }
    deleteCard() {

    }
    changeCard() {
        
    }

}
export default new Card();