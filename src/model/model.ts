// Una vez completadas las funciones, convertilas en métodos estaticos de la clase Book.
import { writeFileSync } from "node:fs"
import { randomUUID } from "node:crypto"

const PATH = "./src/database/books.json"

interface BookData {
  name: string
  released: string
  author: string
}

class Book {
  name
  released
  author
  id

  constructor(book: BookData) {
    const { name, released, author } = book
    this.name = name
    this.released = released
    this.author = author
    this.id = this.#createUUID()
  }

  #createUUID(): string {
    return randomUUID()
  }

  getAge() {
    const date = new Date()
    const currentYear = date.getFullYear()
    const releasedDate = Number(this.released)

    return currentYear - releasedDate
  }

//   static findBookByTitle(title: string) {

//   }

//   static uploadNewBook(book: Book): boolean {

//   }
}

// Exportá los métodos estaticos