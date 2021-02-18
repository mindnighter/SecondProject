export default class Registration {
    UrlRegister = 'https://radiant-temple-07706.herokuapp.com/auth/local/register';

    UrlLogin = 'https://radiant-temple-07706.herokuapp.com/auth/local';
   
    data = {
        username: "777",
        email: "777@bar.com",
        password: "777"
    };

    log = {
        identifier: "1",
        password: "1"
    };

    PostData = async (url, data) => {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json'
            }
        });

        return await response.json();
    }

    SingIN = async () => {
        const promise = await this.PostData(this.UrlLogin,this.log).then(response=>response);
        console.log(promise);
    }
}