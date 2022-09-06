/*Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент). 
Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, 
какими свойствами он обладает.
План:
Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
Создайте экземпляры каждого прибора.
Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)
Общие требования:
Имена функций, свойств и методов должны быть информативными
Соблюдайте best practices:
использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
информативные имена (а не a, b);
четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр — конкретную реализацию);
использование синтаксиса es6 (кроме функции-конструкторов) и так далее. */

function ElectricApp(name, power) {
  (this.name = name), (this.power = power), (this.on = false);
  this.turnOn = function () {
    on = true;
    console.log(`The ${name} is on`);
  };
  this.turnOff = function () {
    on = false;
    console.log(`The ${name} is off`);
  };
}
//1 экземпляр
const phone = new ElectricApp("phone", 5);
phone.color = "red";
phone.model = "sumsung";
phone.type = "android";
phone.callMom = () => {
  console.log("call mom");
};
// проверям свойства
console.log(phone.color);
console.log(phone.model);
console.log(phone.type);
phone.callMom();

//2 экземпляр
const laptop = new ElectricApp("laptop", 10);
laptop.screen = 1440;
laptop.model = "Acer";
laptop.age = 30;
laptop.printCharacteristics = function (model, age, screen) {
  console.log(
    `This ${this.name} is made by ${this.model} and has screen ${this.screen} px. It's ${this.age} years old`
  );
};
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
console.log(phone.on);
console.log(laptop.name);
console.log(laptop.power);
laptop.turnOn();
laptop.turnOff();
console.log(laptop.on);
