// fullfilled, reject  이후 최종적으로 실행할 것이 있다면 finally()를 설정하고 함수를 인자로 넣는다

function r() {
    return new Promise((resolve,reject) => {
        /*pending*/
        setTimeout(() => {
            reject(new Error('bad')); //resolve에 error를 인자로 전달하면 catch에서 인자로 쓸 수 있음
        }, 1000);
    });
}

// fullfilled, reject  이후 최종적으로 실행할 것이 있다면 finally()를 설정하고 함수를 인자로 넣는다
r().then( (msg) => { // 위의 함수를 성공적으로 완료할시 then 실행
    console.log(msg);
}).catch ( (error) => { // 위의 함수를 실행 제대로 못할경우 catch 실행
    console.log("1000ms 후에 rejected 됩니다.",error);
}).finally( () => {
    console.log("finally i execute this function!"); // 실행 성공여부와 관계없이 무조건 실행
})


//Promise 가 없었을 때 비동기 작업을 했던 방식
// callback의 반복

function c(callback) {
    setTimeout(() => {
        callback();
    }, 1000)
}
c(() => {
    console.log("1000ms 후에 callback 함수가 실행됩니다."); //callback
});

c(() => {
    c(() => {
        c(() => {
            console.log("3000ms 후에 callback 함수가 실행됩니다."); //callback 안의 callbac
        });
    });
});

//위 callback 방식을 다시 pomise로 바꾸면?
function p() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

//여러개의 표현식으로 callback이 가능
p().then(() => {
    return p();
}).then( () => p()) //arrow 함수에서는 return을 바로해줄 경우 return 을 생략할 수 있음
.then(p) // p를 인자로 바로 넘기게 되면 마찬가지로 실행이 다시 됨.
.then(() => {
    console.log('4000ms 후에 실행됩니다.')
})