import { API } from './config.js';
const api = API;

document.addEventListener('DOMContentLoaded', () => {
    const allUsers = document.getElementById('allUsers');
    const deleteUserButton = document.getElementById('deleteUser');
    const addAdmin = document.getElementById('addAdmin');

    allUsers.addEventListener('click', getAllUsers);
    deleteUserButton.addEventListener('click', handleDeleteUser);
    addAdmin.addEventListener('click', addAdminUser);
});

function getAllUsers() {
    const allUsers = `${api}/users/all`;
    fetch(allUsers)
        .then(response => { return response.json(); })
        .then(data => {
            console.log(data);
            const users = data;
            let output = '';
            users.forEach(user => {
                output += `id: ${user.usr_id}\n
usuario: ${user.usr_username}\n
email: ${user.usr_email}\n
contraseña (hash): ${user.usr_pass}\n\n\n`;
            });
            //sweet alert with users
            swal({
                title: 'Usuarios',
                text: output,
                icon: 'info',
                button: 'Ok'
            });

        })
        .catch(error => {
            console.log(error);
        });
}

function handleDeleteUser() {
    const userKey = document.getElementById('userKey').value;
    const numbers = /^[0-9]+$/;
    if (userKey.match(numbers)) {
        deleteUserByID(userKey);
    } else {
        deleteUserByEmail(userKey);
    }
}

function deleteUserByID(id) {
    usr_id = parseInt(id);
    
    const deleteUser = `${api}/users/delete/${usr_id}`;
    fetch(deleteUser, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.status === 200) {
                swal({
                    title: 'Usuario eliminado',
                    text: 'El usuario fue eliminado exitosamente.',
                    icon: 'success',
                    button: 'Ok'
                });
            } else if (response.status === 404) {
                swal({
                    title: 'Error',
                    text: 'No existe el usuario.',
                    icon: 'error',
                    button: 'Ok'
                });
            } else {
                swal({
                    title: 'Error',
                    text: 'Hubo un error al eliminar el usuario.',
                    icon: 'error',
                    button: 'Ok'
                });
            }
        })
        .catch(error => {
            console.log(error);
        });
}
function deleteUserByEmail(email) {
    usr_email = email;
    const deleteUserByEmailAPI = `${api}/users/delete/mail/${usr_email}`;
    fetch(deleteUserByEmailAPI, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.status === 200) {
                swal({
                    title: 'Usuario eliminado',
                    text: 'El usuario fue eliminado exitosamente.',
                    icon: 'success',
                    button: 'Ok'
                });
            } else if (response.status === 404) {
                swal({
                    title: 'Error',
                    text: 'No existe el usuario.',
                    icon: 'error',
                    button: 'Ok'
                });
            } else {
                swal({
                    title: 'Error',
                    text: 'Hubo un error al eliminar el usuario.',
                    icon: 'error',
                    button: 'Ok'
                });
            }
        })
        .catch(error => {
            console.log(error);
        });
}
function addAdminUser() {
    const usr_email = document.getElementById('adminEmail').value;
    const addAdminAPI = `${api}/users/admin/${usr_email}`;
    fetch(addAdminAPI, {
        method: 'POST'
    })
        .then(response => {
            if (response.status === 200) {
                swal({
                    title: 'Administrador agregado',
                    text: 'El administrador fue agregado exitosamente.',
                    icon: 'success',
                    button: 'Ok'
                });
            } else if (response.status === 404) {
                swal({
                    title: 'Error',
                    text: 'No existe el usuario.',
                    icon: 'error',
                    button: 'Ok'
                });
            } else {
                swal({
                    title: 'Error',
                    text: 'Hubo un error al agregar el usuario.',
                    icon: 'error',
                    button: 'Ok'
                });
            }
        })
        .catch(error => {
            console.log(error);
        });
}