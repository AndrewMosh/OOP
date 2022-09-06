/*Переписать консольное приложение из предыдущего юнита на классы.
Общие требования:
Имена классов, свойств и методов должны быть информативными;
Соблюдать best practices;
Использовать синтаксис ES6. */

class ElectricApp {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.on = false;
  }
  turnOn(on) {
    this.on = true;
    return console.log(`The ${this.name} is on`);
  }
  turnOff(on) {
    this.on = false;
    return console.log(`The ${this.name} is off`);
  }
}

//1 подпрототип
class Phone extends ElectricApp {
  constructor(name, power, color, model, type) {
    super(name, power);

    this.color = color;
    this.model = model;
    this.type = type;
  }
  callMom() {
    console.log("call mom");
  }
}
//создаем новый экземпляр 2 подпрототипа
const phone = new Phone("phone", 5, "red", "sumsung", "android");
// проверям свойства
console.log(phone.color);
console.log(phone.model);
console.log(phone.type);
phone.callMom();

//2 подпрототип

class Laptop extends ElectricApp {
  constructor(name, power, screen, model, age) {
    super(name, power);
    this.screen = screen;
    this.model = model;
    this.age = age;
  }
  printCharacteristics(model, age, screen) {
    console.log(
      `This ${this.name} is made by ${this.model} and has screen ${this.screen} px. It's ${this.age} years old`
    );
  }
}
//создаем новый экземпляр 1 подпрототипа
const laptop = new Laptop("laptop", 10, 1440, "Acer", 30);

// проверям свойства
console.log(laptop.screen);
console.log(laptop.model);
console.log(laptop.age);
laptop.printCharacteristics();

//проверям унаследованные от прототипа свойства
console.log(phone.name);
console.log(phone.power);
phone.turnOn();
phone.turnOff();
console.log(laptop.name);
console.log(laptop.power);
laptop.turnOn();
laptop.turnOff();
