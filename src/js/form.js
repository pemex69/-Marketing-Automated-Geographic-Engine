let username = '';
let email = '';
const mageMail = 'helpme.mage@gmail.com';

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
                    const userId = JSON.parse(res.values).userId; // Parse the values string as JSON
                    let userEndpoint = 'http://localhost:3000/locationwise/v1/users/data/' + userId;
                    fetch(userEndpoint, {
                        credentials: 'include'
                    })
                        .then(response => {
                            if (response.ok) {
                                response.json().then(res => {
                                    console.log(res);
                                    username = res[0].usr_username;
                                    email = res[0].usr_email;
                                    let emailRegex = /\S+@\S+\.\S+/;
                                    if (!emailRegex.test(email)) {
                                        swal({
                                            title: 'Error',
                                            text: 'El email no es valido.',
                                            icon: 'error',
                                            button: 'Nimodo'
                                        });
                                        swal('Error', 'El email no es valido.', 'error');
                                        throw new Error('Email no valido');
                                    }
                                    if (username === null || username === undefined || username === '') {
                                        swal({
                                            title: 'Error',
                                            text: 'El usuario no existe.',
                                            icon: 'error',
                                            button: 'Nimodo'
                                        });
                                        swal('Error', 'El email no es valido.', 'error');
                                        throw new Error('El usuario no existe');
                                    }

                                    document.getElementById('contact_name').value = username;

                                    document.getElementById('contact_email').value = email;
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


function submitForm() {
    event.preventDefault();
    let message = document.getElementById('message').value;
    Email.send({
        Host: 'smtp.elasticemail.com',
        Username: mageMail,
        Password: 'C08AE430E6E36AA4AFFDDE8C130FC497B38A',

        From: mageMail,
        To: mageMail,
        Subject: "Duda de " + username,
        Body: message + '\n\n | Responder a ' + email
    }).then(
        message => {
            if (message == 'OK') {
                swal({
                    title: 'Mensaje enviado',
                    text: 'Gracias por contactarnos, te responderemos a la brevedad.',
                    icon: 'success',
                    button: 'Ok'
                });
            }

            else {
                swal({
                    title: 'Error',
                    text: 'Hubo un error al enviar el mensaje, intenta nuevamente.',
                    icon: 'error',
                    button: 'Ok'
                });
            }

        }
    );
    return false;
}
