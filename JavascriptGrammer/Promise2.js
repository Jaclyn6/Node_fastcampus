// p 라는 프로미스 객체는 1000ms 후에 fulfilled 됨
// 그 이후 then을 통해 abcd가 출력e됨
const p = new Promise((resolve,reject) => {
    /*pending*/
    setTimeout(() => {
        resolve(); // fulfilled
    }, 1000);
});

//fullfilled 되면 then이 설정됌.
p.then(() => { //then에 들어간 인자는 Promise가 resolve 된 후에 실행됨. 
    console.log("1000ms 후에 fulfilled 됩니다.");
})


//실무에서는 then을 설정하는 시점을 정확히하고, 함수의 실행과 동시에 프로미스 객체를 만들면서 pending 되도록 하기 위해
// 프로미스 객체를 생성하면서 리턴하는 함수를 만들어서 실행과 동시에 then을 설정하도록 합니다.

function q() {
    return new Promise((resolve,reject) => {
        /*pending*/
        setTimeout(() => {
            resolve(); // fulfilled
        }, 1000);
    });
}

//function으로 했을 경우 then 실행
q().then( () => {
    console.log("function으로 실행하면 이렇게 된다~.");
})