// 조건식 if

if (true) console.log("한줄 실행")

//표현식이 false로 평가될 때
// false, 0, '', null, undefined, NaN

// 표현식이 Truethy로 평가될 때 
// true, 숫자, 'Mark', {}, []


const n = 15

if ( n % 3=== 5) {
    console.log('n은 3의 배수 입니다.');
}
else if(n % 5 == 0) {
    console.log('n은 5의 배수 입니다.');    
}
else {
    console.log('n은 3,5의 배수가 아닙니다.')
}

const MultipleOfThree = n % 3 === 0

console.log(MultipleOfThree);

// 논리 연산자 &&(and), ||(vertical bar), !(not)

if (true && NaN)
console.log('1');

let m = 5;
n % 5 === 0 && console.log('5로 나누어 질때만 실행');

// 표현식 || 표현식
// 앞 표현식을 평가해서 참이면 뒤 표현식을 실행할 필요가 없어서 실행하지 않는다.


//삼항 연산자
let b = 5;
console.log( n%5 === 0 ? '5의 배수 입니다.': '5의 배수가 아닙니다.');

let message = n % 5 === 0 ? 'A' : 'B';
console.log(message);


// Switch

let c = 5;
switch(c) {
    case 5:
        console.log("5입니다.");
    default:
        console.log(n); //둘 다 실행 됌
}

//break 추가
switch(c) {
    case 5:
        console.log("5입니다.");
        break;
    default:
        console.log(n); //하나만 실행 됌
}