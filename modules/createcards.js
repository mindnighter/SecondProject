export default class CreateCards {
    url = "https://radiant-temple-07706.herokuapp.com/cards";

    data ={
        title: "done project",
        status: "done",
        description: "Done dolor sit amet..."
    }
   
    Create = async (jwt) => {
        const response = await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(this.data),
            headers: {
            'Authorization': 'Bearer '+jwt,
            'Content-Type': 'application/json'
            }
        });
        return await response.json();
    }
}