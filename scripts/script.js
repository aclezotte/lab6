var first = prompt("Enter a temperature:");
var unit = prompt("Enter 'F for Fahrenheit or 'C' for Celsius:");
var second;
if (unit === "F" || unit === "f") {
    console.log("You entered: " + first + "\u00B0F");
    second = first - 32;
    console.log("First I subtract 32 to get: " + second);
    second *= 5;
    console.log("Then I multiply that by 5 to get: " + second);
    second /= 9;
    second = Math.round(second * 10) / 10;
    console.log("Finally I divide that by 9 to get: " + second);
    console.log(first + "\u00B0F is " + second + "\u00B0C.");
} else if (unit === "C" || unit === "c") {
    console.log("You entered: " + first + "\u00B0C");
    second = first * 9;
    console.log("First I multiply by 9 to get: " + second);
    second /= 5;
    second = Math.round(second * 10) / 10;
    console.log("Then I divide that by 5 to get: " + second);
    second += 32;
    console.log("Finally I add 32 to that to get: " + second);
    console.log(first + "\u00B0C is " + second + "\u00B0F.");
}