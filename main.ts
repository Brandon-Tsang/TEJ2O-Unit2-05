/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Brandon
 * Created on: Feb 2026
 * This program will tell me the temperature in kelvin.
*/

let currentTemperature: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    let currentTemperature = input.temperature()
    basic.showString("The Temperature is: " + (Math.round(currentTemperature + 273.15)).toString() + " K.")
})
