//Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.

const firstNumber = 44
const seccondNumber = 20
const thirdNumber = 30

if (firstNumber > seccondNumber && firstNumber > thirdNumber) {
    console.log("O primeiro e maior")
} else if (seccondNumber > thirdNumber) {
    console.log("O segundo e maior")
} else {
    console.log("O terceiro e maior")
}

if (firstNumber < seccondNumber && firstNumber < thirdNumber) {
    console.log("O primeiro e menor")
} else if (seccondNumber < thirdNumber) {
    console.log("O segundo e menor")
} else {
    console.log("O terceiro e menor")
}