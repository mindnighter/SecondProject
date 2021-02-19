export default class GetCards {
    url = "https://radiant-temple-07706.herokuapp.com/cards";

    Get = async (jwt) => {
        const response = await fetch(this.url, {
            method: 'GET',
            headers: {
            'Authorization': 'Bearer '+jwt
            }
        });
        return await response.json();
    }
}