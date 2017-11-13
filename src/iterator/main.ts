import { Book, BookShelf, BookShelfIterator } from './book';
import { Iterator } from './iterator';

let bookShelf: BookShelf = new BookShelf(4)
bookShelf.appendBook(new Book('Around the world in 80 Days'));
bookShelf.appendBook(new Book('Bible'));
bookShelf.appendBook(new Book('Cinderella'));
bookShelf.appendBook(new Book('Daddy-Long-Legs'));
let it: Iterator<Book> = bookShelf.iterator();
while(it.hasNext()) {
  const book: Book = it.next();
  console.log(book.getName());
}