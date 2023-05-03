import { selected_cvegeo } from './maps.js';
import { resultText } from './maps.js';



function geolocate(cvegeo) {
    if (cvegeo == '' || cvegeo == undefined) {
        swal("Sin datos", "Debes seleccionar un AGEB para poder realizar esta acción", "info");
    }
    else {
        swal({
            title: '¿Estás seguro?',
            text: 'Has seleccionado el lugar: ' + resultText + '. Si continúas, se te redirigirá a la página resultado.',
            icon: 'warning',
            buttons: {
                cancel: 'Cancelar',
                confirm: 'Continuar',
            },
        }).then((value) => {
            if (value) {
                window.location.href = './geolocation.html';
                localStorage.clear();
                localStorage.setItem("cvegeo", selected_cvegeo);
                localStorage.setItem("resultText", resultText);
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