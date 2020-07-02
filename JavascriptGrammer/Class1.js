//es6 에 추가된 문법
//Class
//만드는데 두가지 방식이 있음
//1. 선언적 방식
class A {}

console.log(new A(), typeof new A()); // output : A {}

//2. Class 표현식을 변수에 할당
const B = class {}

console.log(new B()); // output : A {}

//호이스팅은 일어나지 않음

//new C();

class C {}


// constrcutor

class D {}

console.log(new A());

class E {
    constructor() { //객체 생성시 실행되는 부분, 파이썬의 __init__ 과 비슷한듯
        console.log('constructor');
    }
}

new E(); // constructor 출력

class F {
    constructor(name, age) {
        console.log('constructor', name, age);
    }
}

new F(); //output constructor undefined undefined
new F('james', 37); //output constructor james 37

