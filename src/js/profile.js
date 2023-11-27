import { API } from './config.js';
const api = API;
let userId = '';
let username = '';
let email = '';
let pass = '';


window.addEventListener('load', checkProtectedRoute);

function checkProtectedRoute() {
    const validateJWT = `${api}/auth/loginSession`;

    fetch(validateJWT, {
        credentials: 'include',
        headers: {
            'Authorization': 'Bearer' // No need to provide the token value here
        }
    })
        .then(response => {
            if (response.ok) {
                response.json().then(res => {
                    console.log(res);
                    userId = JSON.parse(res.values).userId; // Parse the values string as JSON
                    let userEndpoint = `${api}/users/data/${userId}`;
                    fetch(userEndpoint, {
                        credentials: 'include'
                    })
                        .then(response => {
                            if (response.ok) {
                                response.json().then(res => {
                                    console.log(res);
                                    username = res[0].usr_username;
                                    email = res[0].usr_email;
                                    pass = '. . .';

                                    document.getElementById('username').innerHTML = username;
                                    document.getElementById('username0').value = username;
                                    document.getElementById('email').value = email;
                                    document.getElementById('pass').value = pass;
                                });
                            } else {
                                throw new Error('Something went wrong');
                            }
                        })
                        .catch(error => {
                            console.log(error);
                        });
                });
            } else {
                window.location.href = './index.html';
                throw new Error('JWT no validado');
            }
        })
        .catch(error => {
            console.log(error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    const deleteAccBtn = document.getElementById('deleteAcc');
    const updateAccBtn = document.getElementById('updateAcc');
    deleteAccBtn.addEventListener('click', () => {
        deleteAccount();
    });
    updateAccBtn.addEventListener('click', () => {
        updateAccount();
    });
});

function deleteAccount() {
    swal({
        title: "¿Estás seguro?",
        text: "Una vez eliminada tu cuenta, no podrás recuperarla.",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                const deleteUser = `${api}/users/delete/${userId}`;
                fetch(deleteUser, {
                    method: 'DELETE',
                    credentials: 'include'
                })
                    .then(response => {
                        if (response.ok) {
                            console.log(response);
                            swal({
                                title: "¡Tu cuenta ha sido eliminada!",
                                text: "¡Gracias por usar LocationWise!",
                                icon: "success",
                            }).then(function () {
                                window.location.href = "./index.html";
                            });
                        } else {
                            throw new Error('Something went wrong');
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            } else {
                swal("Tu cuenta está a salvo.");
            }
        });
}

function updateAccount() {
    const formUsername = document.getElementById('username0').value;
    const formEmail = document.getElementById('email').value;
    const formPass = document.getElementById('pass').value;

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
    if (!emailRegex.test(formEmail)) {
        swal({
            title: "Error",
            text: "El email no es valido.",
            icon: "error",
            button: "Nimodo",
        });
        return;
    }
    if (formPass.length < 3 || formPass.length > 14) {
        swal({
            title: "Error",
            text: "La contraseña debe tener entre 3 y 14 caracteres.",
            icon: "error",
            button: "Nimodo",
        });
        return;
    }


    if (formUsername === username && formEmail === email && formPass === pass) {
        swal({
            title: "Nada que cambiar",
            text: "No has realizado ningún cambio. . .",
            icon: "info",
        });
    } else {
        swal({
            title: "¿Estás seguro?",
            text: "Se actualizarán tus datos.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willUpdate) => {
                if (willUpdate) {
                    const updateUser = `${api}/users/update/${userId}`;
                    const data = {
                        usr_username: formUsername,
                        usr_email: formEmail,
                        usr_pass: formPass
                    };
                    fetch(updateUser, {
                        method: 'PUT',
                        credentials: 'include',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                        .then(response => {
                            if (response.ok) {
                                console.log(response);
                                swal({
                                    title: "¡Tus datos han sido actualizados!",
                                    text: "¡Gracias por usar LocationWise!",
                                    icon: "success",
                                }).then(function () {
                                    window.location.href = "./profile.html";
                                });
                            }
                        })
                        .catch(error => {
                            console.log(error);
                        });
                } else {
                    swal("No se actualizarán tus datos.");
                }
            });
    }
}