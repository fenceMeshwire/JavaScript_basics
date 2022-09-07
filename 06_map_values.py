#!/usr/bin/env python3

# Python 3.9.5

# 06_map_values.py

# Dependency
import random

data = [random.randint(1, 31) for i in range(20)]
smaller_ten = [value < 10 for value in data]
print(smaller_ten)
