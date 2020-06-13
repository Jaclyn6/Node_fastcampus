let i = 0;
for(i = 1;i < 5;i++) {
    console.log(i);
    if(i==4) {
        i=i+2;
    }
}
 //var 는 함수스코프에 적용 let,const 는 두개의 스코프 모두 적용
console.log(i);

//블록스코프
{

}

//함수 스코프
function(){

}