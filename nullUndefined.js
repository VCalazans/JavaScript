let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)

if(valor != null)
    console.log(valor.toString()) // Erro caso nulo

const produto = {}
console.log(produto.preco) // Não acusa erro, diz que o preço não está definido.

produto.preco = 3.50 //Adicionando atributo preço
console.log(produto)

produto.preco = undefined //Evitar isso, coisa feia!
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // Sem preço
console.log(!!produto.preco)
console.log(produto)

