const viewMoreBtn = document.getElementById('viewMoreBtn');
const moreInfo = document.getElementById('moreInfo');

viewMoreBtn.addEventListener('click', () => {
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
        viewMoreBtn.innerText = 'Ver menos';
    } else {
        moreInfo.style.display = 'none';
        viewMoreBtn.innerText = 'Ver más';
    }
});

function NotRegistered() {
    swal({
        title: '¡Ups!',
        text: 'Debes estar registrado para poder realizar esta acción',
        icon: 'warning',
        buttons: {
            cancel: 'Cancelar',
            confirm: 'Registrarme',
        },
    }).then((value) => {
        if (value) {
            window.location.href = './auth.html';
        }
    }
    );

}

function loginredirect() {
    window.location.href = './login.html';
}

function indexredirect() {
    window.location.href = './index.html';
}

function geolocate() {
    alert('tbc . . .');
}