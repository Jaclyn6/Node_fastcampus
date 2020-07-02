// extends 상속

class Parent {
    name = 'Lee'

    hello() {
        console.log('hello', this.name);
    }
}

class Child extends Parent {}

const p = new Parent();
const c = new Child();
console.log(p, c);

c.hello();
c.name = 'Anna';
c.hello(); //Anna
p.hello(); // Lee


// override
// 자식이 만든 함수가 부모의 함수와 겹칠 경우 부모의 함수를 덮어씌워 버리는 것

// Use Parent

class Child2 extends Parent {
    age = 37;
    hello() { //override
        console.log('hello', this.name, this.age); 
    }
}

const c2 = new Child2();

console.log(c2);
c2.hello(); //override

//super 

//Use parent2
class SuperParent {
    name;
    
    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log('hello', this.name);
    }
}

class Child3 extends SuperParent {
    age;

    constructor(name, age) {
        super(name); // 부모 클래스의 constructor를 실행
        this.age = age;
    }
    
    hello() {
        console.log('hello', this.name, this.age);
        
    }
}

// static 상속
class staticParent {
    static age = 37;
}

class staticChild extends staticParent{}

console.log(staticParent.age);
console.log(staticChild.age);