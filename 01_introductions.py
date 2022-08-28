#!/usr/bin/env python3

# Python 3.9.5

# 01_introductions.py

values_fahrenheit = [65, 80, 92, 70, 63, 72]
values_celsius = [round((value - 32) * (5/9), 2) for value in values_fahrenheit]

print("Values in Fahrenheit: " + str(values_fahrenheit))
print("Values in Celsius: " + str(values_celsius))
