input.onPinPressed(TouchPin.P0, function () {
    number = randint(0, 100)
    if (number >= 50) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.InBackground)
        basic.showNumber(number)
        basic.clearScreen()
    } else {
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.InBackground)
        basic.showNumber(number)
        basic.clearScreen()
    }
})
let number = 0
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Baddy), music.PlaybackMode.InBackground)
basic.showIcon(IconNames.Heart)
basic.pause(100)
basic.clearScreen()
basic.showString("METER")
