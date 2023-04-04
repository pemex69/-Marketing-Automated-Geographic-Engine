//CDMX: 19.4, -99.1430056, 11.54
//geojson relative path: ../geojson/AGEBS CDMX.geojson

//TODO: connect conn.js nodejs file
document.addEventListener('DOMContentLoaded', function (mapload) {
    //Crea el mapa con leaflet
    var mapa_agebs = L.map('map').setView([19.4, -99.1430056], 11.54);
    //Agrega el mapa de OpenStreetMap
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18
    }).addTo(mapa_agebs);
    //Agrega el geojson
    var geojsonLayer = new L.GeoJSON.AJAX("../geojson/AGEBS CDMX.geojson", {
        onEachFeature: function (feature, layer) {
            layer.on('click', function (e) {
                var id = feature.properties.CVEGEO;
                layer.bindPopup("AGEB seleccionado: " + id).openPopup();
                //easter eggs
                if (id == 0900500010154) {
                    layer.bindPopup("¿Qúe puedes vender en el reclusorio norte . . .💀💀💀💀").openPopup();
                }
                if (id == 0901600010035) {
                    layer.bindPopup("Eso es un panteón nadamás. . .'").openPopup();
                }
                if (id == 0900500010807) {
                    layer.bindPopup("Acá no hay nadie . . .").openPopup();
                }
                if (id == 0901600010069) {
                    layer.bindPopup("las mejores siestas de mi vida\n Clave de AGEB: 0901600010069").openPopup();
                }
                if (id == 0900300010770) {
                    layer.bindPopup("Mi alma mater🥵😹👻🙀😵🤭🤪").openPopup();
                }
                if (id == 0901700010140) {
                    layer.bindPopup("AIFA'nt").openPopup();
                }




            });
        }
    }).addTo(mapa_agebs);
});


function geolocate() {
    alert("Geolocalizando...");
}