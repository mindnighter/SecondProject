export default class CreateCards {
    url = "https://radiant-temple-07706.herokuapp.com/cards";

    data ={
        "id": 1,
        "value": "to_do",
        "title": "To Do"
    }
   
    Create = async (jwt) => {
        const response = await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(this.data),
            headers: {
            'Authorization': 'Bearer '+jwt
            }
        });
        return await response.json();
    }
}