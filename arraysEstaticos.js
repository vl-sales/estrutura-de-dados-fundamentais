// Um array estático tem seu tamanho definido quando é criado e/ou alocado. Ocupa uma quantidade fixa de memória
const arrayEstatico = Object.freeze([1, 2, 3, 4])

try {
  arrayEstatico.pop()
} catch(err) {
  console.error('Não é possível remover elementos de um array estático')
}

try {
  arrayEstatico.push(5)
} catch(err) {
  console.error('Não é possível adicionar elementos de um array estático')
}

// Mas é possível iterar normalmente
for (const n of arrayEstatico) {
  console.log(n)
}