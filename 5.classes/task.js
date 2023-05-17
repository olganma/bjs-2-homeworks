class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = 1.5 * this.state
    return this.state;
  }

  set state(number) {
    if (number < 0) {
      this._state = 0;
    }
    if (number > 100) {
      this._state = 100;
    }
    else {
      this._state = number;
    }
    return this._state
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name, books) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] === value) {
        return this.books[i];
      }
    }
    return null
  }

  giveBookByName(bookName) {
    let indexBook = this.books.indexOf(this.findBookBy("name", bookName));
    if (indexBook !== -1) {
      let giveBook = this.findBookBy("name", bookName);
      this.books.splice(indexBook, 1);
      return giveBook;
    }
    return null
  }
}

//Тесты:
const library = new Library("Библиотека номер 1");
library.addBook(bookItem = new NovelBook("Лев Николаевич Толстой", "Война и мир", 1873, 2008));
library.addBook(new Magazine("The Voice", 2022, 100));
library.addBook(new DetectiveBook("Эдгар Аллан По", "Убийство на улице Морг", 1841, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Понедельник начинается в субботу", 1919, 150));
console.log(library.findBookBy("releaseDate", 1919).name); //Понедельник начинается в субботу
library.giveBookByName("Война и мир");
bookItem.state = 90;
bookItem.fix();
library.addBook(bookItem);


