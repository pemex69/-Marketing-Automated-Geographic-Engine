//CDMX: 19.4, -99.1430056, 11.54
//valid ageb eg 0901600010069
//GeolocationAPI (gets all agebs geojson cdmx) = 'http://localhost:3000/locationwise/v1/geocode-settlement/'
//CVEGEOAPI (gets the ageb given a cvegeo) = 'http://localhost:3000/locationwise/v1/geocode-settlement/:cvegeo'
//wkx path: '../../node_modules/wkx/dist/wkx.js'
let selected_cvegeo = '';
export { selected_cvegeo };
var mapa_agebs = L.map('map').setView([19.4, -99.1430056], 11.54);
export { mapa_agebs };

document.addEventListener('DOMContentLoaded', function () {
    var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapa_agebs);

    //Fetching an API that gets a WKB geometry from database as string
    //Parse the string into a wkb object and then into a geojson object
    const drawAGEBS = 'http://localhost:3000/locationwise/v1/geocode-settlement/';
    fetch(drawAGEBS)
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                let geojson = JSON.parse(element.st_asgeojson);
                L.geoJSON(geojson)
                    .bindPopup(element.cvegeo) // Display cvegeo on a popup
                    .on('click', function (event) {
                        selected_cvegeo = element.cvegeo; // Update selected cvegeo when polygon is clicked
                        console.log(selected_cvegeo);
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
                                //
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
                                //
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

                    })
                    .addTo(mapa_agebs);
            });
        })
        .catch(error => console.error(error));
});