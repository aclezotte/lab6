function tempConvert(temp1, unit2) {
    unit2 = unit2.toUpperCase();
    
    var temp2;
    var unit1;
    
    if (unit2 === "F") {
        unit1 = "C";
    } else if (unit2 === "C") {
        unit1 = "F";
    }
    
    if (unit1 === "F") {
        temp2 = (temp1 - 32) * 5 / 9;
        temp2 = Math.round(temp2 * 10) / 10;
        console.log(temp1 + "\u00B0" + unit1 + " is " + temp2 + "\u00B0" + unit2 + ".");
    } else if (unit1 === "C") {
        temp2 = temp1 * 9 / 5 + 32;
        temp2 = Math.round(temp2 * 10) / 10;
        console.log(temp1 + "\u00B0" + unit1 + " is " + temp2 + "\u00B0" + unit2 + ".");
    }
}

tempConvert(7, "f");


function tempConvertBox(form) {
    var temp1 = form.tempBox.value;
    var unit2 = form.unitBox.value.toUpperCase();
    
    var temp2;
    var unit1;
    
    if (unit2 === "F") {
        unit1 = "C";
    } else if (unit2 === "C") {
        unit1 = "F";
    }
    
    if (unit1 === "F") {
        temp2 = (temp1 - 32) * 5 / 9;
        temp2 = Math.round(temp2 * 10) / 10;
        form.startBox.value = temp1 + "\u00B0" + unit1;
        document.getElementById('startLabel').innerHTML = "Celsius:";
        form.resultBox.value = temp2 + "\u00B0" + unit2;
        document.getElementById('resultLabel').innerHTML = "Fahrenheit:";
    } else if (unit1 === "C") {
        temp2 = temp1 * 9 / 5 + 32;
        temp2 = Math.round(temp2 * 10) / 10;
        form.startBox.value = temp1 + "\u00B0" + unit1;
        document.getElementById('startLabel').innerHTML = "Fahrenheit:";
        form.resultBox.value = temp2 + "\u00B0" + unit2;
        document.getElementById('resultLabel').innerHTML = "Celsius:";
    }
}