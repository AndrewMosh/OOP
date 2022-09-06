/*Написать функцию, которая создает пустой объект,
 но без прототипа. */

function createEmptyObject() {
  return Object.create(null);
}

const noProto = createEmptyObject();
console.log(noProto);
