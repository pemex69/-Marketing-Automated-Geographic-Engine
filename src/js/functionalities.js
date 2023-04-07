const viewMoreBtn = document.getElementById('viewMoreBtn');
const moreInfo = document.getElementById('moreInfo');

viewMoreBtn.addEventListener('click', () => {
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
        viewMoreBtn.innerText = 'Ver menos';
    } else {
        moreInfo.style.display = 'none';
        viewMoreBtn.innerText = 'Ver más';
    }
});


function geolocate() {
    alert('tbc . . .');
}