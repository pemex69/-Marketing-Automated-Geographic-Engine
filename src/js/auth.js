import { API } from './config.js';
const api = API;

function addUser(username, email, password) {
    const url = `${api}/users/add`;
    const data = { usr_username: username, usr_email: email, usr_pass: password };
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                response.text().then(res => {
                    if (res === 'Ese email ya existe.') {
                        swal({
                            title: "Error",
                            text: "Ese email ya existe.",
                            icon: "error",
                            button: "Nimodo",
                        });
                    }
                    else {
                        swal({
                            title: "Exito",
                            text: "Usuario agregado exitosamente.",
                            icon: "success",
                            button: "Ok",
                        }).then((value) => {
                            window.location.href = './login.html';
                        });
                    }
                });
            } else {
                throw new Error('algo salio mal');
            }
        }).
        catch(error => {
            swal({
                title: "Error",
                text: "Algo salio mal.\n" + error,
                icon: "error",
                button: "Nimodo",
            });
        });
}

const postUserBtn = document.getElementById('postUserBtn');

postUserBtn.addEventListener('click', function () {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('pass').value;
    let passConfirm = document.getElementById('passConfirm').value;

    if (username.length < 3 || username.length > 14) {
        swal({
            title: "Error",
            text: "El nombre de usuario debe tener entre 3 y 14 caracteres.",
            icon: "error",
            button: "Nimodo",
        });
        return;
    }

    let emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        swal({
            title: "Error",
            text: "El email no es valido.",
            icon: "error",
            button: "Nimodo",
        });
        return;
    }
    if (password.length < 3 || password.length > 14) {
        swal({
            title: "Error",
            text: "La contraseña debe tener entre 3 y 14 caracteres.",
            icon: "error",
            button: "Nimodo",
        });
        return;
    }
    if (password !== passConfirm) {
        swal({
            title: "Error",
            text: "Las contraseñas no coinciden.",
            icon: "error",
            button: "Nimodo",
        });
        return;
    }

    addUser(username, email, password);
});
