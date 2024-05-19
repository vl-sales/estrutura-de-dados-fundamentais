// Fila é uma estrutura de dados onde o primeiro valor a entrar é o primeiro a sair
// Para construir uma fila vamos usar duas funções: enfilera e desenfilera

const fila = []
function enfilera(oQueEnfileirar) {
  fila.push(oQueEnfileirar) // Basta adicionar ao array. Os elementos ja estarão na ordem que devem ser removidos
}

function desenfilera() {
  const elemento = fila[0]
  //Processa elemento
  console.log(elemento)
  // Remove da fila
  fila.splice(0, 1)
}

enfilera(1)
enfilera(2)
enfilera(3)
enfilera(4)

// Esta é a fila que temos agora
console.log(fila)

// Deve desenfileirar a partir do primeiro elemento
desenfilera()
desenfilera()

console.log(fila)