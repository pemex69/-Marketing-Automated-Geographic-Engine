//valid query eg SELECT * FROM "Consults_schema"."AGEB DATA CDMX" WHERE pobtot BETWEEN 3505.44 AND 6958.5599999999995 AND lw_economiapred = 'D' AND graproes BETWEEN 7.684900000000001 AND 15.2551 AND lw_edprom BETWEEN 24.503149847094814 AND 48.640581039755375

let cvegeo = '';
let resultText = '';
let similarityPercent = 0;
let agebData = [];
import { mapa_agebs } from "./maps.js";

document.addEventListener('DOMContentLoaded', () => {
    cvegeo = localStorage.getItem("cvegeo");
    resultText = localStorage.getItem("resultText");
    if (cvegeo != null && cvegeo != undefined) {
        const agebAns = document.getElementById('agebAns');
        agebAns.innerHTML = resultText;
        const agebspan = document.getElementById('agebspan');
        agebspan.innerHTML = resultText;

        let cvegeoAPI = 'http://localhost:3000/locationwise/v1/geocode-settlement/' + cvegeo;
        fetch(cvegeoAPI)
            .then(response => response.json())
            .then(data => {
                let cvegeo2 = data[0].cvegeo;
                let pobtot2 = data[0].pobtot;
                let pobmas2 = data[0].pobmas;
                let pobfem2 = data[0].pobfem;
                let lw_economiapred2 = data[0].lw_economiapred;
                let graproes2 = data[0].graproes;
                let graproes_f2 = data[0].graproes_f;
                let graproes_m2 = data[0].graproes_m;
                let pea2 = data[0].pea;
                let pe_inac2 = data[0].pe_inac;
                let p_18ymas_m2 = data[0].p_18ymas_m;
                let p_18ymas_f2 = data[0].p_18ymas_f;
                let pob0_142 = data[0].pob0_14;
                let pob65_mas2 = data[0].pob65_mas;
                let pob15_642 = data[0].pob15_64;
                let pcatolica2 = data[0].pcatolica;
                let pro_crieva2 = data[0].pro_crieva;
                let psin_relig2 = data[0].psin_relig;
                let p12ym_solt2 = data[0].p12ym_solt;
                let p12ym_casa2 = data[0].p12ym_casa;
                let p18ym_pb2 = data[0].p18ym_pb;
                let lw_edprom2 = data[0].lw_edprom;
                let lw_economia_e2 = data[0].lw_economia_e;
                let p15ym_se2 = data[0].p15ym_se;
                let p18a24a2 = data[0].p18a24a;
                let pocupada2 = data[0].pocupada;
                let pdesocup2 = data[0].pdesocup;

                let cvegeo = document.getElementById('cvegeo2');
                let pobtot = document.getElementById('pobtot2');
                let pobmas = document.getElementById('pobmas2');
                let pobfem = document.getElementById('pobfem2');
                let lw_economiapred = document.getElementById('lw_economiapred2');
                let graproes = document.getElementById('graproes2');
                let graproes_f = document.getElementById('graproes_f2');
                let graproes_m = document.getElementById('graproes_m2');
                let pea = document.getElementById('pea2');
                let pe_inac = document.getElementById('pe_inac2');
                let p_18ymas_m = document.getElementById('p_18ymas_m2');
                let p_18ymas_f = document.getElementById('p_18ymas_f2');
                let pob0_14 = document.getElementById('pob0_142');
                let pob65_mas = document.getElementById('pob65ymas2');
                let pob15_64 = document.getElementById('pob15_642');
                let pcatolica = document.getElementById('pcatolica2');
                let pro_crieva = document.getElementById('pro_crieva2');
                let psin_relig = document.getElementById('psin_relig2');
                let p12ym_solt = document.getElementById('p12ym_solt2');
                let p12ym_casa = document.getElementById('p12ym_casa2');
                let p18ym_pb = document.getElementById('p18ym_pb2');
                let lw_edprom = document.getElementById('lw_edprom2');
                let lw_economia_e = document.getElementById('lw_economia_e2');
                let p15ym_se = document.getElementById('p15ym_se2');
                let p18a24a = document.getElementById('p18a24a2');
                let pocupada = document.getElementById('pocupada2');
                let pdesocup = document.getElementById('pdesocup2');

                cvegeo.innerHTML = cvegeo2;
                pobtot.innerHTML = pobtot2;
                pobmas.innerHTML = pobmas2;
                pobfem.innerHTML = pobfem2;
                lw_economiapred.innerHTML = lw_economiapred2;
                graproes.innerHTML = graproes2;
                graproes_f.innerHTML = graproes_f2;
                graproes_m.innerHTML = graproes_m2;
                pea.innerHTML = pea2;
                pe_inac.innerHTML = pe_inac2;
                p_18ymas_m.innerHTML = p_18ymas_m2;
                p_18ymas_f.innerHTML = p_18ymas_f2;
                pob0_14.innerHTML = pob0_142;
                pob65_mas.innerHTML = pob65_mas2;
                pob15_64.innerHTML = pob15_642;
                pcatolica.innerHTML = pcatolica2;
                pro_crieva.innerHTML = pro_crieva2;
                psin_relig.innerHTML = psin_relig2;
                p12ym_solt.innerHTML = p12ym_solt2;
                p12ym_casa.innerHTML = p12ym_casa2;
                p18ym_pb.innerHTML = p18ym_pb2;
                lw_edprom.innerHTML = lw_edprom2;
                lw_economia_e.innerHTML = lw_economia_e2;
                p15ym_se.innerHTML = p15ym_se2;
                p18a24a.innerHTML = p18a24a2;
                pocupada.innerHTML = pocupada2;
                pdesocup.innerHTML = pdesocup2;

            });




        var slider = document.getElementById("myRange");
        var output = document.getElementById("demo");
        output.innerHTML = slider.value;
        slider.oninput = function () {
            output.innerHTML = this.value;
            similarityPercent = parseFloat(this.value);
        }
    } else {
        alert('Nodemon is off, please turn it on to use the app\nNodemon está apagado, por favor enciéndelo para usar la app\nnpm start\n\n\no no tienes tu token de cvegeo que cagado');
    }
});

