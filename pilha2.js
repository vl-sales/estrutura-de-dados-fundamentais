class Pilha {
  constructor() {
    this.queue = []
  }
  
  push(data) {
    this.queue.push(data)
  }

  pop() {
    const data = this.queue.pop()
    return data
  }

  peek() {
    return JSON.parse(JSON.stringify(this.queue[this.queue.length - 1]))
  }

  isEmpty() {
    return this.queue.length == 0
  }

  size() {
    return this.queue.length
  }
}

const pilha = new Pilha()

console.log(pilha.isEmpty())
pilha.push({ nome: 'Vinicius', cargo: 'Software developer' })
pilha.push({ nome: 'Rafael', cargo: 'Software developer' })
console.log(pilha.size())
console.log(pilha.isEmpty())
pilha.pop()
console.log(pilha.peek())