import { API } from './config.js';
const api = API;

window.addEventListener('load', checkProtectedRoute);

function checkProtectedRoute() {
    const validateJWT = `${api}/auth/loginSession`;

    fetch(validateJWT, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Authorization': 'Bearer', // No need to provide the token value here
        },
    })
        .then(response => {
            if (response.ok) {
                window.location.href = './home.html';
            } else {
                window.location.href = '#';
                throw new Error('JWT no validado');
            }
        })
        .catch(error => {
            console.log(error);
        });
}
