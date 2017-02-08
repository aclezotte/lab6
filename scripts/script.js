var first = prompt("Enter a temperature:");
var firstUnit = prompt("Enter 'F for Fahrenheit or 'C' for Celsius:").toUpperCase();
var second;
var secondUnit;

if (firstUnit === "F") {
    secondUnit = "C";
} else if (firstUnit === "C") {
    secondUnit = "F";
}

if (firstUnit === "F") {
    console.log("You entered: " + first + "\u00B0" + firstUnit);
    second = first - 32;
    console.log("First I subtract 32 to get: " + second);
    second *= 5;
    console.log("Then I multiply that by 5 to get: " + second);
    second /= 9;
    second = Math.round(second * 10) / 10;
    console.log("Finally I divide that by /9 to get: " + second);
    console.log(first + "\u00B0" + firstUnit + " is " + second + "\u00B0" + secondUnit + ".");
} else if (firstUnit === "C") {
    console.log("You entered: " + first + "\u00B0C");
    second = first * 9;
    console.log("First I multiply by 9 to get: " + second);
    second /= 5;
    second = Math.round(second * 10) / 10;
    console.log("Then I divide that by 5 to get: " + second);
    second += 32;
    console.log("Finally I add 32 to that to get: " + second);
    console.log(first + "\u00B0" + firstUnit + " is " + second + "\u00B0" + secondUnit + ".");
}

// function tempConvert(form) {
//     var first = form.tempbox.value;
//     var unit = form.unitbox.value.toUpperCase();
//     second = first + 1 + unit;
//     form.tempbox.value = second;
// }