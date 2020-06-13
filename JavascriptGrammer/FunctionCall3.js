// 생성자 함수를 이용하여 새로운 객체를 만들어 내는 방법

//r객체
function Person(name, age) {
    console.log(this);
    this.name = name;
    this.age = age;
}

const p = new Person('mark', 45);

console.log(p,'and', p.name, 'and',p.age);

//Arrow 함수로는 새로운 객체를 만들 수 없음
//Arrow Function 안에서는 this라는 것이 생기지 않음
const Cat = (name, age) => {
    console.log(this);
    this.name = name;
    this.age = age;
};


//함수 안에서 함수를 만들어서 리턴
function plus(base) {
    return function(num) { //함수 안에 함수를 만듬
        return base + num; 
    }
}

const plus5 = plus(5); // base 에 5를 입력
console.log(plus5(10)); // num에 10을 입력


//함수를 호출 할 때 함수를 인자로 하여 함수를 호출
function argfunc(c) {
    console.log(('arg1'));
    c();
}

argfunc(function() { //인자 값에 함수를 넣음
    console.log('콜백');
});