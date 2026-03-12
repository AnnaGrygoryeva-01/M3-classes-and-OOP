// 1. Задача: проектуємо бібліотеку.

// Написати клас для об’єкта Книга (Book) з такими властивостями:
// автор
// назва
// рік написання
// кількість сторінок
// номер полиці
// id юзера який взяв книгу
// Книга може розташовуватись на полиці або бути виданою на руки користувача. Відповідно, потрібно додати дві властивості - номер полиці та id юзера. Якщо книгу хтось читає - у властивості “номер полиці” має бути null, а id юзера має відповідати тому юзеру, який її читає. Якщо ж книга вакантна і її можна арендувати (взяти почитати), то вона має ціле число у властивості “номер полиці” і null в графі id юзера.

// Передбачити два методи екземпляра книги:
// метод isVacant(), який повертає true, якщо книга стоїть на полиці і її можна взяти
// метод getRent(id), який приймає id юзера і “видає” книгу на руки - встановлює номер полиці в null і id юзера рівним тому, що переданий в аргументи методу

// Додатково написати клас для створення об’єктів юзера. Юзер має наступні властивості:
// id
// ім’я
// прізвище
// адреса проживання

// Book:
class Book {
  constructor(author, title, year, pagesNum, shelfNum, userID = null) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.pagesNum = pagesNum;
    this.shelfNum = shelfNum;
    this.userID = userID;
  }

  set year(value) {
    if (typeof value !== "number") {
      throw new TypeError("Year of publication must be a number");
    }
    if (value > new Date().getFullYear()) {
      throw new RangeError("Invalid year of publication");
    }
    this._year = value;
  }
  get year() {
    return this._year;
  }

  set pagesNum(value) {
    if (typeof value !== "number") {
      throw new TypeError("Pages number must be a number");
    }
    if (value <= 0) {
      throw new RangeError("Pages number must be a positive number");
    }
    this._pagesNum = value;
  }
  get pagesNum() {
    return this._pagesNum;
  }

  isVacant() {
    return this.shelfNum !== null && this.userID === null;
  }
  getRent(id) {
    if (!this.isVacant()) {
      throw new Error(`The book "${this.title}" is already taken.`);
    }
    this.shelfNum = null;
    this.userID = id;
    console.log(`Book "${this.title}" rented to user ${id}`);
  }
}

try {
  const book1 = new Book("Jane Austen", "Pride and Prejudice", 1813, 304, 45);
  console.log("book1.isVacant", book1.isVacant());
  book1.getRent(3400);
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}

try {
  const book1 = new Book("Jane Austen", "Pride and Prejudice", 1813, -2, 45);
  console.log("book1.isVacant", book1.isVacant());
  book1.getRent(3400);
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}

// User:
class User {
  constructor(id, name, surname, address) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.address = address;
  }
}

const user1 = new User(
  3400,
  "John",
  "Smith",
  "23 Glamis Street, Liverpool, L11 7HZ",
);
console.log("user1", user1);
