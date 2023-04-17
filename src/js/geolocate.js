import { selected_cvegeo } from './maps.js';

function geolocate(cvegeo) {
    if (cvegeo == '' || cvegeo == undefined) {
        swal("Sin datos", "Debes seleccionar un AGEB para poder realizar esta acción", "info");
    }
    else {
        swal({
            title: '¿Estás seguro?',
            text: 'Has seleccionado el AGEB: ' + cvegeo + '. Si continúas, se te redirigirá a la página resultado.',
            icon: 'warning',
            buttons: {
                cancel: 'Cancelar',
                confirm: 'Continuar',
            },
        }).then((value) => {
            if (value) {
                window.location.href = './geolocation.html';
                localStorage.setItem("cvegeo", selected_cvegeo);
            }
        }
        );
    }
}

const geolocateBtn = document.getElementById('geolocateBtn');
geolocateBtn.addEventListener('click', () => {
    geolocate(selected_cvegeo);
    console.log("test: " + selected_cvegeo);
});