let username = '';
let email = '';

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
        Username: 'helpme.mage@gmail.com',
        Password: 'C08AE430E6E36AA4AFFDDE8C130FC497B38A',

        From: 'helpme.mage@gmail.com',
        To: 'helpme.mage@gmail.com',
        Subject: "Duda de " + username,
        Body: message + '\n\nResponder a ' + email
    }).then(
        message => alert(message)
    );
    return false;
}
