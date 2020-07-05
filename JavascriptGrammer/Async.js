// async function
// Promise와 async의 장점은 프로그램의 흐름이 함수 안으로 계속 진행되는 것이 아니라 코드 아래로 쭈욱 진행하도록 구성할 수 있다는 것이 장점

//usage
async function ex(){}
async() => {}

//Promise 객체를 리턴하는 함수
function p(a,ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a === 'fullfill') {
                resolve(ms);
            }
            else if(a === 'rejected') {
                reject(new Error('Its Error'));
            }
        }, ms);
    });
}

//Promise 객체를 이용해서 비동길 로직을 수행할 때

p('fullfill',1000).then(ms => {
    console.log(`${ms} ${7*7} ms후에 실행된다.`); //back quote 사용시 template 사용 가능 = temple string
});

// Promise 객체를 리턴하는 함수를 await로 호출하는 방법

async function main() {
    const ms = await p('fullfill',1000); //resolve 되었을 시 resolve의 인자값이 return으로 반환됨 다만 await를 사용하기 위해서는 async 함수 안에서 실행해야 함
    console.log(`await 이용 : ${ms} ${7*7} ms후에 실행된다.`); 
}
main();

//Async reject
//try catch를 이용한다
async function main2() {
    try {
        const ms = await p('rejected',1000);
    } catch(error){ //error에 reject 인자값이 넘어옴
        console.log(error);
    }
}

main2();


//async function에서 return 되는 값은 Promise.resolve 함수로 감싸서 리턴된다.
// 함수 자체를 async로 만들어서 사용하면 'abc' 를 return 시 Promise.resolve('abc').then( data => ) 형태로 리턴을 함

async function asyncP() {
    return 'Mark'; //return Promise.resolve('Mark');
}

async function main3() {
    try {
        const name = await asyncP();
        console.log(name); //출력값 Mark
    } catch {

    }
}
main3();