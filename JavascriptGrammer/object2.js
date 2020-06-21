// Object로 객체 만들기
// new object

const a = new Object();

console.log(a, typeof a); // output = {} object

const b = new Object(true); 

console.log(b, typeof b); // output = [boolean:true] object

const c = new Object({name: 'mark'});

console.log(c, typeof c); // output = { name: 'mark' } object


//프로토타입 체인, 프로토타입으로 모든 객체들을 연결하여 표현할 수 있음
//prototype
function Person(name, age){
    this.name = name;
    this.age = age;
    // this.hello = function() {
    //     console.log('hello', this.name, this.age);
    // }
}

Person.prototype.hello = function() {
    console.log('hello', this.name, this.age);
}

const p = new Person('Mark',33);
p.hello();
console.log(p.toString());

console.log(Person.prototype);
console.log(Person.prototype.toString);
console.log(Person.prototype.constructor); //constructor는 이 함수 자체를 의미
console.log(Person.prototype.hello);

console.log(Object.prototype);
console.log(Object.prototype.toString);
console.log(Object.prototype.constructor);

console.log(p instanceof Person); //p는 Person이라는 함수로부터 나온 객체이냐(True or False)
console.log(p instanceof Object);