//function : 선언적 function
//선언적 function일 땐 ; 안붙임

function hello1() {
    console.log('hello1');

}

console.log(hello1, typeof(hello1));

//함수의 매개변수

function hello2(name) {
    console.log('hello2', name); //output : hello2 abc
}

hello2('abc');

// 함수의 리턴

function hello3() {
    return 3;
}
console.log(hello3());


//함수를 만드는 또다른 방법 : 익명 함수
const hello = function() {
    console.log('const function1');
}

console.log(hello, typeof(hello));

// const 매개변수

const consthello2 = function(name) {
    console.log('hihi',name);
}

consthello2("abcd");


//선언적 function과 익명함수의  차이점
//var varhello1;
callhello(); //선언을 나중에 해도 실행 됨 : 호이스팅 됌
//varhello1(); //선언을 나중에 하면 실행 안됌 : var 변수만 호이스팅 되어 함수가 선언이 되지 않음 , const, let은 아예 호이스팅 되지 않음
function callhello() {
    console.log('hello1');
}

// 호이스팅 되면 varhello1= function() 가 되어버림
var varhello1 = function() {
    console.log('hello2');
}


// 익명 함수의 다른 버전 : 생성자 함수로 함수를 만드는 방법 : 잘 쓰이지 않음
const test = new Function('a', 'b', 'c', 'return eval(a+b+c);');
console.log(test(1,2,3));



