function A() {}

const a = new A();
console.log(a, typeof a);
console.log(A());

//생성하면서 데이터 넣기
function B(name, age) {
    console.log(name, age);
}

const b = new B();
const c = new B('abcd',123);
console.log(B()); //return 값이 없기 때문에 undefined 가 한번 더 나옴


//객체에 속성(property)을 추가
function C() {
    this.name = 'Mark';
    this.hello = function() {
        console.log('hello');
    }
}

const d = new C();
console.log(d.name);
new C().hello();
console.log(C.hello);