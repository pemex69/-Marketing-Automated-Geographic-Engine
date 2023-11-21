//CDMX: 19.4, -99.1430056, 11.54
//valid ageb eg 0901600010069
//GeolocationAPI (gets all agebs geojson cdmx) = 'http://localhost:3000/locationwise/v1/geocode-settlement/'
//CVEGEOAPI (gets the ageb given a cvegeo) = 'http://localhost:3000/locationwise/v1/geocode-settlement/:cvegeo'
//wkx path: '../../node_modules/wkx/dist/wkx.js'
let selected_cvegeo = '';
export { selected_cvegeo };
var mapa_agebs = L.map('map').setView([19.4, -99.1430056], 11.54);
export { mapa_agebs };
let lat = '';
let lng = '';

document.addEventListener('DOMContentLoaded', function () {
    let NivelSocioeconomico = localStorage.getItem("NivelSocioeconomico");
    let NivelSocioeconomicoLabelConst = NivelSocioeconomico;
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
    const NivelSocioeconomicoConst = NivelSocioeconomico;
    let Edades = localStorage.getItem("Edades");
    const EdadesConst = Edades;
    let Escolaridad = localStorage.getItem("Escolaridad");
    const EscolaridadConst = Escolaridad;
    let SituacionEconomica = localStorage.getItem("SituacionEconomica");
    const SituacionEconomicaConst = SituacionEconomica;
    let SituacionEscolar = localStorage.getItem("SituacionEscolar");
    const SituacionEscolarConst = SituacionEscolar;
    let SituacionConyugal = localStorage.getItem("SituacionConyugal");
    const SituacionConyugalConst = SituacionConyugal;
    let Religion = localStorage.getItem("Religion");
    const ReligionConst = Religion;
    let Limitaciones = localStorage.getItem("Limitacion");
    const LimitacionesConst = Limitaciones;


    if (NivelSocioeconomico = ! null && NivelSocioeconomico != undefined && NivelSocioeconomico != "" && NivelSocioeconomico != "undefined" && NivelSocioeconomico != 'null') {
        let nivelesocioeconomicolabel = document.createElement("label");
        nivelesocioeconomicolabel.setAttribute("class", "betterlabels");
        nivelesocioeconomicolabel.textContent = NivelSocioeconomicoConst;

        let nivelesocioeconomicopre = document.createElement("pre");
        nivelesocioeconomicopre.setAttribute("id", "coreNivelSocioeconomico");
        nivelesocioeconomicopre.textContent = `Selecciona un punto en el mapa . . .`

        let nivelesocioeconomicocontainer = document.getElementById("customAtributes");
        nivelesocioeconomicocontainer.appendChild(nivelesocioeconomicolabel);
        nivelesocioeconomicocontainer.appendChild(nivelesocioeconomicopre);
    }

    if (Edades = ! null && Edades != undefined && Edades != "" && Edades != "undefined" && Edades != 'null') {
        let edadeslabel = document.createElement("label");
        edadeslabel.setAttribute("class", "betterlabels");
        edadeslabel.textContent = EdadesConst;

        let edadespre = document.createElement("pre");
        edadespre.setAttribute("id", "coreEdades");
        edadespre.textContent = `Selecciona un punto en el mapa . . .`

        let edadescontainer = document.getElementById("customAtributes");
        edadescontainer.appendChild(edadeslabel);
        edadescontainer.appendChild(edadespre);
    }
    if (Escolaridad = ! null && Escolaridad != undefined && Escolaridad != "" && Escolaridad != "undefined" && Escolaridad != 'null') {
        let escolaridadlabel = document.createElement("label");
        escolaridadlabel.setAttribute("class", "betterlabels");
        escolaridadlabel.textContent = EscolaridadConst;

        let escolaridadpre = document.createElement("pre");
        escolaridadpre.setAttribute("id", "coreEscolaridad");
        escolaridadpre.textContent = `Selecciona un punto en el mapa . . .`

        let escolaridadcontainer = document.getElementById("customAtributes");
        escolaridadcontainer.appendChild(escolaridadlabel);
        escolaridadcontainer.appendChild(escolaridadpre);
    }
    if (SituacionEconomica = ! null && SituacionEconomica != undefined && SituacionEconomica != "" && SituacionEconomica != "undefined" && SituacionEconomica != 'null') {
        let situacioneconomicalabel = document.createElement("label");
        situacioneconomicalabel.setAttribute("class", "betterlabels");
        situacioneconomicalabel.textContent = SituacionEconomicaConst;

        let situacioneconomicapre = document.createElement("pre");
        situacioneconomicapre.setAttribute("id", "coreSituacionEconomica");
        situacioneconomicapre.textContent = `Selecciona un punto en el mapa . . .`

        let situacioneconomicacontainer = document.getElementById("customAtributes");
        situacioneconomicacontainer.appendChild(situacioneconomicalabel);
        situacioneconomicacontainer.appendChild(situacioneconomicapre);
    }
    if (SituacionEscolar = ! null && SituacionEscolar != undefined && SituacionEscolar != "" && SituacionEscolar != "undefined" && SituacionEscolar != 'null') {
        let situacionescolarlabel = document.createElement("label");
        situacionescolarlabel.setAttribute("class", "betterlabels");
        situacionescolarlabel.textContent = SituacionEscolarConst;

        let situacionescolarpre = document.createElement("pre");
        situacionescolarpre.setAttribute("id", "coreSituacionEscolar");
        situacionescolarpre.textContent = `Selecciona un punto en el mapa . . .`

        let situacionescolarcontainer = document.getElementById("customAtributes");
        situacionescolarcontainer.appendChild(situacionescolarlabel);
        situacionescolarcontainer.appendChild(situacionescolarpre);
    }
    if (SituacionConyugal = ! null && SituacionConyugal != undefined && SituacionConyugal != "" && SituacionConyugal != "undefined" && SituacionConyugal != 'null') {
        let situacionconyugallabel = document.createElement("label");
        situacionconyugallabel.setAttribute("class", "betterlabels");
        situacionconyugallabel.textContent = SituacionConyugalConst;

        let situacionconyugalpre = document.createElement("pre");
        situacionconyugalpre.setAttribute("id", "coreSituacionConyugal");
        situacionconyugalpre.textContent = `Selecciona un punto en el mapa . . .`

        let situacionconyugalcontainer = document.getElementById("customAtributes");
        situacionconyugalcontainer.appendChild(situacionconyugallabel);
        situacionconyugalcontainer.appendChild(situacionconyugalpre);
    }
    if (Religion = ! null && Religion != undefined && Religion != "" && Religion != "undefined" && Religion != 'null') {
        let religionlabel = document.createElement("label");
        religionlabel.setAttribute("class", "betterlabels");
        religionlabel.textContent = ReligionConst;

        let religionpre = document.createElement("pre");
        religionpre.setAttribute("id", "coreReligion");
        religionpre.textContent = `Selecciona un punto en el mapa . . .`

        let religioncontainer = document.getElementById("customAtributes");
        religioncontainer.appendChild(religionlabel);
        religioncontainer.appendChild(religionpre);
    }

    if (Limitaciones = ! null && Limitaciones != undefined && Limitaciones != "" && Limitaciones != "undefined" && Limitaciones != 'null') {
        let limitacionlabel = document.createElement("label");
        limitacionlabel.setAttribute("class", "betterlabels");
        limitacionlabel.textContent = LimitacionesConst;

        let limitacionpre = document.createElement("pre");
        limitacionpre.setAttribute("id", "coreLimitaciones");
        limitacionpre.textContent = `Selecciona un punto en el mapa . . .`

        let limitacioncontainer = document.getElementById("customAtributes");
        limitacioncontainer.appendChild(limitacionlabel);
        limitacioncontainer.appendChild(limitacionpre);
    }



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
                        lat = event.latlng.lat;
                        lng = event.latlng.lng;
                        let latlngliteral = 'https://nominatim.openstreetmap.org/reverse?format=xml&lat=' + lat + '&' + 'lon=' + lng + '&zoom=18&addressdetails=1';
                        fetch(latlngliteral)
                            .then(response => response.text())
                            .then(data => {
                                // parse the XML response
                                const parser = new DOMParser();
                                const xmlDoc = parser.parseFromString(data, "text/xml");
                                // get the result element and its text content
                                const resultElement = xmlDoc.getElementsByTagName("result")[0];
                                let resultText = resultElement.textContent;
                                console.log("im" + resultText);
                                L.popup().setLatLng(event.latlng).setContent(resultText).openOn(mapa_agebs);
                            })
                            .catch(error => {
                                console.log(error);
                            });
                        // L.popup().setLatLng(event.latlng).setContent(selected_cvegeo).openOn(mapa_agebs);
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

                                if (NivelSocioeconomico) {
                                    let coreNivelSocioeconomico = data[0][NivelSocioeconomicoLabelConst];
                                    let coreNivelSocioeconomicoElement = document.getElementById('coreNivelSocioeconomico');
                                    coreNivelSocioeconomicoElement.innerHTML = coreNivelSocioeconomico;
                                }
                                if (Edades) {
                                    let coreEdades = data[0][EdadesConst];
                                    let coreEdadesElement = document.getElementById('coreEdades');
                                    coreEdadesElement.innerHTML = coreEdades;
                                }
                                if (Escolaridad) {
                                    let coreEscolaridad = data[0][EscolaridadConst];
                                    let coreEscolaridadElement = document.getElementById('coreEscolaridad');
                                    coreEscolaridadElement.innerHTML = coreEscolaridad;
                                }
                                if (SituacionEconomica) {
                                    let coreSituacionEconomica = data[0][SituacionEconomicaConst];
                                    let coreSituacionEconomicaElement = document.getElementById('coreSituacionEconomica');
                                    coreSituacionEconomicaElement.innerHTML = coreSituacionEconomica;
                                }
                                if (SituacionEscolar) {
                                    let coreSituacionEscolar = data[0][SituacionEscolarConst];
                                    let coreSituacionEscolarElement = document.getElementById('coreSituacionEscolar');
                                    coreSituacionEscolarElement.innerHTML = coreSituacionEscolar;
                                }
                                if (SituacionConyugal) {
                                    let coreSituacionConyugal = data[0][SituacionConyugalConst];
                                    let coreSituacionConyugalElement = document.getElementById('coreSituacionConyugal');
                                    coreSituacionConyugalElement.innerHTML = coreSituacionConyugal;
                                }
                                if (Religion) {
                                    let coreReligion = data[0][ReligionConst];
                                    let coreReligionElement = document.getElementById('coreReligion');
                                    coreReligionElement.innerHTML = coreReligion;
                                }
                                if (Limitaciones) {
                                    let coreLimitaciones = data[0][LimitacionesConst];
                                    let coreLimitacionesElement = document.getElementById('coreLimitaciones');
                                    coreLimitacionesElement.innerHTML = coreLimitaciones;
                                }
                            })
                            .catch(error => console.error(error));

                    })
                    .addTo(mapa_agebs);
            });
        })
        .catch(error => console.error(error));
});