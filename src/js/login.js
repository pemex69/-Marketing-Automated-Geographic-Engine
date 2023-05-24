function authLogin(email, pass) {
    const url = 'http://localhost:3000/locationwise/v1/auth/login' + '/' + email + '/' + pass;
    const data = { usr_email: email, usr_pass: pass };
    fetch(url, {
        method: 'GET',
        credentials: 'include',
    })
        .then(response => {
            if (response.ok) {
                response.text().then(res => {
                    if (res === 'No existe el usuario.') {
                        swal({
                            title: "Error",
                            text: "Ese usuario no existe.",
                            icon: "error",
                            button: "Nimodo",
                        });
                    }
                    else if (res === 'Contraseña incorrecta.') {
                        swal({
                            title: "Error",
                            text: "Contraseña incorrecta.",
                            icon: "error",
                            button: "Nimodo",
                        });
                    }
                    else {
                        swal({
                            title: "Exito",
                            text: "Usuario validado exitosamente.",
                            icon: "success",
                            button: "Ok",
                        }).then((value) => {
                            window.location.href = './home.html';
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

const authBtn = document.getElementById('authBtn');
authBtn.addEventListener('click', function () {
    const email = document.getElementById('emailLogin').value;
    const pass = document.getElementById('passLogin').value;
    authLogin(email, pass);
});
