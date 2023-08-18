console.log('generatot');

// generator is a a function which generates a value for u on flying .
// there is no need to store a lot of numbers in an array .
// store it in generator that will generate that number for you when u need them but sequencially

// Syntax -->
//--> Just create a [funcyion* funtion_name] like this . in the function body
// use a yield keyword to store a value you need
// when u call the funtion it  returns u the generator .
// with that generator when u called the method next()
//it will return u an object with the first stored value-->
        // properties are {value:[stored in yield] , done:[true or false]--> }
        //call the method next() another time--it will give u the next object of ur next stored value.
        // randomly calling when the stored values r finished it will give u the
        // oobject  with the {value:undefined and (done:true)}

function* numbersGen(){
    yield 1;
    yield 2;
    yield (a,b)=>{
        return a+b ;
    };
    yield ()=>{
        return 5+5 ;
    };
    yield 5;
}

let gen = numbersGen();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next().value(2,3));
console.log(gen.next());
console.log(gen.next());