class No {
  constructor(dado) {
    this.dado = dado
    this.proximo = null
  }
}

class ListaLigada {
  constructor() {
    this.cabeca = null
    this.tamanho = 0
  }

  // Adiciona um novo elemento ao final da lista
  adicionar(dado) {
    const novoNo = new No(dado)

    if (this.cabeca === null) {
      this.cabeca = novoNo
    } else {
      let atual = this.cabeca
      while (atual.proximo !== null) {
        atual = atual.proximo
      }
      atual.proximo = novoNo
    }
    this.tamanho++
  }

  // Remove um elemento da lista baseado no valor
  remover(dado) {
      let atual = this.cabeca
      let anterior = null

      while (atual !== null) {
        if (atual.dado === dado) {
          if (anterior === null) {
            this.cabeca = atual.proximo
          } else {
            anterior.proximo = atual.proximo
          }
          this.tamanho--
          return atual.dado
        }
        anterior = atual
        atual = atual.proximo
      }
      return -1 // Retorna -1 se o elemento não for encontrado
  }

  // Retorna o tamanho da lista
  obterTamanho() {
    return this.tamanho
  }

  // Imprime os elementos da lista
  imprimir() {
    let atual = this.cabeca
    let resultado = ''
    while (atual !== null) {
      resultado += atual.dado + ' '
      atual = atual.proximo
    }
    console.log(resultado)
  }
}

// Exemplo de uso:
const lista = new ListaLigada()
lista.adicionar(1)
lista.adicionar(2)
lista.adicionar(3)
lista.imprimir()
lista.remover(2)
lista.imprimir()
console.log(lista.obterTamanho())
