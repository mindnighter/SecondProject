class Registration {
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

    async PostData(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json'
            }
        });
        return await response.json();
    }

    async Registrate() {
        this.data.email = registration.email.value;
        this.data.username = registration.identifier.value;
        this.data.password = registration.password.value;
        const promise = await this.PostData(this.UrlRegister,this.data);
    }

    async SingIN() {
        this.log.identifier = login.identifier.value;
        this.log.password = login.password.value;
        const promise = await this.PostData(this.UrlLogin,this.log);
        return await promise
    }
}

export default new Registration();