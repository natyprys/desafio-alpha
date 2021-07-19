input.onButtonPressed(Button.A, function () {
    while ((Palitos_Jogador_1 && Palitos_Jogador_2) != 0) {
        if (input.compassHeading() == 210) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . # . #
                # . . . #
                # # # # #
                `)
            Palitos_1 = 0
            break;
        } else if (input.compassHeading() == 240) {
            basic.showLeds(`
                . . # # .
                . # . # .
                . . . # .
                # . . # .
                . . # # #
                `)
            Palitos_1 = 1
        } else if (input.compassHeading() == 270) {
            basic.showLeds(`
                . # # # .
                # . . # .
                . . # . .
                . # . . #
                # # # # .
                `)
            Palitos_1 = 2
            break;
        } else if (input.compassHeading() == 300) {
            basic.showLeds(`
                . # # # #
                . . . . #
                # . # # #
                . . . . #
                . # # # #
                `)
            Palitos_1 = 3
            break;
        } else {
            basic.showLeds(`
                . . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . .
                `)
            continue;
        }
        break;
    }
    basic.pause(2000)
    basic.showString("aperte o botao B e aposte com a bussola")
})
input.onButtonPressed(Button.AB, function () {
    while ((Palitos_Jogador_1 && Palitos_Jogador_2) != 0) {
        Resultado = Palitos_1 + Palitos_máquina
        basic.showNumber(Resultado)
        if (Resultado == Jogador_1 && Resultado == Jogador_2) {
            basic.showString("Ambos ganharam")
            Palitos_Jogador_1 += Palitos_Jogador_1 - 1
            Palitos_Jogador_2 += Palitos_Jogador_2 - 1
            basic.pause(5000)
            basic.showString("Selecione seus palitos com a bussola apertando o botao A")
        } else if (Resultado == Jogador_2) {
            basic.showString("A maquina ganhou")
            Palitos_Jogador_1 += Palitos_Jogador_1 - 1
            basic.pause(2000)
            basic.showIcon(IconNames.Sad)
            basic.pause(5000)
            basic.showString("Selecione seus palitos com a bussola apertando o botao A")
        } else if (Resultado == Jogador_1) {
            basic.showString("Você ganhou")
            Palitos_Jogador_2 += Palitos_Jogador_2 - 1
            basic.pause(2000)
            basic.showIcon(IconNames.Happy)
            basic.pause(5000)
            basic.showString("Selecione seus palitos com a bussola apertando o botao A")
        } else {
            basic.showString("O jogo continua")
            basic.pause(5000)
            basic.showString("Selecione seus palitos com a bussola apertando o botao A")
        }
        break;
    }
})
input.onButtonPressed(Button.B, function () {
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
            break;
        } else if (input.compassHeading() == 30) {
            basic.pause(2000)
            basic.showLeds(`
                . . # # .
                . # . # .
                . . . # .
                . . . # .
                . # # # #
                `)
            Jogador_1 = 1
            break;
        } else if (input.compassHeading() == 60) {
            basic.pause(2000)
            basic.showLeds(`
                . # # # .
                # . . # .
                . . # . .
                . # . . .
                # # # # .
                `)
            Jogador_1 = 2
            break;
        } else if (input.compassHeading() == 95) {
            basic.pause(2000)
            basic.showLeds(`
                . # # # #
                . . . . #
                . . # # #
                . . . . #
                . # # # #
                `)
            Jogador_1 = 3
            break;
        } else if (input.compassHeading() == 120) {
            basic.pause(2000)
            basic.showLeds(`
                # . . # .
                # . . # .
                # # # # .
                . . . # .
                . . . # .
                `)
            Jogador_1 = 4
            break;
        } else if (input.compassHeading() == 150) {
            basic.pause(2000)
            basic.showLeds(`
                . # # # #
                . # . . .
                . # # # #
                . . . . #
                . # # # #
                `)
            Jogador_1 = 5
            break;
        } else if (input.compassHeading() == 180) {
            basic.pause(2000)
            basic.showLeds(`
                . # # # #
                . # . . .
                . # # # #
                . # . . #
                . # # # #
                `)
            Jogador_1 = 6
            break;
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            continue;
        }
        break;
    }
    for (let Jogador_12 = 0; Jogador_12 <= 6; Jogador_12++) {
        Palitos_máquina = randint(0, Palitos_Jogador_2)
        Jogador_2 = Palitos_máquina + randint(0, Palitos_Jogador_1)
        basic.pause(2000)
        basic.showString("Valor apostado pela maquina")
        basic.showNumber(Jogador_2)
        basic.pause(2000)
        basic.showString("Palitos mostrados pela maquina")
        basic.showNumber(Palitos_máquina)
        basic.pause(2000)
        basic.showString("Aperte A+B para saber o resultado")
        break;
    }
})
let Jogador_2 = 0
let Jogador_1 = 0
let Palitos_máquina = 0
let Resultado = 0
let Palitos_1 = 0
let Palitos_Jogador_2 = 0
let Palitos_Jogador_1 = 0
basic.showString("Selecione seus palitos com a bussola apertando o botao A")
Palitos_Jogador_1 = 3
Palitos_Jogador_2 = 3
