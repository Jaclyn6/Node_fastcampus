var a = 0; 

(function() { //함수를 괄호 안에 묶으면 a(); 이거랑 똑같음.. 바로실행
    a++;
    console.log(a);
})();

console.log(a);

//블록 스코프
var c= 0;

{
    c++;
    console.log(c);
}

{
    var d = 0; // const, let과 달리 var는 함수 스코프에만 적용되기 때문에 단순히 블록 안에 있을 경우 전역에서 사용 가능
    console.log(d);
}

console.log(d);