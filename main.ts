let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    while (x < 4) {
        led.plot(x, 0)
        x = 2
        led.unplot(x, 0)
        x += x + -1
    }
})
input.onButtonPressed(Button.B, function () {
    while (y < 4) {
        led.plot(0, y)
        y = 1
        led.unplot(0, y)
        y += y + 1
    }
})
