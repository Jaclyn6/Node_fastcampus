// Async로 처리했을 때와 Promise로 처리했을 때의 다른 점

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

//Promise로 호출
p('fullfill',1000)
    .then(() => p('fullfill',1000))
    .then(() => p('fullfill',1000))
    .then(() => {
        console.log('3초 후 실행');
    });


//async로 호출
async function main() {
    try {
        await p('fullfill',1000);
        await p('fullfill',1000);
        //await p('rejected',1000);
        await p('rejected',1000);
    } catch(error) {
        console.log(error);
    }
    console.log('3초 후 실행'); //위에서 try catch를 하지 않으면 이게 실행 되지 않음
}
main();


//Promise.all과 Promise.race을 async를 이용해 활용

//promise.all
(async function main() {
    const results = await Promise.all([p('fullfill',1000),p('fullfill',2000),p('fullfill',4000)]);
    console.log(results); //1000,2000,3000
})();


//Promise.race
(async function main() {
    const results = await Promise.race([p('fullfill',1000),p('fullfill',2000),p('fullfill',4000)]);
    console.log(results); //1000
})();