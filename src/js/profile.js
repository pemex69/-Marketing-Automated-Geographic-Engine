let userId = '';
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
                    userId = JSON.parse(res.values).userId; // Parse the values string as JSON
                    let userEndpoint = 'http://localhost:3000/locationwise/v1/users/data/' + userId;
                    fetch(userEndpoint, {
                        credentials: 'include'
                    })
                        .then(response => {
                            if (response.ok) {
                                response.json().then(res => {
                                    console.log(res);
                                    document.getElementById('username').innerHTML = res[0].usr_username;
                                    document.getElementById('username0').innerHTML = res[0].usr_username;
                                    document.getElementById('email').innerHTML = res[0].usr_email;
                                    document.getElementById('pass').innerHTML = res[0].usr_pass;
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
    deleteAccBtn.addEventListener('click', () => {
        deleteAccount();
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
                const deleteUser = 'http://localhost:3000/locationwise/v1/users/delete/' + userId;
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
                                window.location.href = "http://localhost:3000/locationwise/v1/auth/login";
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