//Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

const score = 10

switch (score) {
    case 0:
        console.log("Sua nota foi ruim")
        break;
    case 1:
        console.log("Foi muito bem, melhore mais na proxima")
        break;
    case 2:
        console.log("Foi muito bem, tente na proxima")
        break;
    case 3:
        console.log("Não conseguio")
        break;
    case 4:
        console.log("Quase")
        break;
    case 5:
        console.log("está melhorando")
        break;
    case 6:
        console.log("chegou na media")
        break;
    case 7:
        console.log("Nota muito boa parabens")
        break;
    case 8:
        console.log("muito boa")
        break;
    case 9:
        console.log("Nota otima")
        break;
    case 10:
        console.log("parabenssss")
        break;
    default:
        break;
}