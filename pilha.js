// Pilha é uma estrutura de dados onde o primeiro elemento que entra é o ultimo a sair. é o contrário de uma fila.
// Para demonstrar isso usarei duas funções: empilha e desempilha

const empilhadeira = []
function empilha(oQueEmpilhar) {
  empilhadeira.push(oQueEmpilhar) // Basta adicionarmos, o elemento estará no final do array
}

function desempilha() {
  const elemento = empilhadeira.pop() // Remove e retorna o ultimo elemento que foi adicionado
  //poderia realizar algum processamento
  console.log(elemento)
  return elemento
}

function peek() {
  return empilhadeira[empilhadeira.length-1]
}

function isEmpty() {
  return empilhadeira.length == 0
}

empilha(1)
empilha(2)
empilha(3)
empilha(4)

// neste momento temos a seguinte pilha
console.log(isEmpty())
console.log(empilhadeira)

// consultar elemento
console.log(peek())

// O ultimo elemento a ser removido deve ser o valor 1
desempilha()
desempilha()
desempilha()
desempilha()

console.log(isEmpty())
