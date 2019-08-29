import Aggregate from './aggregate'
import Iterator from './iterator'
import Book from './book'

export default class BookShelf implements Aggregate {
  private books: Book[]

  getBookAt(index: number) {
    return this.books[index]
  }
  appendBook(book: Book) {
    this.books = [book].concat(this.books)
  }
  getLength() {
    return this.books.length
  }
  iterator(): Iterator<Book> {
    return new BookShelfIterator(this)
  }
}

class BookShelfIterator implements Iterator<Book> {
  private bookShelf: BookShelf
  private index: number

  constructor(bookShelf: BookShelf) {
    this.bookShelf = bookShelf
    this.index = 0
  }

  hasNext() {
    return this.index < this.bookShelf.getLength() - 1
  }
  next() {
    const book = this.bookShelf.getBookAt(this.index)
    this.index += 1
    return book
  }
}
