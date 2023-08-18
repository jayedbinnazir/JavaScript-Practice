console.log("ProtoTypal-Inheritance");

let animal = {
    eats : true,
    walk(){
        console.log("Animal Walks at night ")
    },
    see(){
        console.log("animal Sees other animals")
    },
    // __proto__:longEar
};

let rabbit = {
    jumps:true ,
    __proto__ : animal,
};

console.log(animal);
console.log(rabbit)

console.log(rabbit.__proto__);
console.log(rabbit.eats);
rabbit.walk();

rabbit.eats = "Grass";
rabbit.walk = function(){{
    console.log("Rabbit Jums Bounce Bounce")
}}

rabbit.walk();
console.log(rabbit.eats);
rabbit.see();


let longEar = {
    earLength:10 ,
    __proto__:rabbit ,
};

console.log(longEar.earLength);
longEar.walk();
longEar.see();