//MAIN FUNCTION
function getSimilarSettlements(cvegeo, similarity) {
    if (similarity == 0) {
        swal('Mueve el slider para seleccionar un porcentaje de similaridad');
    }
    else {

        swal({
            title: similarity + "%",
            text: "¿Estás seguro del porcentaje de similaridad seleccionado? ",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            html: true
        })
            .then((willProceed) => {

                if (willProceed) {
                    swal(`En caso de inexistencia de AGEBS reintentar con un porcentaje más bajo o contactar a helpme.mage@gmail.com\n
            Obteniendo AGEBS similares para ${cvegeo} con un porcentaje de similaridad del ${similarity}% . . .`)
                    let AGEBData = 'http://localhost:3000/locationwise/v1/geocode-settlement/' + cvegeo;
                    fetch(AGEBData)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);

                            let pobtot = parseFloat(data[0].pobtot);
                            let lw_economiapred = data[0].lw_economiapred.toString();
                            let graproes = parseFloat(data[0].graproes);
                            let lw_edprom = parseFloat(data[0].lw_edprom);

                            let percent = similarity * 0.01;
                            let pobtotSTART = parseFloat(pobtot * percent);
                            let pobtotEND = parseFloat(pobtot + (pobtot - pobtotSTART));
                            let graproesSTART = parseFloat(graproes * percent);
                            let graproesEND = parseFloat(graproes + (graproes - graproesSTART));
                            let lw_edpromSTART = parseFloat(lw_edprom * percent);
                            let lw_edpromEND = parseFloat(lw_edprom + (lw_edprom - lw_edpromSTART));

                            if (lw_economiapred == 'A/B') {
                                lw_economiapred = 'A%2FB';
                            }

                            let similarSettlements = 'http://localhost:3000/locationwise/v1/geocode-settlement/getsimilarsettlements/' + lw_economiapred + '/' + pobtotSTART + '/' + pobtotEND + '/' + graproesSTART + '/' + graproesEND + '/' + lw_edpromSTART + '/' + lw_edpromEND;
                            fetch(similarSettlements)
                                .then(response => response.json())
                                .then(data => {
                                    console.log("in: " + similarSettlements);
                                    let cvegeos = [];
                                    for (let i = 0; i < data.length; i++) {
                                        cvegeos.push(data[i].cvegeo);
                                    }
                                    cvegeos = cvegeos.filter(function (item) {
                                        return item !== cvegeo
                                    });

                                    console.log(cvegeos);

                                    if (cvegeos.length == 0) {
                                        swal({
                                            title: "Sin resultados",
                                            text: "No se han encontrado AGEBS similares, intente con una menor similaridad",
                                            icon: "error",
                                            button: "Continuar",
                                            html: true
                                        })
                                            .then((willProceed) => {
                                                //null
                                            });
                                    }
                                    else {
                                        swal({
                                            title: "Éxito",
                                            text: "Se han encontrado " + cvegeos.length + " AGEBS similares\nDesplegando en mapa . . .",
                                            icon: "success",
                                            button: "Continuar",
                                            html: true
                                        })
                                            .then((willProceed) => {
                                                if (willProceed) {
                                                    // Remove all GeoJSON layers from the map
                                                    mapa_agebs.eachLayer(function (layer) {
                                                        mapa_agebs.removeLayer(layer);
                                                    });
                                                    var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                                                        maxZoom: 18,
                                                        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                                    }).addTo(mapa_agebs);
                                                    const drawAGEBS = 'http://localhost:3000/locationwise/v1/geocode-settlement/';
                                                    fetch(drawAGEBS)
                                                        .then(response => response.json())
                                                        .then(data => {

                                                            data.forEach(element => {
                                                                //if cvegeo is on array of cvegeos displays it on map
                                                                if (cvegeos.includes(element.cvegeo)) {
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
                                                                                    console.log(data);
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
                                                                                }
                                                                                )
                                                                                .catch(error => console.error(error));
                                                                        }).addTo(mapa_agebs);

                                                                }
                                                            });
                                                        });
                                                }
                                            });
                                    }
                                })
                                .catch(error => console.log("Second promise error - " + error));

                        })
                        .catch(error => console.log("First promise error - " + error));
                } else {
                    swal("No te preocupes, tienes cálculos ilimitados");
                }
            });
    }
}

const similarityButton = document.getElementById('similarityButton');
similarityButton.addEventListener('click', () => {
    getSimilarSettlements(cvegeo, similarityPercent);
});
