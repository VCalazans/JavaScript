//Trabalhando com Strings

const escola = "Cod3r"
console.log(escola.charAt(4)) // retorna "r"
console.log(escola.charAt(5)) // Não retorna nada, e nem acusa erro.

console.log(escola.charCodeAt(3)) // Retorna seu respectivo código na tabela assc
console.log(escola.indexOf('3'))  // Retorna o indice em que se encontra o caractere.
console.log(escola.substring(1))  // Vai copiar a string a partir do indice 1
console.log(escola.substring(0, 3)) //A partir da posição 0 copia 3 Strings.

console.log('Escola'.concat(escola).concat("!"))
console.log(escola.replace(3, 'e')) //No indice 3 substitui o caractere por e
console.log('Ana, Maria, Pedro'.split(','))


