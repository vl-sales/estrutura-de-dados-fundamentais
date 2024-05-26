class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class ListaLigada {
  constructor() {
    this.head = null
    this.size = 0
  }

  // Adiciona um novo elemento ao final da lista
  add(data) {
    const newNode = new Node(data)

    if (this.head === null) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next !== null) {
        current = current.next
      }
      current.next = newNode
    }
    this.size++
  }

  // Remove um elemento da lista baseado no valor
  remove(data) {
      let current = this.head
      let anterior = null

      while (current !== null) {
        if (current.data === data) {
          if (anterior === null) {
            this.head = current.next
          } else {
            anterior.next = current.next
          }
          this.size--
          return current.data
        }
        anterior = current
        current = current.next
      }
      return -1 // Retorna -1 se o elemento não for encontrado
  }

  // Retorna o size da lista
  size() {
    return this.size
  }

  // Imprime os elementos da lista
  print() {
    let current = this.head
    let result = ''
    while (current !== null) {
      result += current.data + ' '
      current = current.next
    }
    console.log(result)
  }
}

// Exemplo de uso:
const lista = new ListaLigada()
lista.add(1)
lista.add(2)
lista.add(3)
lista.print()
lista.remove(2)
lista.print()
console.log(lista.size())
