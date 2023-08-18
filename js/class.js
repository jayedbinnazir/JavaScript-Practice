console.log(`Class-Object-Inheritence`);

// Constructor Object-->

function User1(name,age,func) {
    this.name=name ;
    this.age=age;
    this.multiply=func ;
}

let user1 = new User1('jayed',25 ,(a,b)=>a+b);

console.log(user1.multiply(2,3)) ;

console.log('ClassObject----')
console.log('');

class User2 {
    constructor(name,age,func,salary) {
        this.name = name ;
        this.age = age ;
        this.salary = salary ;
        this.multiply = func ;
    }

    substraction() {
        return this.salary - this.age
    }

    static division(a,b) {
        return a/b ;
    }
}

let user2 = new User2('jayed',23 , (a,b)=>a+b , 50) ;
console.log(user2)

class User3 extends User2{
    constructor(name,age,func,salary){
        super(name,age,func,salary)
    }
}

let user3 = new User3('Maya',19 ,(a,b)=>a*b , 30);

console.log(user3);

class User4 extends User1 {
    constructor(name,age,func){
        super(name,age,func)
    }
}

let user4 = new User4('jayed',25 ,(a,b)=>a+b);
console.log(`user4-`,user4)











