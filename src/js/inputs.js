let agebInputs = [];
export { agebInputs };
import { API } from './config.js';
const api = API;

document.getElementById('geolocateBtn').addEventListener('click', function () {
    swal({
        title: "¿Estás seguro?",
        text: "¿Estás seguro de tus elecciones?\nSe considerarán en el análisis",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                let nivelsocioeconomico = document.getElementById('nivelsocioeconomico').value;
                let edades = document.getElementById('edades').value;
                let escolaridad = document.getElementById('escolaridad').value;
                let situacioneconomica = document.getElementById('situacioneconomica').value;
                let situacionescolar = document.getElementById('situacionescolar').value;
                let situacionconyugal = document.getElementById('situacionconyugal').value;
                let religion = document.getElementById('religion').value;
                let limitacion = document.getElementById('limitacion').value;
                if (escolaridad == 'escolaridadNULL') {
                    escolaridad = null;
                }
                if (situacioneconomica == 'situacioneconomicaNULL') {
                    situacioneconomica = null;
                }
                if (situacionescolar == 'situacionescolarNULL') {
                    situacionescolar = null;
                }
                if (situacionconyugal == 'situacionconyugalNULL') {
                    situacionconyugal = null;
                }
                if (religion == 'religionNULL') {
                    religion = null;
                }
                if (limitacion == 'limitacionNULL') {
                    limitacion = null;
                }
                if (nivelsocioeconomico == 'lw_economia_ab') {
                    nivelsocioeconomico = 'A%2FB';
                }
                if (nivelsocioeconomico == 'lw_economia_cp') {
                    nivelsocioeconomico = 'C+';
                }
                if (nivelsocioeconomico == 'lw_economia_c') {
                    nivelsocioeconomico = 'C';
                }
                if (nivelsocioeconomico == 'lw_economia_c') {
                    nivelsocioeconomico = 'C-';
                }
                if (nivelsocioeconomico == 'lw_economia_dp') {
                    nivelsocioeconomico = 'D+';
                }
                if (nivelsocioeconomico == 'lw_economia_d') {
                    nivelsocioeconomico = 'D';
                }
                if (nivelsocioeconomico == 'lw_economia_e') {
                    nivelsocioeconomico = 'E';
                }

                let url = `${api}/customers-inputs/customers-cvegeos/${nivelsocioeconomico}/${edades}/${escolaridad}/${situacioneconomica}/${situacionescolar}/${situacionconyugal}/${religion}/${limitacion}/`;
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        localStorage.clear();
                        localStorage.setItem('InputsData', JSON.stringify(data));
                        localStorage.setItem('NivelSocioeconomico', nivelsocioeconomico);
                        localStorage.setItem('Edades', edades);
                        if (escolaridad == null) {
                            localStorage.setItem('Escolaridad', 'null');
                        }
                        else {
                            localStorage.setItem('Escolaridad', escolaridad);
                        }
                        if (situacioneconomica == null) {
                            localStorage.setItem('SituacionEconomica', 'null');
                        }
                        else {
                            localStorage.setItem('SituacionEconomica', situacioneconomica);
                        }
                        if (situacionescolar == null) {
                            localStorage.setItem('SituacionEscolar', 'null');
                        }
                        else {
                            localStorage.setItem('SituacionEscolar', situacionescolar);
                        }
                        if (situacionconyugal == null) {
                            localStorage.setItem('SituacionConyugal', 'null');
                        }
                        else {
                            localStorage.setItem('SituacionConyugal', situacionconyugal);
                        }
                        if (religion == null) {
                            localStorage.setItem('Religion', 'null');
                        }
                        else {
                            localStorage.setItem('Religion', religion);
                        }
                        if (limitacion == null) {
                            localStorage.setItem('Limitacion', 'null');
                        }
                        else {
                            localStorage.setItem('Limitacion', limitacion);
                        }

                        window.location.href = './inputs_geolocation.html';

                    }).catch(err => {
                        swal("Error", "Hubo un error.", "error");
                        console.log(err);
                    });
            }
        });
});

