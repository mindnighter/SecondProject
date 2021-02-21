class DeleteCards {
    id = "/21"
    url = `https://radiant-temple-07706.herokuapp.com/cards${this.id}`;

    async Delete(jwt) {
        const response = await fetch(this.url, {
            method: 'DELETE',
            headers: {
            'Authorization': 'Bearer '+jwt
            }
        });
        return await response.json();
    }
}

export default new DeleteCards();