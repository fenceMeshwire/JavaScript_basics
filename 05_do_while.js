// 05_do_while.js

var random_number = Math.random() * 100 + 1;
var int_random_number = Math.floor(random_number);
var counter = 0;

document.write("Random number: ", int_random_number, "<br>");
document.write("<br>");
document.write("Iterations until random number (i=5).<br>");
document.write("Last iteration is a smaller step (i<5).<br>");
document.write("<br>Iterations:<br>");
do 
{
    if (counter < int_random_number) {
        counter++;
        if (counter%5 === 0) {
            document.write(counter, ", ");
        }
    } 
}
while (int_random_number != counter);

if (int_random_number === counter) {
    document.write(counter, "<br>");
}
