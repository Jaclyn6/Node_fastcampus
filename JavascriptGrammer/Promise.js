// ES7 부터 JS의 표준 객체로 추가 되었음
// resolve, reject에 인자를 넣어서 실행하면 then , catch callbaock 함수의 인자로 받을 수 있다.
// 외부 데이터를 받아오는 비동기 통신을 할 때 promise를 자주 씀
// 외부에 데이터를 요청 후 응답에 따라 resolve, reject로 나눌 수 있음
// 전역 Promise 출력
console.log(Promise);

//생성자를 통해 프로미스 객체를 만들 수 있음
//생성장의 인자값으로 exxecutor 라는 함수를 이용함
new Promise(/* executor */);

//executor 함수는 resolve 와 reject를 인자로 가집니다ㅏ.

new Promise(/* executor */(resolve, reject) => { } );


/* 생성자를 이용해 프로미스 객체를 만드는 순간을 pending(대기) 상태라고 합니다. */
// executor 함수 인자 중 하나인 resolve 함수를 실행하면, fulfilled(이행) 상 태가 된다.

new Promise((resolve,reject) => {
    // 만드는 순간 pending 상태가 됨.
    // 처리가 다 끝난상태에서 resolve 함수를 호출하면 fullfilled"이행됨" 상태로 변함
    resolve();
}) 


// reject 함수 실행시 rejected(거부) 상태가 됨
new Promise((resolve,reject) => {
    // 만드는 순간 pending 상태가 됨.
    // 처리가 다 끝난상태에서 reject 함수를 호출하면 reject (거부) 상태로 변함
    reject();
}) 

console.log(Promise);
