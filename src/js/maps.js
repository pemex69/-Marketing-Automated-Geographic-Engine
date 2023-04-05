//CDMX: 19.4, -99.1430056, 11.54
document.addEventListener('DOMContentLoaded', function (mapload) {
    const map = L.map('map').setView([19.4, -99.1430056], 11.54);
    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
});