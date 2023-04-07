document.addEventListener('DOMContentLoaded', function (pagelaod) {
    const MAGEAPI_test = 'http://localhost:3000/api/v1/users/1';
    fetch(MAGEAPI_test)
        .then(response => response.json())
        .then(data => {

            username_data = JSON.stringify(data[0].usr_username);
            username_data = username_data.replace(/"/g, '');
            email_data = JSON.stringify(data[0].usr_email);
            email_data = email_data.replace(/"/g, '');
            pass_data = JSON.stringify(data[0].usr_pass);
            pass_data = pass_data.replace(/"/g, '');
            id_data = JSON.stringify(data[0].usr_id);
            id_data = id_data.replace(/"/g, '');

            let usernameElement = document.getElementById('username');
            let username0Element = document.getElementById('username0');
            let passElement = document.getElementById('pass');            
            let emailElement = document.getElementById('email');
            let idElement = document.getElementById('id');
            
            idElement.innerHTML = id_data;
            usernameElement.innerHTML = username_data;
            username0Element.innerHTML = username_data;
            emailElement.innerHTML = email_data;
            passElement.innerHTML = pass_data;

        }).catch(error => {
            console.error(error);
        });
});