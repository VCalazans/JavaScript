//Funcao sem retorno
function imprimirSoma(a = 0, b = 0){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)

//função com retorno
function soma(a, b= 0){
    return a + b
}

console.log(soma(2, 3))
