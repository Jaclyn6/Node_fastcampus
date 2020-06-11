//호이스팅 = 아래 있는 선언들(만) 끌어올림 : 변수(var), 함수 선언 등

//함수 먼저 선언
function hello() {
    console.log("hello");
}

hello();


//함수 선언보다 호출 먼저
//JS에서는 둘다 이상 없음

hello2();

function hello2() {
    console.log("hi2");
}

//var 호이스팅

age=6;
age++;
console.log(age);

var age=0;

//let, const를 사용할 경우 호이스팅되지 않음

//console.log(mark); // 오류 발생
let mark = "abc";

