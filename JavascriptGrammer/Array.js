// 표준 내장 객체 : Array

const a = new Array('red','black','white');

console.log(a, typeof a); // output : [ 'red', 'black', 'white' ] object = Array는 대괄호로 표시
console.log(a instanceof Array); // true
console.log(a instanceof Object); // true

const b = ['red', 'green', 'yellow']; //array

console.log(b, typeof b); // output : [ 'red', 'black', 'white' ] object = Array는 대괄호로 표시
console.log(b instanceof Array); // true
console.log(b instanceof Object); // true

console.log(b.slice(0,1)); //['red']
console.log(b, typeof b); // output : [ 'red', 'black', 'white' ] object = Array는 대괄호로 표시
console.log(Array.prototype.slice, Object.prototype.slice); // Array 내의 함수 이므로 Object에는 없음