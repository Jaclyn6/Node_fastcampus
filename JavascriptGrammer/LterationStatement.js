// for 문
// c언어와 비슷

for(let i = 0; i < 5  ; i++) {
    console.log("안녕하세요" + (i+1));
}

for(let i = 0, j=2; i < 5  ; i++, j= j*j) {
    console.log("안녕하세요" + (i+1) +'\t'+ j);
}


//무한루프
for (;;) {
    console.log('안녕하세요');
    if(Math.random() * 100 > 90) break;
}

//while

while(true) {
    console.log('안녕하세요while');
    if(Math.random() * 100 > 90) break;
}

//do while
let a=0;
do {

    console.log('안녕하세요do');
    a++;
}while(a<3)

//for of value 가져오는 것
let b = [1,2,3]
for ( const i of b) { //symbol.iterator 속성을 가지고 있어야 함.
    console.log(i);
}

//for in 키값 가져오는 것

let c = {a:1, b:2, c:3}
Object.prototype.test = function() {};
Object.prototype.test2 = eval(1+1);
for (const i  in c) { //객체 접근 가능
    console.log(i, c[i]);
}

console.log(a.test2);