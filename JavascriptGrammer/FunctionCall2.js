// function과 New Function의 차이점
global.a = 0;
{
    const a = 1;
    const test = new Function('return a'); 
    console.log(test());
    //console.log(test()); // a 라는 지역번수 접근 불가하여 에러 발생 됨
}
{
    const a = 2;
    const test = function() {
        return a;
    };
    console.log(test());
}


// Arrow function ES 6에서 생김 
const hello1 =  () => { //익명 함수임
    console.log('hello1');
}

hello1();

// Arrow Function에서의 매개변수
// 변수가 하나일 땐 괄호() 생략 가능
const hello2 = name =>  {
    console.log('hello2', name);
}

hello2('abcd');

const hello3 = (name,age) => {
    console.log('hell3', name, age);
}
hello3('abcd',123);

//함수의 리턴
//함수를 실행하면 얻어지는 값
const hello4 = name =>  {
    return 'hello4 ${name}'
}
console.log(hello4('hihi'));

//위 식을 아래처럼도 표현 가능
const hello5 = name => 'hello5 ${name}';
console.log(hello5('hihi2'));