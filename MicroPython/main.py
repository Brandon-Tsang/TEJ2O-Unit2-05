"""
Created by: Mr. Coxall
Created on: Sep 2020
This module is a Micro:bit MicroPython program
"""

from microbit import *

display.clear()
display.show(Image.HAPPY)

while True:
    if button_a.is_pressed():
        current_temperature = temperature()
        display.show ("The Temperature is: " str(Math.round(currentTemperature + 273.15)) + " K.")
