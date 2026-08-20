document.getElementById('verifier').addEventListener('click', function() {

    let valeurAge = document.getElementById("age").value;

    if (valeurAge === "") {
        document.getElementById('resultat').textContent = 'Veuillez renseigner un âge';

    } else {

        let age = Number(valeurAge);

        if ( age >= 18 ) {
            document.getElementById('resultat').textContent = 'Tu es majeur';
        } else {
            document.getElementById('resultat').textContent = 'Tu es mineur';
        }
    }
})