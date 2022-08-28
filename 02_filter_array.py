#!/usr/bin/env python3

# Python 3.9.5

# 02_filter_prices.py

prices = [15, 13, 9, 19, 7, 4, 21, 12]
prices_in_range = [price for price in prices if price < 10]

print("Filtering prices for prices in range:", prices)
print("Prices in range:", prices_in_range)
