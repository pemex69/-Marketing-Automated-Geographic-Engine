let nivelsocioeconomico_dropdown = document.getElementById('nivelsocioeconomico');
let edades_dropdown = document.getElementById('edades');
let escolaridad_dropdown = document.getElementById('escolaridad');
let sexo_dropdown = document.getElementById('sexo');
let situacioneconomica_dropdown = document.getElementById('situacioneconomica');
let situacionescolar_dropdown = document.getElementById('situacionescolar');
let situacionconyugal_dropdown = document.getElementById('situacionconyugal');
let religion_dropdown = document.getElementById('religion');
let limitacion_dropdown = document.getElementById('limitacion');

let nivelsocioeconomico_selectedValue = '';
let edades_selectedValue = '';
let escolaridad_selectedValue = '';
let sexo_selectedValue = '';
let situacioneconomica_selectedValue = '';
let situacionescolar_selectedValue = '';
let situacionconyugal_selectedValue = '';
let religion_selectedValue = '';
let limitacion_selectedValue = '';


nivelsocioeconomico_dropdown.addEventListener("change", function () {

    selectedValue = nivelsocioeconomico_dropdown.value;
    alert(selectedValue);

});

edades_dropdown.addEventListener("change", function () {

    selectedValue = edades_dropdown.value;
    alert(selectedValue);

});

escolaridad_dropdown.addEventListener("change", function () {

    selectedValue = escolaridad_dropdown.value;
    alert(selectedValue);

});

sexo_dropdown.addEventListener("change", function () {

    selectedValue = sexo_dropdown.value;
    alert(selectedValue);

});

situacioneconomica_dropdown.addEventListener("change", function () {

    selectedValue = situacioneconomica_dropdown.value;
    alert(selectedValue);

});

situacionescolar_dropdown.addEventListener("change", function () {

    selectedValue = situacionescolar_dropdown.value;
    alert(selectedValue);

});

situacionconyugal_dropdown.addEventListener("change", function () {

    selectedValue = situacionconyugal_dropdown.value;
    alert(selectedValue);

});

religion_dropdown.addEventListener("change", function () {

    selectedValue = religion_dropdown.value;
    alert(selectedValue);

});

limitacion_dropdown.addEventListener("change", function () {

    selectedValue = limitacion_dropdown.value;
    alert(selectedValue);

});
//                    <button class="glow-on-hover buttonfix" type="button" id="geolocateBtn">Geolocalizar</button>
//add event listener to button
document.getElementById('geolocateBtn').addEventListener('click', function () {
    //swal confirming choices
    swal({
        title: "¿Estás seguro?",
        //get the text from the dropdowns
        text: "¿Estás seguro de tus elecciones?, se considerarán en el análisis",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                let nivelsocioeconomico = document.getElementById('nivelsocioeconomico').value;
                let edades = document.getElementById('edades').value;
                let escolaridad = document.getElementById('escolaridad').value;
                let sexo = document.getElementById('sexo').value;
                let situacioneconomica = document.getElementById('situacioneconomica').value;
                let situacionescolar = document.getElementById('situacionescolar').value;
                let situacionconyugal = document.getElementById('situacionconyugal').value;
                let religion = document.getElementById('religion').value;
                let limitacion = document.getElementById('limitacion').value;
            }
        });
});