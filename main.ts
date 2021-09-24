input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    for (let index = 0; index <= 2; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showNumber(3 - index)
    }
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showString("GO!")
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 2; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showNumber(3 - index)
    }
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showString("GO!")
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= 2; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showNumber(3 - index)
    }
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showString("GO!")
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 2; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showNumber(3 - index)
    }
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showString("GO!")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index <= 2; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showNumber(3 - index)
    }
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showString("GO!")
})
