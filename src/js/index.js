window.addEventListener('load', checkProtectedRoute);

function checkProtectedRoute() {
    const validateJWT = 'http://localhost:3000/locationwise/v1/auth/loginSession';

    fetch(validateJWT, {
        credentials: 'include',
        headers: {
            'Authorization': 'Bearer' // No need to provide the token value here
        }
    })
        .then(response => {
            if (response.ok) {
                window.history.back();
            } else {
                window.location.href = '#';
                throw new Error('JWT no validado');
            }
        })
        .catch(error => {
            console.log(error);
        });
}
