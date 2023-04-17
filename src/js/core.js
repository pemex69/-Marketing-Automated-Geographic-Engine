let cvegeo = '';
let similarityPercent = 0;

document.addEventListener('DOMContentLoaded', () => {
    cvegeo = localStorage.getItem("cvegeo");
    if (cvegeo != null && cvegeo != undefined) {
        const agebAns = document.getElementById('agebAns');
        agebAns.innerHTML = cvegeo;
        const agebspan = document.getElementById('agebspan');
        agebspan.innerHTML = cvegeo;

        var slider = document.getElementById("myRange");
        var output = document.getElementById("demo");
        output.innerHTML = slider.value;
        slider.oninput = function () {
            output.innerHTML = this.value;
            similarityPercent = this.value;
        }
    } else {
        alert('what the actual fuck');
    }
});

function getSimilarSettlements(cvegeo, similarity) {
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
                swal(`En caso de inexistncia de AGEBS reintentar con un porcentaje más bajo o contactar a helpme.mage@gmail.com\n
                Obteniendo AGEBS similares para ${cvegeo} con un porcentaje de similaridad del ${similarity}% . . .`)
                console.log(`cvegeo: ${cvegeo}, percentage: ${similarity}%`);

                let AGEBData = 'http://localhost:3000/locationwise/v1/geocode-settlement/' + cvegeo;
                fetch(AGEBData)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        //TODO make similarity logic
                    })
                    .catch(error => console.log(error));
                let AllSettlements = 'http://localhost:3000/locationwise/v1/geocode-settlements';
                fetch(AllSettlements)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        //TODO make similarity logic
                    })
                    .catch(error => console.log(error));
            } else {
                swal("No te preocupes, tienes cálculos ilimitados");
            }
        });
}


const similarityButton = document.getElementById('similarityButton');
similarityButton.addEventListener('click', () => {
    getSimilarSettlements(cvegeo, similarityPercent);
});
