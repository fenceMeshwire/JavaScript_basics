#!/usr/bin/env python3

# Python 3.9.5

# 05_do_while.py

# Please note: A do-while-loop does not exist in Python3.
# A workaround is the regular while loop.

# Dependency
import random

random_number = random.randint(1, 100)
counter = 0
counter_lst = []

print('Random number:', random_number)
print('Iterations until random number (i=5)')
print('Last iteration is a smaller step (i<5)')
print('Iterations:')

while counter < random_number:
    counter += 1
    if (counter % 5) == 0:
        counter_lst.append(counter)

if counter == random_number: 
    counter_lst.append(counter)

print(counter_lst)
