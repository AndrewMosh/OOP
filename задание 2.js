/*Написать функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет есть ли у переданного объекта свойство с данным именем.
 Функция должна возвращать true или false. */

const capitals = {
  Russia: "Moscow",
  Greece: "Athens",
  Spain: "Madrid",
  Portugal: "Lisbon",
};

function hasProps(str, obj) {
  return console.log(str in obj);
}

hasProps("Russia", capitals);
