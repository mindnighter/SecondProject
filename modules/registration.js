export default class Registration {
    UrlRegister = 'https://radiant-temple-07706.herokuapp.com/auth/local/register';

    UrlLogin = 'https://radiant-temple-07706.herokuapp.com/auth/local';
   
    data = {
        username: "",
        email: "",
        password: ""
    };

    log = {
        identifier: "",
        password: ""
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

    Registrate = async () => {
        const promise = await this.PostData(this.UrlRegister,this.data);
        console.log(promise);
    }

    SingIN = async () => {
        const promise = await this.PostData(this.UrlLogin,this.log).then(response=>response);
        console.log(promise);
    }
}