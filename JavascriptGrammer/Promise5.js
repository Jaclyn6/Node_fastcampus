
// Promise.resolve 사용법
Promise.resolve(/* value */);

//value
Promise.resolve(new Promise((resolve, reject) => { //인자에 Promise 객체가 들어오면 resolve의 인자를 받아서 then을 출력함
    setTimeout(() => {
        resolve('foo');
    },1000);
})).then((data) => {
    console.log('프로미스 객체인 경우, resolve 된 결과를 받아 then이 실행됨.', data); 
})

Promise.resolve('bar').then(data => { //인자에 들어온 값이  프로미스객체가 아니면 then에 인자로 그대로 넘겨서 실행함
    console.log('then 메소드가 없는 경우, fulfilled 됩니다', data);
})

const a = Promise.resolve('cde');
console.log(a); //output : Promise {cde}

// Promise.reject 사용법

Promise.reject(new Error('error2345')) //위에랑 마찬가지임
.then(() => {})
.catch((error) => {
    console.log(error);
})

//Promise.all 사용법
// Promise 객체를 여러개 생성 후 배열로 만들어 promise.all에 인자를 넣어 실행할 것임
// 모든 프로미스객체가 fulfilled(resolve) 되었을 때 then의 함수가 실행됨.
// then의 함수의 인자로 프로미스 각 객체들의 resolve 인자값을 배열로 돌려줌

// Promise.all([프로미스 객체들])
function p(ms) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve();
        }, ms); //인자로 받은 ms 후에 resolve 호출
    })
}

Promise.all([p(1000), p(2000), p(3000)]) //인자로 P() 객체들을 각각 생성해 넣어줌
.then(() => {
    console.log('모두 fullfilled 된 이후에 실행됩니다.'); //각각 모두 resolve 된 후에 then이 실해됨
})


//인자값이 있는 경우
function q(ms) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms); //인자로 받은 ms 후에 resolve 호출
    })
}

Promise.all([q(1000), q(2000), q(3000)]) //인자로 P() 객체들을 각각 생성해 넣어줌
.then((ms) => {
    console.log('모두 fullfilled 된 이후에 실행됩니다.',ms); // [1000,2000,3000]
})


// Promise.race
// 프로미스 객체 중 가장 먼저 fullfilled 된 것을 이용해 then에 있는 함수를 실행함
//인자값이 있는 경우
function r(ms) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms); //인자로 받은 ms 후에 resolve 호출
    })
}

Promise.race([r(1000), r(2000), r(3000)]) //인자로 P() 객체들을 각각 생성해 넣어줌
.then((ms) => {
    console.log('가장 먼저 fullfilled 된 Promise로 실행됩니다.',ms); // [1000,2000,3000]
})