document.getElementById('geolocateDensityBtn').addEventListener('click', function () {
    swal({
        title: "¿Estás seguro?",
        text: "¿Estás seguro de tus elecciones?\nSe considerarán en el análisis por densidad",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                let nivelsocioeconomico = document.getElementById('nivelsocioeconomico').value;
                let edades = document.getElementById('edades').value;
                let escolaridad = document.getElementById('escolaridad').value;
                let situacioneconomica = document.getElementById('situacioneconomica').value;
                let situacionescolar = document.getElementById('situacionescolar').value;
                let situacionconyugal = document.getElementById('situacionconyugal').value;
                let religion = document.getElementById('religion').value;
                let limitacion = document.getElementById('limitacion').value;
                if (escolaridad == 'escolaridadNULL') {
                    escolaridad = null;
                }
                if (situacioneconomica == 'situacioneconomicaNULL') {
                    situacioneconomica = null;
                }
                if (situacionescolar == 'situacionescolarNULL') {
                    situacionescolar = null;
                }
                if (situacionconyugal == 'situacionconyugalNULL') {
                    situacionconyugal = null;
                }
                if (religion == 'religionNULL') {
                    religion = null;
                }
                if (limitacion == 'limitacionNULL') {
                    limitacion = null;
                }
                if (nivelsocioeconomico == 'lw_economia_ab') {
                    nivelsocioeconomico = 'A%2FB';
                }
                if (nivelsocioeconomico == 'lw_economia_cp') {
                    nivelsocioeconomico = 'C+';
                }
                if (nivelsocioeconomico == 'lw_economia_c') {
                    nivelsocioeconomico = 'C';
                }
                if (nivelsocioeconomico == 'lw_economia_c') {
                    nivelsocioeconomico = 'C-';
                }
                if (nivelsocioeconomico == 'lw_economia_dp') {
                    nivelsocioeconomico = 'D+';
                }
                if (nivelsocioeconomico == 'lw_economia_d') {
                    nivelsocioeconomico = 'D';
                }
                if (nivelsocioeconomico == 'lw_economia_e') {
                    nivelsocioeconomico = 'E';
                }

                let url = `${api}/customers-inputs/customers-cvegeos-density/${nivelsocioeconomico}/${edades}/${escolaridad}/${situacioneconomica}/${situacionescolar}/${situacionconyugal}/${religion}/${limitacion}/`;
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        localStorage.clear();
                        localStorage.setItem('InputsData', JSON.stringify(data));
                        localStorage.setItem('NivelSocioeconomico', nivelsocioeconomico);
                        localStorage.setItem('Edades', edades);
                        if (escolaridad == null) {
                            localStorage.setItem('Escolaridad', 'null');
                        }
                        else {
                            localStorage.setItem('Escolaridad', escolaridad);
                        }
                        if (situacioneconomica == null) {
                            localStorage.setItem('SituacionEconomica', 'null');
                        }
                        else {
                            localStorage.setItem('SituacionEconomica', situacioneconomica);
                        }
                        if (situacionescolar == null) {
                            localStorage.setItem('SituacionEscolar', 'null');
                        }
                        else {
                            localStorage.setItem('SituacionEscolar', situacionescolar);
                        }
                        if (situacionconyugal == null) {
                            localStorage.setItem('SituacionConyugal', 'null');
                        }
                        else {
                            localStorage.setItem('SituacionConyugal', situacionconyugal);
                        }
                        if (religion == null) {
                            localStorage.setItem('Religion', 'null');
                        }
                        else {
                            localStorage.setItem('Religion', religion);
                        }
                        if (limitacion == null) {
                            localStorage.setItem('Limitacion', 'null');
                        }
                        else {
                            localStorage.setItem('Limitacion', limitacion);
                        }

                        window.location.href = './inputs_geolocation.html';

                    }).catch(err => {
                        swal("Error", "Hubo un error.", "error");
                        console.log(err);
                    });
            }
        });
});