//CDMX: 19.4, -99.1430056, 11.54
//valid ageb eg 0901600010069
//GeolocationAPI (gets all agebs geojson cdmx) = 'http://localhost:3000/locationwise/v1/geocode-settlement/'

//wkx path: '../../node_modules/wkx/dist/wkx.js'

//CDMX: 19.4, -99.1430056, 11.54
//valid ageb eg 0901600010069
//GeolocationAPI (gets all agebs geojson cdmx) = 'http://localhost:3000/locationwise/v1/geocode-settlement/'

//wkx path: '../../node_modules/wkx/dist/wkx.js'

document.addEventListener('DOMContentLoaded', function () {
    var mapa_agebs = L.map('map').setView([19.4, -99.1430056], 11.54);
    var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapa_agebs);
    alert("map loaded");
    //Fetching an API that gets a WKB geometry from database as string
    //Parse the string into a wkb object and then into a geojson object
    const GetAllSettlementsURL = 'http://localhost:3000/locationwise/v1/geocode-settlement/';
    fetch(GetAllSettlementsURL)
        .then(response => response.json())
        .then(data => {
            alert("data fetched");
            alert("data logged");
            data.forEach(element => {
                var wkb = wkx.Geometry.parse(Buffer.from(element.CVEGEO, 'hex'));
                var geojson = wkb.toGeoJSON();
                L.geoJSON(geojson).addTo(mapa_agebs);
            });
        })
        .catch(error => console.error(error));
});
