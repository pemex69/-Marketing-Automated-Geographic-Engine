import { mapa_agebs } from "./inputs maps.js";

let InputsData = []
let displays = 0;
let cvegeos = [];
let NivelSocioeconomico = '';
let Edades = '';
let Escolaridad = '';
let SituacionEconomica = '';
let SituacionEscolar = '';
let SituacionConyugal = '';
let Religion = '';
let Limitaciones = '';
let NivelSocioeconomicoLabelConst = '';

document.addEventListener("DOMContentLoaded", function () {
    InputsData = localStorage.getItem("InputsData");
    InputsData = JSON.parse(InputsData);
    InputsData.forEach(element => {
        cvegeos.push(element.cvegeo);
    });

    NivelSocioeconomico = localStorage.getItem("NivelSocioeconomico");
    NivelSocioeconomicoLabelConst = NivelSocioeconomico;

    if (NivelSocioeconomicoLabelConst == 'A%2FB') {
        NivelSocioeconomicoLabelConst = 'lw_economia_ab';
    }
    else if (NivelSocioeconomicoLabelConst == 'C+') {
        NivelSocioeconomicoLabelConst = 'lw_economia_cp';
    }
    else if (NivelSocioeconomicoLabelConst == 'C') {
        NivelSocioeconomicoLabelConst = 'lw_economia_c';
    }
    else if (NivelSocioeconomicoLabelConst == 'D+') {
        NivelSocioeconomicoLabelConst = 'lw_economia_dp';
    }
    else if (NivelSocioeconomicoLabelConst == 'D') {
        NivelSocioeconomicoLabelConst = 'lw_economia_d';
    }
    else if (NivelSocioeconomicoLabelConst == 'E') {
        NivelSocioeconomicoLabelConst = 'lw_economia_e';
    }

    Edades = localStorage.getItem("Edades");
    Escolaridad = localStorage.getItem("Escolaridad");
    SituacionEconomica = localStorage.getItem("SituacionEconomica");
    SituacionEscolar = localStorage.getItem("SituacionEscolar");
    SituacionConyugal = localStorage.getItem("SituacionConyugal");
    Religion = localStorage.getItem("Religion");
    Limitaciones = localStorage.getItem("Limitacion");

    if (NivelSocioeconomico == 'A%2FB') {
        NivelSocioeconomico = 'Próspero';
    }
    else if (NivelSocioeconomico == 'C+') {
        NivelSocioeconomico = 'Alto';
    }
    else if (NivelSocioeconomico == 'C') {
        NivelSocioeconomico = 'Medio Alto';
    }
    else if (NivelSocioeconomico == 'D+') {
        NIvelSocioeconomico = 'Medio Bajo';
    }
    else if (NivelSocioeconomico == 'D') {
        NivelSocioeconomico = 'Bajo';
    }
    else if (NivelSocioeconomico == 'E') {
        NivelSocioeconomico = 'Precario';
    }


    if (Escolaridad == 'null') {
        Escolaridad = 'No se toma en cuenta';
    }
    if (SituacionEconomica == 'null') {
        SituacionEconomica = 'No se toma en cuenta';
    }
    if (SituacionEscolar == 'null') {
        SituacionEscolar = 'No se toma en cuenta';
    }
    if (SituacionConyugal == 'null') {
        SituacionConyugal = 'No se toma en cuenta';
    }
    if (Religion == 'null') {
        Religion = 'No se toma en cuenta';
    }
    if (Limitaciones == 'null') {
        Limitaciones = 'No se toma en cuenta';
    }
    let nivelsocioeconomico = document.getElementById("nivelsocioeconomico");
    let edades = document.getElementById("edades");
    let escolaridad = document.getElementById("escolaridad");
    let limitacion = document.getElementById("limitacion");
    let situacioneconomica = document.getElementById("situacioneconomica");
    let situacionescolar = document.getElementById("situacionescolar");
    let situacionconyugal = document.getElementById("situacionconyugal");
    let religion = document.getElementById("religion");

    nivelsocioeconomico.innerHTML = NivelSocioeconomico;
    edades.innerHTML = Edades;
    escolaridad.innerHTML = Escolaridad;
    limitacion.innerHTML = Limitaciones;
    situacioneconomica.innerHTML = SituacionEconomica;
    situacionescolar.innerHTML = SituacionEscolar;
    situacionconyugal.innerHTML = SituacionConyugal;
    religion.innerHTML = Religion;


    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;
    slider.oninput = function () {
        output.innerHTML = this.value;
        displays = parseFloat(this.value);
    }
});

