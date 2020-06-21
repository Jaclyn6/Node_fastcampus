// prototype 상속

function Person() {}

Person.prototype.hello =  function(){
    console.log('hello');
}

function Korean(region) {
    this.region = region;
    this.where = function() {
        console.log('where', this.region);
    }
}

Korean.prototype = Person.prototype; // 상속

const K = new Korean('seoul');

K.hello();
K.where();

console.log(K instanceof Person);
console.log(K instanceof Korean);
console.log(K instanceof Object);

// 객체 리터럴
const a= {}; //리터럴
console.log(a, typeof a);

const b= { 
    name: 'Mark';
}

console.log(b, typeof b);

const c = {
    name: 'Mark';
    hello1() {
        console.log('hello,', this);
    }
}


