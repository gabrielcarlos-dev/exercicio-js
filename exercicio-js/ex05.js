//Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.

const person1 = {
    nome: "Gabriel",
    idade: 20,
    sexo: "masculino",
    profissão: "programador",
    nacionalidade: "Brasileiro"
}

if (person1.idade >= 18 && (person1.nacionalidade === "Brasileiro" || person1.nacionalidade === "Brasileira")) {
    console.log("Voçê foi aprovada")
} else {
    console.log("Voçê não foi aprovado")
}