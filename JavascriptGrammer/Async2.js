//async function, try catch 응용

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

async function asyncP() {
    //const ms = await p('fullfill',1000); // resolve의 경우
    const ms = await p('rejected', 1000); // 여기에 try catch를 감싸면 main3에서는 에러가 발생되지 않음
    console.log(ms); 
    return 'Mark : ' + ms; //return Promise.resolve('Mark');
}

async function main3() {
    try {
        const name = await asyncP(); //여기에 try catch를 걸었으니까 console.log(name)은 실행이 되지 않음.
        // AsyncP안에 try catch를 걸었다면 아래 코드가 실행 되었을 것임
        console.log(name); //출력값 Mark
    } catch(error) {
        console.log(error);
    } finally {
        console.log('end');
    }
}
main3();
