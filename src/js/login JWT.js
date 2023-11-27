import { API } from './config.js';
const api = API;

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