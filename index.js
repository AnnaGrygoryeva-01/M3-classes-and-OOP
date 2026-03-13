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
  static #idCounter = 0;

  constructor(author, title, year, pagesNum, shelfNum, userID = null) {
    this._id = ++Book.#idCounter;
    this.author = author;
    this.title = title;
    this.year = year;
    this.pagesNum = pagesNum;
    this.shelfNum = shelfNum;
    this.userID = userID;
  }
  get id() {
    return this._id;
  }

  set author(value) {
    if (typeof value !== "string" || value.trim().length === 0) {
      throw new TypeError("Author name must be a non-empty string");
    }
    this._author = value;
  }
  get author() {
    return this._author;
  }

  set title(value) {
    if (typeof value !== "string" || value.trim().length === 0) {
      throw new TypeError("Book title must be a non-empty string");
    }
    this._title = value;
  }
  get title() {
    return this._title;
  }

  set year(value) {
    if (typeof value !== "number") throw new TypeError("Year must be a number");
    if (value > new Date().getFullYear()) throw new RangeError("Invalid year");
    this._year = value;
  }
  get year() {
    return this._year;
  }

  set pagesNum(value) {
    if (typeof value !== "number")
      throw new TypeError("Pages must be a number");
    if (value <= 0) throw new RangeError("Pages must be positive");
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
    console.log(`Book "${this.title}" rented to user ID: ${id}`);
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
  static #idCounter = 0;
  constructor(name, surname, address) {
    this._id = ++User.#idCounter;
    this.name = name;
    this.surname = surname;
    this.address = address;
  }
  get id() {
    return this._id;
  }

  set name(value) {
    if (typeof value !== "string" || value.trim().length === 0) {
      throw new TypeError("Name can't be an empty string");
    }
    this._name = value;
  }
  get name() {
    return this._name;
  }

  set surname(value) {
    if (typeof value !== "string" || value.trim().length === 0) {
      throw new TypeError("Surname can't be an empty string");
    }
    this._surname = value;
  }
  get surname() {
    return this._surname;
  }

  set address(value) {
    if (typeof value !== "string" || value.trim().length === 0) {
      throw new TypeError("Address can't be an empty string");
    }
    this._address = value;
  }
  get address() {
    return this._address;
  }
}

// Testing
try {
  const user1 = new User("John", "Smith", "23 Glamis Street, Liverpool");
  const user2 = new User("Anna", "Doe", "10 Baker Street, London");
  console.log(`Created users with ID: ${user1.id} and ${user2.id}`);
  const book1 = new Book("Jane Austen", "Pride and Prejudice", 1813, 304, 45);
  book1.getRent(user1.id);
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}

try {
  const badUser = new User("", "Smith", "Address");
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}

// 2. Створити клас для опису абстрактної тварини і два класи для тварин Тигр та Вовк, які його розширюють. Батьківський клас має реалізувати методи hunting та growl (робота методів - вивести в консоль рядок типу “зараз дожену здобич” та “грррррр”), а тигр та вовк мають реалізувати однойменні методи по-своєму (наприклад, виводити “тигр з’їсть тебе”). Створити декілька екземплярів класу Тигр і Вовк і перевірити, чий метод викликається - класу-дитини або абстрактного батьківського класу

class Animal {
  static #idCounter = 0;
  constructor(name, location, age) {
    if (new.target === Animal) {
      throw new Error("Cannot instantiate abstract class Animal directly.");
    }
    this._id = ++Animal.#idCounter;
    this.name = name;
    this.location = location;
    this.age = age;
  }

  get id() {
    return this._id;
  }

  set name(v) {
    if (typeof v !== "string" || v.trim().length === 0)
      throw new TypeError("Animal name cannot be empty");
    this._name = v;
  }
  get name() {
    return this._name;
  }

  set location(v) {
    if (typeof v !== "string" || v.trim().length === 0)
      throw new TypeError("Location cannot be empty");
    this._location = v;
  }
  get location() {
    return this._location;
  }

  set age(value) {
    if (typeof value !== "number") throw new TypeError("Age must be a number");
    if (value < 0) throw new RangeError("Age has to be positive");
    this._age = value;
  }
  get age() {
    return this._age;
  }

  hunting() {
    console.log("зараз дожену здобич");
  }
  growl() {
    console.log("грррррр");
  }
}

class Tiger extends Animal {
  constructor(location, age) {
    super("Tiger", location, age);
  }
  hunting() {
    console.log("тигр з’їсть тебе");
  }
  growl() {
    console.log("арррррр");
  }
}

class Wolf extends Animal {
  constructor(location, age) {
    super("Wolf", location, age);
  }
  hunting() {
    console.log("вовк з’їсть тебе");
  }
  growl() {
    console.log("аууууу");
  }
}

// Testing Tiger 1
try {
  const tiger1 = new Tiger("India", -1);
  tiger1.growl();
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}

// Testing Tiger 2
try {
  const tiger2 = new Tiger("China", "three");
  tiger2.growl();
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}

// Testing Wolf 1
try {
  const wolf1 = new Wolf("Ukraine", 4);
  wolf1.growl();
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}

// Testing Wolf 2
try {
  const wolf2 = new Wolf("Canada", 5);
  wolf2.hunting();
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}

// Testing Animal
try {
  const generic = new Animal("Generic", "Wild", 5);
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}
