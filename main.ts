let noise = 0
basic.showIcon(IconNames.Happy)
pins.servoWritePin(AnalogPin.P11, 0)
basic.forever(function () {
    serial.writeValue("x", Environment.ReadNoise(AnalogPin.P1))
    noise = Environment.ReadNoise(AnalogPin.P1)
    basic.pause(500)
    if (noise > 70) {
        pins.servoWritePin(AnalogPin.P11, 100)
        basic.pause(5000)
        pins.servoWritePin(AnalogPin.P11, 0)
    }
})
