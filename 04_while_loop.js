var sum = 0;
while(sum < 4) {
    number = Math.round(Math.random());
    if (number == 0) {number += 1};
    sum += number;
    document.write(sum + "<br>");
}
