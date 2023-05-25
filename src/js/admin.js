document.addEventListener('DOMContentLoaded', () => {
    const allUsers = document.getElementById('allUsers');
    allUsers.addEventListener('click', getAllUsers);
});

function getAllUsers() {
    const allUsers = 'http://localhost:3000/locationwise/v1/users/all';
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