class Book {
  constructor(title, autor) {
    this._title = title;
    this._autor = autor;
  }
  get title() {
    return this._title;
  }
  set title(val) {
    if (typeof val !== "string") {
      throw new Error("only string");
    }
    this._title = val;
    return this._title;
  }
  get autor() {
    return this._autor;
  }
  set autor(val) {
    if (typeof val !== "string") {
      throw new Error("only string");
    }
    this._autor = val;
    return this._autor;
  }
  toString() {
    return `title: ${this.title}, autor: ${this.autor}`;
  }
  isTheSameBook(book) {
    if (this._title === book.title && this._autor === book.autor) {
      return true;
    }
    return false;
  }
}

class libraryBookBase extends Book {
  constructor(title, autor, bookId) {
    super(title, autor);
    this.bookId = bookId;
  }
  toString() {
    return `title: ${this.title}, autor: ${this.autor} id: ${this.bookId}`;
  }
}
// let newBook = new Book("es", "ar");
// console.log(newBook.title);
// console.log(newBook.isTheSameBook({ title: "es", autor: "ara" }));
// let l = new libraryBookBase("a", "b", 1);
// console.log(l.title);
class libraryBook extends libraryBookBase {
  constructor(title, autor, bookId) {
    super(title, autor, bookId);
    this._quantity = quantity;
  }
  get quantity() {
    return this._quantity;
  }
  set quantity(val) {
    if (typeof val !== "number") {
      throw new Error("only number");
    }
    this._quantity = val;
    return this._quantity;
  }
  toString() {
    return `title: ${this.title}, autor: ${this.autor} id: ${this.bookId} quantity: ${this._quantity}`;
  }
  increaseQuantityBy(amount) {
    if (typeof amount !== "number") {
      throw new Error("only number");
    }
    this._quantity += amount;
    return this._quantity;
  }
  decreaseQuantityBy(amount) {
    if (typeof amount !== "number") {
      throw new Error("only number");
    }
    if (amount > this._quantity) {
      throw new Error("amount must be less than quantity");
    }
    this._quantity -= amount;
    return this._quantity;
  }
}
class ReaderBook extends libraryBookBase {
  constructor(title, autor, bookId, expirationDate) {
    super(title, autor, bookId);
    this._expirationDate = expirationDate;
  }
  get expirationDate() {
    return this._expirationDate;
  }
  set expirationDate(val) {
    if (Object.prototype.toString.call(val) === "[object Date]") {
      this._expirationDate = val;
      return this._expirationDate;
    }
    throw new Error("only string");
  }
  isReturned(date) {
    date = new Date();
    let diff = date - this._expirationDate > 0;
    return diff > 0 ? false : true;
  }
}
class Reader {
  static id = 0;
  constructor(firstName, lastName, books) {
    this._id = Reader.id++;
    this._firstName = firstName;
    this._lastName = lastName;
    this._books = books;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(val) {
    if (typeof val !== "string") {
      throw new Error("only string");
    }
    this._firstName = val;
    return this._firstName;
  }
  get lastName() {
    return this._firstName;
  }
  set lastName(val) {
    if (typeof val !== "string") {
      throw new Error("only string");
    }
    this._lastName = val;
    return this._lastName;
  }
  get books() {
    return this._books;
  }
  get id() {
    return this._id;
  }
  borrowBook(book, library) {
    if (library.includes(book) && book instanceof ReaderBook) {
      this._books.push(book);
    }
  }
  toString() {
    return `firstName: ${this.firstName}, lastName: ${this.lastName} books: ${this.books}`;
  }
}
