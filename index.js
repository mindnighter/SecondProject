const urlRegister = 'https://radiant-temple-07706.herokuapp.com/auth/local/register';

const urlLogin = 'https://radiant-temple-07706.herokuapp.com/auth/local';

const data = {
    username: "777",
    email: "777@bar.com",
    password: "777"
};

const log = {
    identifier: "777",
    password: "777"
};

const postData = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      return await response.json();
}

const singIN = async (log) => {
    const promise = await postData(urlLogin,log).then(response=>response);
    console.log(promise);
}

login.addEventListener('submit',(event)=>{
    event.preventDefault();
    log.identifier = login.identifier.value;
    log.password = login.password.value;
    singIN(log);
})

registration.addEventListener('submit',(event)=>{
    event.preventDefault();
    data.email = registration.email.value;
    data.username = registration.identifier.value;
    data.password = registration.password.value;
    console.log(postData(urlRegister,data));
})

