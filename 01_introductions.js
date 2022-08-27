// Converter from Fahrenheit to Celsius
const values_fahrenheit = [65, 80, 92, 70, 63, 72];
const values_celsius = [];
for (const element of fahrenheit) {
  let value_celsius = (element - 32) * (5/9);
  values_celsius.push(value_celsius);
}
document.write("Values in Fahrenheit: " + values_fahrenheit + "<br>")
document.write("Values in Celsius: " + values_celsius + "<br>")
