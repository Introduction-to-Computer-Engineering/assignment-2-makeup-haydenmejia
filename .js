let acceleration = 11 //the speed of the screensaver
let flip = 4          //flip of the screensaver
let mood = 0          // the mood that the microbit is feeling
let happy = 1    
let sad = 2
let mad = 3
let anxious = 4        //these are the different moods of the micrbit 
let confused = 5
let furious = 6
let love = 7
input.onGesture(Gesture.Shake, function () {
    mood = furious
    basic.pause(100)
    basic.showString("DO NOT SHAKE ME!")               //this script of code in an input that on the shake the micrbit expresses that is does not like to be shaken
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        # # # # #
        # # # # #
        `)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {   // this input is when button b is pressed for screensaver mode and once you want to start the mood filtering agian this resets the microbit
    control.reset()
})
input.onButtonPressed(Button.B, function () {   // this input is on button press b and displays a forever loop for a screensaver
    acceleration = 11
    basic.forever(function () {
        for (let i = 0; i < 6; i++) {
            for (let bRight = 0; bRight <= 4; bRight++) {
                flip = 4 - bRight
                for (let center = 0; center <= 4; center++) {
                    led.plot(bRight, flip)
                    basic.pause(acceleration)
                    led.plot(flip, bRight)
                    basic.pause(acceleration)
                    led.plot(flip - center, flip)
                    basic.pause(acceleration)
                    led.plot(flip, flip - center)
                    basic.pause(acceleration)
                }
            }
            for (let bRight2 = 0; bRight2 <= 4; bRight2++) {
                flip = 4 - bRight2
                for (let center2 = 0; center2 <= 4; center2++) {
                    led.unplot(bRight2, flip)
                    basic.pause(acceleration)
                    led.unplot(flip, bRight2)
                    basic.pause(acceleration)
                    led.unplot(flip - center2, flip)
                    basic.pause(acceleration)
                    led.unplot(flip, flip - center2)
                    basic.pause(acceleration)
                }
            }
        }
    })
})
input.onButtonPressed(Button.A, function () {          // the input a button does a math.random through 7 different moods the micrbit is feeling and also express on a situation on why the microbit feels the way it does following along with a led display, displaying the facial expression
    mood = Math.randomRange(1, 7)
    if (mood == 1) {
        basic.showString("i am happy to be alive")
        basic.showLeds(`
            . . . . .
            . # . # .
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.clearScreen()
    } else if (mood == 2) {
        basic.showString("i am sad that my show got canceled")
        basic.showLeds(`
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            # . . . #
            `)
        basic.clearScreen()
    } else if (mood == 3) {
        basic.showString("i am mad because my sports team isnt doing good")
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.clearScreen()
    } else if (mood == 4) {
        basic.showString("i have a game today and i am feeling anxious")
        basic.showLeds(`
            . . # . #
            . . . # .
            # . # . .
            . # . . .
            # . . . .
            `)
        basic.clearScreen()
    } else if (mood == 5) {
        basic.showString("why did i fail the test when i knew i studied hard ")
        basic.showLeds(`
            . # . # .
            . . . . .
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.clearScreen()
    } else if (mood == 6) {
        basic.showString("i can't believe someone hit my car")
        basic.showLeds(`
            . # . # .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.clearScreen()
    } else if (mood == 7) {
        basic.showString("i love my family more than anything")
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . # . # .
                # # # # #
                # # # # #
                . # # # .
                . . # . .
                `)
            basic.pause(200)
            basic.showLeds(`
                . # . # .
                # # # # #
                # # # # #
                . # # # .
                . . # . .
                `)
            basic.pause(200)
            basic.showLeds(`
                . # . # .
                # # # # #
                # # # # #
                . # # # .
                . . # . .
                `)
        }
        basic.clearScreen()
    } else {
        basic.showString("no matter how i am feeling i always remember tomorrow is another day")
        basic.showLeds(`
            . # . # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.clearScreen()
    }
})
