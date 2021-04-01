const
    inputRadius = document.getElementById("input-radius"),
    inputHeight = document.getElementById("input-height"),
    buttonCalculate = document.getElementById("button-calculate"),
    displayBox = document.getElementById("display-box");

function calculateButtonClick() {

    let
        radius = inputRadius.value,
        height = inputHeight.value,
        result = 0;

    if (radius > 0 && height > 0) {

        result = calculate(radius, height);
        display(result);

    } else {
        result = false;
        display(result);
    }

}

function calculate(r, h) {

    let resultExact, resultRound;

    resultExact = Math.pow(r, 2) * Math.PI * h;
    resultRound = resultExact.toFixed(2);
    return resultRound;

}

function display(res) {

    let message = "";

    if (res) {
        message = "Rezultat je: " + res;
        displayBox.innerHTML = message;
    } else {
        message = "Loši ulazni parametri!";
        displayBox.innerHTML = message;
    }

}

buttonCalculate.onclick = calculateButtonClick;