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
                response.json().then(res => {
                    console.log(res);
                    const userId = JSON.parse(res.values).userId; // Access the userId property from the nested structure
                    
                });
            } else {
                throw new Error('Something went wrong');
            }
        })
        .catch(error => {
            console.log(error);
        });
}
