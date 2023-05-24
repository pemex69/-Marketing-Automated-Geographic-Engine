function addUser(username, email, password) {
    const url = 'http://localhost:3000/locationwise/v1/users/add';
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
    addUser(username, email, password);
});
