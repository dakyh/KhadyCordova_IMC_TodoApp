function calculerIMC() {
    const poids = document.getElementById('poids');
    const taille = document.getElementById('taille');

    const imc = poids.value / Math.pow(taille.value, 2);

    let interpretation = "Vous êtes en état";

    if (imc < 16.5) {
        interpretation += " de dénutrition";
    } else if (imc < 18.5) {
        interpretation += " de maigreur";
    } else if (imc < 25) {
        interpretation = " Vous  avez un poids normal";
    } else if (imc < 30) {
        interpretation += " de surpoids";
    } else if (imc < 35) {
        interpretation += " de obésité modérée";
    } else if (imc < 40) {
        interpretation += " de obésité sévère";
    } else {
        interpretation += " de obésité morbide ou massive";
    }

    let message = `Votre IMC est : ${imc.toFixed(2)} <hr> ${interpretation}`;

    const resultArea = document.querySelector("span");
    resultArea.innerHTML = message;
    resultArea.parentElement.hidden = false;
}
