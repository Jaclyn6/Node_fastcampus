// reject 되는 시점에는 p.catch 안에 설정한 함수가 실행되는 예제

function q() {
    return new Promise((resolve,reject) => {
        /*pending*/
        setTimeout(() => {
            reject(); // fulfilled
        }, 1000);
    });
}

q().then( () => { // 위의 함수를 성공적으로 완료할시 then 실행
    console.log("1000ms 후에 fulfilled 됩니다.");
}).catch ( () => { // 위의 함수를 실행 제대로 못할경우 catch 실행
    console.log("1000ms 후에 rejected 됩니다.");
})


// resolve, reject에 인자를 넣어서 실행하면 then , catch callbaock 함수의 인자로 받을 수 있다.
// 외부 데이터를 받아오는 비동기 통신을 할 때 promise를 자주 씀
// 외부에 데이터를 요청 후 응답에 따라 resolve, reject로 나눌 수 있음
function p() {
    return new Promise((resolve,reject) => {
        /*pending*/
        setTimeout(() => {
            resolve('hihi'); // fulfilled
        }, 1000);
    });
}

p().then( (msg) => { // 위의 함수를 성공적으로 완료할시 then 실행
    console.log(msg);
}).catch ( () => { // 위의 함수를 실행 제대로 못할경우 catch 실행
    console.log("1000ms 후에 rejected 됩니다.");
})


function r() {
    return new Promise((resolve,reject) => {
        /*pending*/
        setTimeout(() => {
            reject(new Error('bad')); //resolve에 error를 인자로 전달하면 catch에서 인자로 쓸 수 있음
        }, 1000);
    });
}

r().then( (msg) => { // 위의 함수를 성공적으로 완료할시 then 실행
    console.log(msg);
}).catch ( (error) => { // 위의 함수를 실행 제대로 못할경우 catch 실행
    console.log("1000ms 후에 rejected 됩니다.",error);
})