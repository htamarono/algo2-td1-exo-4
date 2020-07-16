input.onButtonPressed(Button.A, function () {
    led.unplot(x, y)
    x += -1
    if (x < 0) {
        x = 4
        y += -1
        if (y < 0) {
            y = 4
        }
    }
    led.plot(x, y)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, y)
    x += 1
    if (x > 4) {
        x = 0
        y += 1
        if (y > 4) {
            y = 0
        }
    }
    led.plot(x, y)
})
let y = 0
let x = 0
x = 2
y = 2
led.plot(x, y)
