const nome = 'Victor'
const concatena = 'Olá' + nome + '!'

//Possibilidade de quebrar linhas
const template = `
  Olá
  ${nome}!`

console.log(concatena, template)

//expressões
console.log(`1 + 1 = ${1 + 1}`)


//Função incorporada no tamplate
const up = texto => texto.toUpperCase() 
console.log(`Ei ... ${up('cuidado')}!`)

