input.onButtonPressed(Button.A, function () {
    basic.showNumber(Jogador_2)
})
input.onButtonPressed(Button.AB, function () {
    Resultado = Jogador_1 + Jogador_2
    basic.showNumber(Resultado)
    if (Resultado == Jogador_1 && Resultado == Jogador_2) {
        basic.showString("Ambos ganharam")
        Palitos_Jogador_1 += Palitos_Jogador_1 - 1
        Palitos_Jogador_2 += Palitos_Jogador_2 - 1
    } else if (Resultado == Jogador_2) {
        basic.showString("O app ganhou")
        Palitos_Jogador_1 += Palitos_Jogador_1 - 1
    } else if (Resultado == Jogador_1) {
        basic.showString("Você ganhou")
        Palitos_Jogador_2 += Palitos_Jogador_2 - 1
    } else {
        basic.showString("O jogo continua")
    }
    Jogador_2 = randint(0, Palitos_Jogador_1 + Palitos_Jogador_2)
})
let Resultado = 0
let Jogador_2 = 0
let Jogador_1 = 0
let Palitos_Jogador_2 = 0
let Palitos_Jogador_1 = 0
basic.showString("Aposte com a bussola")
Palitos_Jogador_1 = 3
Palitos_Jogador_2 = 3
while ((Palitos_Jogador_1 && Palitos_Jogador_2) != 0) {
    if (input.compassHeading() == 0) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        Jogador_1 = 0
    } else if (input.compassHeading() == 30) {
        basic.showLeds(`
            . . # # .
            . # . # .
            . . . # .
            . . . # .
            . # # # #
            `)
        Jogador_1 = 1
    } else if (input.compassHeading() == 60) {
        basic.showLeds(`
            . # # # .
            # . . # .
            . . # . .
            . # . . .
            # # # # .
            `)
        Jogador_1 = 2
    } else if (input.compassHeading() == 90) {
        basic.showLeds(`
            . # # # #
            . . . . #
            . . # # #
            . . . . #
            . # # # #
            `)
        Jogador_1 = 3
    } else if (input.compassHeading() == 120) {
        basic.showLeds(`
            # . . # .
            # . . # .
            # # # # .
            . . . # .
            . . . # .
            `)
        Jogador_1 = 4
    } else if (input.compassHeading() == 150) {
        basic.showLeds(`
            . # # # #
            . # . . .
            . # # # #
            . . . . #
            . # # # #
            `)
        Jogador_1 = 5
    } else if (input.compassHeading() == 180) {
        basic.showLeds(`
            . # # # #
            . # . . .
            . # # # #
            . # . . #
            . # # # #
            `)
        Jogador_1 = 6
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
}
while (Palitos_Jogador_1 == Palitos_Jogador_2) {
    Jogador_2 = randint(0, 6)
}
