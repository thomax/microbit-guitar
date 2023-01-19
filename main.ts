input.onButtonPressed(Button.A, function () {
    on = true
})
input.onButtonPressed(Button.B, function () {
    on = false
})
let currentFrequency = 0
let currentVolume = 0
let on = false
basic.showIcon(IconNames.EigthNote)
basic.forever(function () {
    if (on) {
        currentVolume = pins.map(
        input.acceleration(Dimension.X),
        0,
        1023,
        0,
        255
        )
        currentFrequency = pins.map(
        input.acceleration(Dimension.Y),
        0,
        1023,
        700,
        1760
        )
        music.setVolume(currentVolume)
        music.playTone(currentFrequency, music.beat(BeatFraction.Sixteenth))
    }
})
