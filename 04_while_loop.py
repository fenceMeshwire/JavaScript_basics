#/!usr/bin/env python3

# Python 3.9.5

# 04_while_loop.py

# Dependency
import random

number, sum = 0, 0

while sum < 4:
    number += random.randint(0, 3)
    sum += number
  
print(sum)
