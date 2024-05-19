class Fila {
  constructor() {
    this.queue = []
  }
  
  enqueue(data) {
    this.queue.push(data)
  }

  dequeue() {
    const data = this.queue[0]
    this.queue.splice(0, 1)
    return data
  }

  peek() {
    return JSON.parse(JSON.stringify(this.queue[0]))
  }

  isEmpty() {
    return this.queue.length == 0
  }

  size() {
    return this.queue.length
  }
}

const fila = new Fila()

console.log(fila.isEmpty())
fila.enqueue({ nome: 'Vinicius', cargo: 'Software developer' })
fila.enqueue({ nome: 'Rafael', cargo: 'Software developer' })
console.log(fila.size())
console.log(fila.isEmpty())
fila.dequeue()
console.log(fila.peek())