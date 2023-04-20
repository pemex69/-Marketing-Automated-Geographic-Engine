const viewMoreBtn = document.getElementById('viewMoreBtn');
const moreInfo = document.getElementById('moreInfo');

const viewMoreBtn2 = document.getElementById('viewMoreBtn2');
const moreInfo2 = document.getElementById('moreInfo2');

viewMoreBtn2.addEventListener('click', () => {
    if (moreInfo2.style.display === 'none') {
        moreInfo2.style.display = 'block';
        viewMoreBtn2.innerText = 'Ver menos';
    } else {
        moreInfo2.style.display = 'none';
        viewMoreBtn2.innerText = 'Ver más';
    }
});

viewMoreBtn.addEventListener('click', () => {
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
        viewMoreBtn.innerText = 'Ver menos';
    } else {
        moreInfo.style.display = 'none';
        viewMoreBtn.innerText = 'Ver más';
    }
});
