alert('Boas vindas ao jogo do numero secreto')

let numeroSecreto = 29;
let chute = prompt('Escolha um numero entre 1 e 30')

if (chute == numeroSecreto) {
    alert(`Isso voce acertou: ${numeroSecreto}`)
} else {
    alert("Não foi dessa vez")
}


