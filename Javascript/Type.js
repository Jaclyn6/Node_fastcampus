//Dynamic Type language
//데이터 타입은 기본 타입(Primitive values
// 객체(Object)로 나뉨
//자료형!
let whatever = 'Mark'; //String 형 
console.log(typeof(whatever));

whatever = 37;
console.log(typeof(whatever));
whatever = true;
console.log(typeof(whatever));

//Primitive Values

//Boolean
true;
false;

const a = new Boolean(false); //객체형으로 생성
console.log(typeof a);
typeof a;
console.log(a);
if(a) { //false 지만 객체로 받으면 실행됨
    console.log('false?');
}

const b = Boolean(false);  //boolean형

console.log(typeof b);

if(b) { //실행되지 않음
    console.log("false?");
}


//NULL

const c = null;
console.log(c, typeof c); //output : null, object . Object 임을 알  수 있음

//Undefined

let d;
//let e=undefined;  //SAME
console.log(d, typeof d);

console.log(c==d); //null과 undefined 의 비교 loosly operation 을 쓰면 true 반환
console.log(c===d); //false


// Number
const f = 33;
console.log(f, typeof f);

const g = 11.3;
console.log(g, typeof g);

const h = NaN;
console.log(h, typeof h);

const i = Number('mark');
console.log(i, typeof i);//Nan이 나오는 경우

// String
const aa = 'mark';
console.log(aa, typeof aa);

const ab = 'Mark' + aa;
console.log(ab, typeof ab);

// Template String (backslash 이용) ES6에 나옴
// Javascript의 표현식을 사용 가능
const bb = `${aa} Lee`;
console.log(bb, typeof bb);


//Symbol ES6에서 나옴
const cc = Symbol();
const dd = Symbol(37);
const ee = Symbol('Mark'); // 두개가 동일한 값이 아님(Symbol의 특징)
const ff = Symbol('Mark'); // 두개가 동일한 값이 아님(Symbol의 특징)

console.log(dd, typeof dd);
console.log(ee===ff); //Symbol 특징

//new Symbol(); //symbol은 객체로 사용할 수 없음
