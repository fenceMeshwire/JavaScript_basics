// Filter prices from an array to prices within a range
const prices = [15, 13, 9, 19, 7, 4, 21, 12];
const prices_in_range = prices.filter(function(price) {
    return price < 10;
});

document.write("Filtering prices for prices in range:", prices, "<br>");
document.write("Prices in range:", prices_in_range, "<br>");
