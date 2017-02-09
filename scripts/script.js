var temp1 = prompt("Enter a temperature:");
var unit1 = prompt("Enter 'F for Fahrenheit or 'C' for Celsius:").toUpperCase();
var temp2;
var unit2;

if (unit1 === "F") {
    unit2 = "C";
} else if (unit1 === "C") {
    unit2 = "F";
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

// function tempConvert(form) {
//     var first = form.tempbox.value;
//     var unit = form.unitbox.value.toUpperCase();
//     second = first + 1 + unit;
//     form.tempbox.value = second;
// }