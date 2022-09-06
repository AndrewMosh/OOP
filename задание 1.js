/*Написать, функцию, которая принимает в качестве аргумента объект
 и выводит в консоль все ключи и значения только собственных свойств. 
 Данная функция не должна возвращать значение. */

const capitals = {
  Russia: "Moscow",
  Greece: "Athens",
  Spain: "Madrid",
  Portugal: "Lisbon",
};

const moreCapitals = Object.create(capitals);
moreCapitals.Austria = "Vienna";
moreCapitals.France = "Paris";

function getKeys(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key + " - " + obj[key]);
    }
  }
}
getKeys(moreCapitals);
