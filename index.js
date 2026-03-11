// 2. Створити клас для опису абстрактної тварини і два класи для тварин Тигр та Вовк, які його розширюють. Батьківський клас має реалізувати методи hunting та growl (робота методів - вивести в консоль рядок типу “зараз дожену здобич” та “грррррр”), а тигр та вовк мають реалізувати однойменні методи по-своєму (наприклад, виводити “тигр з’їсть тебе”). Створити декілька екземплярів класу Тигр і Вовк і перевірити, чий метод викликається - класу-дитини або абстрактного батьківського класу

class Animal {
  constructor(name, location, age) {
    this.name = name;
    this.age = age;
    this.location = location;
  }
  hunting() {
    console.log("зараз дожену здобич");
  }
  growl() {
    console.log("грррррр");
  }
}

// Tiger:
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

const tiger1 = new Tiger("India", 5);
console.log("tiger1", tiger1);
tiger1.hunting();

const tiger2 = new Tiger("China", 7);
console.log("tiger2", tiger2);
tiger2.growl();

// Wolf:
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

const wolf1 = new Wolf("Ukraine", 4);
console.log("wolf1", wolf1);
wolf1.growl();

const wolf2 = new Wolf("Canada", 2);
console.log("wolf2", wolf2);
wolf2.hunting();
