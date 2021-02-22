class Drag {
    #allowDrop(event){
        event.preventDefault();
    }

    #drop(event){
        var data = event.dataTransfer.getData("text");
        event.currentTarget.append(document.getElementById(data));
       // const card = new Card(jwt,0)
       // console.log(event.currentTarget.parentNode.className.slice(12))
       // card.changeCardForDragNDrop(data,event.parentNode.currentTarget.className.slice(12))
    }

    #getBlocks(){
        const blocks = document.querySelectorAll('.board-block');
        for (let block of blocks){
            let list = block.querySelector('.board-block__list');
            list.addEventListener('dragover',this.#allowDrop);
            list.addEventListener('drop',this.#drop, true);
        }
    }

    #dragStart(event){
        event.dataTransfer.setData("text", event.target.id);
    }
    
    drag(elem){
        elem.draggable = 'true';
        elem.addEventListener('dragstart',this.#dragStart)
        this.#getBlocks();
    }
}

export default new Drag();