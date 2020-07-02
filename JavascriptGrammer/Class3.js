// getter, setter


class A {
    _name = 'no name'; // 클래스 내부적으로 사용할 경우엔 _를 앞에 붙이는게 국룰

    get name() { //외부에서 접근 허용할 Public 변수를 조정하기 위해 getter, setter를 사용함
        return this._name;
    }

    set name(value) {
        this._name = value + '!!!';
    }
}

const a = new A();
console.log(a);

a.name = 'Mark'; //setter 호출
console.log(a.name); //Getter 호출

a._name = "mark2"; //변수를 직접 할당
console.log(a._name); //변수를 직접 호출

//readonly
class B {
    _name = 'no name'; // 클래스 내부적으로 사용할 경우엔 _를 앞에 붙이는게 국룰

    get name() { //외부에서 접근 허용할 Public 변수를 조정하기 위해 getter, setter를 사용함
        return this._name;
    }
}

const b = new B();
console.log(b);
b.name = 'Mark2';
console.log(b);
b._name = 'Mark3';
console.log(b);

//static variable, static function
class C {
    static age = 30;
    static hello() {
        console.log(C.age); // static으로 선언한 클래스 자체의 변수 및 함수를 사용할 땐 A.age 사용
    }
}

console.log(C, C.age);
C.hello();

class D {
    age = 30;
    static hello() {
        console.log(this.age); 
    }
}

console.log(D, D.age);
D.hello();
// new D().hello(); static은 객체 생성시 상속받지 않으므로 실행 불가

class E {
    static name = "이 클래스의 이름은 C가 아니다"; //static name 은 해당 클래스의 이름을 나타냄
}

console.log(E); //output : Function: 이 클래스의 이름은 C가 아니다] { name: '이 클래스의 이름은 C가 아니다' }

