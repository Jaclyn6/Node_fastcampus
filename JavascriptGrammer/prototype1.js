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

K.hello(); //output : hello
K.where();

console.log(K instanceof Person); // true
console.log(K instanceof Korean); // true
console.log(K instanceof Object); // true

// 객체 리터럴
const a= {}; //리터럴
console.log(a, typeof a);

const b= { 
    name: 'Mark'
};

console.log(b, typeof b);

const c = {
    name: 'Mark',
    hello1() {
        console.log('hello,', this.name);
    },
    hello2: function() {
        console.log('hello2,', this.name);
    },
    hello3: () => {
        console.log('hello3,', this.name); // arrow function은 this 객체 사용을 지원하지 않음
    }
};

c.hello1();
c.hello2();
c.hello3();

