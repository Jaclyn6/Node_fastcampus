//멤버 변수

class A {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

console.log(new A('Mark',13));

class B {
    name; //클래스에 멤버 변수를 직접 할당할 경우 js엔진 버전에 따라 에러가 날 수 있음.
    age;
}

console.log(new B());

class C {
    name = "no name";
    age = 0;

    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

console.log(new C());
console.log(new C('Mark',13));

//멤버 함수

class D {
    name = 'hi'
    hello1() {
        console.log('hello1', this);
    }

    hello2 = () => {
        console.log(this.name,'hello2', this); // 여기서 this는 상위 클래스의 this 객체임
    }
}

new D().hello1();
new D().hello2();