function loadAGEBS(displays) {
    if (displays == 0) {
        swal('Mueve el slider para seleccionar el número de zonas a desplegar');
    }
    else {
        swal({
            title: "¿Estás seguro?",
            text: "Esto puede tardar unos minutos\nZonas a desplegar: " + displays,
            icon: "info",
            buttons: true,
            dangerMode: true,
            buttons: {
                cancel: {
                    text: "Cancelar",
                    value: false,
                    visible: true,
                    closeModal: true,
                },
                confirm: {
                    text: "Confirmar",
                    value: true,
                    visible: true,
                    closeModal: true
                }
            }

        })
            .then((willLoad) => {
                if (willLoad) {
                    mapa_agebs.eachLayer(function (layer) {
                        mapa_agebs.removeLayer(layer);
                    });
                    var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        maxZoom: 18,
                        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    }).addTo(mapa_agebs);
                    let displayed = [];
                    for (let i = 0; i < displays; i++) {
                        displayed.push(cvegeos[i]);
                    }

                    const drawAGEBS = 'http://localhost:3000/locationwise/v1/geocode-settlement/';
                    fetch(drawAGEBS)
                        .then(response => response.json())
                        .then(data => {
                            data.forEach(element => {
                                if (displayed.includes(element.cvegeo)) {
                                    let geojson = JSON.parse(element.st_asgeojson);
                                    L.geoJSON(geojson)
                                        .bindPopup(element.cvegeo)
                                        .on('click', function (event) {
                                            let selected_cvegeo = element.cvegeo;
                                            L.popup().setLatLng(event.latlng).setContent(selected_cvegeo).openOn(mapa_agebs);
                                            let cvegeoAPI = 'http://localhost:3000/locationwise/v1/geocode-settlement/' + selected_cvegeo;
                                            fetch(cvegeoAPI)
                                                .then(response => response.json())
                                                .then(data => {
                                                    let pobtot = data[0].pobtot;
                                                    let pobmas = data[0].pobmas;
                                                    let pobfem = data[0].pobfem;
                                                    let lw_economiapred = data[0].lw_economiapred;
                                                    let graproes = data[0].graproes;
                                                    let graproes_f = data[0].graproes_f;
                                                    let graproes_m = data[0].graproes_m;
                                                    let pea = data[0].pea;
                                                    let pe_inac = data[0].pe_inac;
                                                    let p_18ymas_m = data[0].p_18ymas_m;
                                                    let p_18ymas_f = data[0].p_18ymas_f;
                                                    let pob0_14 = data[0].pob0_14;
                                                    let pob65_mas = data[0].pob65_mas;
                                                    let pob15_64 = data[0].pob15_64;
                                                    let pcatolica = data[0].pcatolica;
                                                    let pro_crieva = data[0].pro_crieva;
                                                    let psin_relig = data[0].psin_relig;
                                                    let p12ym_solt = data[0].p12ym_solt;
                                                    let p12ym_casa = data[0].p12ym_casa;
                                                    let p18ym_pb = data[0].p18ym_pb;
                                                    let lw_edprom = data[0].lw_edprom;
                                                    let lw_economia_e = data[0].lw_economia_e;
                                                    let p15ym_se = data[0].p15ym_se;
                                                    let p18a24a = data[0].p18a24a;
                                                    let pocupada = data[0].pocupada;
                                                    let pdesocup = data[0].pdesocup;

                                                    let cvegeoElement = document.getElementById('cvegeo');
                                                    let pobtotElement = document.getElementById('pobtot');
                                                    let pobmasElement = document.getElementById('pobmas');
                                                    let pobfemElement = document.getElementById('pobfem');
                                                    let lw_economiapredElement = document.getElementById('lw_economiapred');
                                                    let graproesElement = document.getElementById('graproes');
                                                    let graproesfElement = document.getElementById('graproes_f');
                                                    let graproesmElement = document.getElementById('graproes_m');
                                                    let peaElement = document.getElementById('pea');
                                                    let pe_inacElement = document.getElementById('pe_inac');
                                                    let p_18ymas_mElement = document.getElementById('p_18ymas_m');
                                                    let p_18ymas_fElement = document.getElementById('p_18ymas_f');
                                                    let pob0_14Element = document.getElementById('pob0_14');
                                                    let pob65_masElement = document.getElementById('pob65_mas');
                                                    let pob15_64Element = document.getElementById('pob15_64');
                                                    let pcatolicaElement = document.getElementById('pcatolica');
                                                    let pro_crievaElement = document.getElementById('pro_crieva');
                                                    let psin_religElement = document.getElementById('psin_relig');
                                                    let p12ym_solElement = document.getElementById('p12ym_solt');
                                                    let p12ym_casaElement = document.getElementById('p12ym_casa');
                                                    let p18ym_pbElement = document.getElementById('p18ym_pb');
                                                    let lw_edpromElement = document.getElementById('lw_edprom');
                                                    let lw_economia_eElement = document.getElementById('lw_economia_e');
                                                    let p15ym_seElement = document.getElementById('p15ym_se');
                                                    let p18a24aElement = document.getElementById('p18a24a');
                                                    let pocupadaElement = document.getElementById('pocupada');
                                                    let pdesocupElement = document.getElementById('pdesocup');

                                                    cvegeoElement.innerHTML = selected_cvegeo;
                                                    pobtotElement.innerHTML = pobtot;
                                                    pobmasElement.innerHTML = pobmas;
                                                    pobfemElement.innerHTML = pobfem;
                                                    lw_economiapredElement.innerHTML = lw_economiapred;
                                                    graproesElement.innerHTML = graproes;
                                                    graproesfElement.innerHTML = graproes_f;
                                                    graproesmElement.innerHTML = graproes_m;
                                                    peaElement.innerHTML = pea;
                                                    pe_inacElement.innerHTML = pe_inac;
                                                    p_18ymas_mElement.innerHTML = p_18ymas_m;
                                                    p_18ymas_fElement.innerHTML = p_18ymas_f;
                                                    pob0_14Element.innerHTML = pob0_14;
                                                    pob65_masElement.innerHTML = pob65_mas;
                                                    pob15_64Element.innerHTML = pob15_64;
                                                    pcatolicaElement.innerHTML = pcatolica;
                                                    pro_crievaElement.innerHTML = pro_crieva;
                                                    psin_religElement.innerHTML = psin_relig;
                                                    p12ym_solElement.innerHTML = p12ym_solt;
                                                    p12ym_casaElement.innerHTML = p12ym_casa;
                                                    p18ym_pbElement.innerHTML = p18ym_pb;
                                                    lw_edpromElement.innerHTML = lw_edprom;
                                                    lw_economia_eElement.innerHTML = lw_economia_e;
                                                    p15ym_seElement.innerHTML = p15ym_se;
                                                    p18a24aElement.innerHTML = p18a24a;
                                                    pocupadaElement.innerHTML = pocupada;
                                                    pdesocupElement.innerHTML = pdesocup;

                                                    let coreNivelSocioeconomico = data[0][NivelSocioeconomicoLabelConst];
                                                    let coreNivelSocioeconomicoElement = document.getElementById('coreNivelSocioeconomico');
                                                    coreNivelSocioeconomicoElement.innerHTML = coreNivelSocioeconomico;

                                                    let coreEdades = data[0][Edades];
                                                    let coreEdadesElement = document.getElementById('coreEdades');
                                                    coreEdadesElement.innerHTML = coreEdades;

                                                    if (Escolaridad != 'No se toma en cuenta') {
                                                        alert(Escolaridad);
                                                        let coreEscolaridad = data[0][Escolaridad];
                                                        let coreEscolaridadElement = document.getElementById('coreEscolaridad');
                                                        coreEscolaridadElement.innerHTML = coreEscolaridad;
                                                    }
                                                    if (SituacionEconomica != 'No se toma en cuenta') {
                                                        let coreSituacionEconomica = data[0][SituacionEconomica];
                                                        let coreSituacionEconomicaElement = document.getElementById('coreSituacionEconomica');
                                                        coreSituacionEconomicaElement.innerHTML = coreSituacionEconomica;
                                                    }
                                                    if (SituacionEscolar != 'No se toma en cuenta') {
                                                        let coreSituacionEscolar = data[0][SituacionEscolar];
                                                        let coreSituacionEscolarElement = document.getElementById('coreSituacionEscolar');
                                                        coreSituacionEscolarElement.innerHTML = coreSituacionEscolar;
                                                    }
                                                    if (SituacionConyugal != 'No se toma en cuenta') {
                                                        let coreSituacionConyugal = data[0][SituacionConyugal];
                                                        let coreSituacionConyugalElement = document.getElementById('coreSituacionConyugal');
                                                        coreSituacionConyugalElement.innerHTML = coreSituacionConyugal;
                                                    }
                                                    if (Religion != 'No se toma en cuenta') {
                                                        let coreReligion = data[0][Religion];
                                                        let coreReligionElement = document.getElementById('coreReligion');
                                                        coreReligionElement.innerHTML = coreReligion;
                                                    }
                                                    if (Limitaciones != 'No se toma en cuenta') {
                                                        let coreLimitaciones = data[0][Limitaciones];
                                                        let coreLimitacionesElement = document.getElementById('coreLimitaciones');
                                                        coreLimitacionesElement.innerHTML = coreLimitaciones;
                                                    }
                                                })
                                                .catch(error => console.error(error));
                                        }).addTo(mapa_agebs);
                                    swal("¡Listo!", "Ya puedes visualizar las zonas", "success");
                                }
                            });

                        }).catch(err => {
                            swal("Error", "Hubo un error.", "error");
                            console.log(err);
                        });
                } else {
                    swal({
                        title: "Ok👍",
                        text: "ok👍",
                        button: "Ok👍",
                    });

                }
            });
    }
}


const similarityButton = document.getElementById('displayZones');
similarityButton.addEventListener('click', () => {
    loadAGEBS(displays);
});
