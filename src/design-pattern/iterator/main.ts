import Book from './book'
import BookShelf from './book_shelf'

const bookshelf = new BookShelf
bookshelf.appendBook(new Book('test A'))
bookshelf.appendBook(new Book('test B'))
bookshelf.appendBook(new Book('test C'))
bookshelf.appendBook(new Book('test D'))

const it = bookshelf.iterator()
while (it.hasNext()) {
  const book = it.next()
  console.log(book.getName())
}
