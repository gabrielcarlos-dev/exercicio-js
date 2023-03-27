//Faça um programa onde leia um número e diga se ele é: - ímpar, - par, - é um número primo e impar, - é par e divisível por 5.

const number = 11

if (number % 2 === 0) {
    console.log("O número e par")
    if (number % 5 === 0) {
        console.log("O número e par e divisivel por 5")
    } else {
        console.log("O numero e par e não divisiel por 5")
    }
} else {
    console.log("O número e impar")

    for (let i = 2; i < number; i++)
        if (number % i === 0) {
            console.log("Ele e impar, mas não e primo")
            break;
        } else {
            if(i === number - 1) {
                console.log("Ele e um numero primo")
            }
        }
}