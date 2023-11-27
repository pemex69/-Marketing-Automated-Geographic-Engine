import { API } from './config.js';
const api = API;
let userId = '';


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
                    userId = JSON.parse(res.values).userId;
                    let userEndpoint = `${api}/users/data/${userId}`;
                    fetch(userEndpoint, {
                        credentials: 'include'
                    })
                        .then(response => {
                            if (response.ok) {
                                response.json().then(res => {
                                    console.log(res);
                                    email = res[0].usr_email;

                                    const adminVerify = `${api}/auth/adminSession/${email}`;

                                    fetch(adminVerify, {
                                        credentials: 'include',
                                        headers: {
                                        }
                                    })
                                        .then(response => {
                                            if (response.ok) {
                                                response.json().then(res => {
                                                    console.log(res);
                                                    if (response.status === 200) {
                                                        console.log('Admin verified');
                                                    } else if (response.status === 404) {
                                                        window.location.href = './index.html';
                                                        throw new Error('No es administrador');
                                                    } else {
                                                        window.location.href = './index.html';
                                                        throw new Error('Something went wrong');
                                                    }
                                                });
                                            } else {
                                                window.location.href = './index.html';
                                                throw new Error('No es administrador');
                                            }
                                        })
                                        .catch(error => {
                                            console.log(error);
                                        });
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