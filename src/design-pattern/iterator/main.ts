import Book from './book'
import BookShelf from './book_shelf'

const bookshelf = new BookShelf
['A', 'B', 'C', 'D'].forEach(e => bookshelf.appendBook(new Book(`test ${e}`)))

const it = bookshelf.iterator()
while (it.hasNext()) console.log(it.next().getName())
