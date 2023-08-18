//in The documentation there is a term called well known Symbols
//Now we r learning a built in symbol [Symbol.iterator]

//ES-6 gives us the new way to iterate over an object ,
// but for an object to work with for...of, it checks that whether the object has an iterator method
// for...of --> iterator --> Symbol.iterator

//let us see what happenns 

// if the obj returns a method than it is iterable byDefault 

let str = "Hello";
let arr = [1, 2, 3, 4, 5];
let num = 5;
let obj = {
    name: "Chandler"
};

console.log("String - " + typeof str[Symbol.iterator]);//iterable
console.log("Array - " + typeof arr[Symbol.iterator]);//iterable
console.log("Number - " + typeof num[Symbol.iterator]);//Undefined , so not Iterable
console.log("Object - " + typeof obj[Symbol.iterator]);//Undefined , so not Iterable

for (let string of str) {
    console.log("string-", string);
};
for (let array of arr) {
    console.log("Array-", array);
};
// for(let number of num){
//     console.log("Number-",number );  //not iterable
// };
// for(let object of obj){
//     console.log("Objecxt-",object );//Not iterable
// };


//SO, making obj iterable we will implement a special method [Symbol.iterator](); onWard we will create 
//our own iterator


// an iterable is an object which implements [Symbol.iterator]() method that calls the iterator 
//with the method next

// iterable {
//     [Symbol.iteratoor]():iterator;
// }

// iterator {
//     next():IResultObject
// }

// IResultObject { done:bool ; value:any data type }

//Let's create our own itertarot for arrays for better understandin


let iterable = [1, 2, 3];

let createIterator = (arrayName) => {
    let count = 0;
    return {
        next: function () {
            if (count < iterable.length) {
                return { done: false, value: iterable[count++] }
            }
            else return { done: true, value: undefined }
        }
    }
}

let myIterator = createIterator(iterable);

console.log(myIterator.next());
console.log(myIterator.next().value);
console.log(myIterator.next());
console.log(myIterator.next());

//So, iterator is a method that return an object with the method next() 
//& the next( ) method returns an object {done:bool , value: anyDataType}

//this functionality is implemented by for..0f loop internally , internally for...of calles the next() method untill the 
//iteration is end


//Now, we will make our iterable 

let person = {
    fName: "Chandler",
    lName: "Bing"
}

let properties = Object.keys(person); // returns an array of properties
console.log(properties) // [fName , lName]

person[Symbol.iterator] = function () {
    let count = 0;
    let isDone = false;

    let next = () => {
        if (count >= properties.length) {
            isDone = true;
        }
        return { done: isDone, value: this[properties[count++]] };
    }
    return { next };
}

for (p of person) {
    console.log(p)
}


let array = new Array(2, 3, 4);

console.log(array);
console.log(array[1]);
console.log(array.length);

let array2 = new Array(3);
console.log(array2);
console.log(array2.length);
console.log(array2[0]);

//For deeper understanding, let’s see how to use an iterator explicitly.
//We’ll iterate over a string in exactly the same way as for..of, but with direct calls.
//This code creates a string iterator and gets values from it “manually”:



let iterator = str[Symbol.iterator]();

while(true) {
    let result = iterator.next();
    if(result.done) break ;
    console.log(result.value);
}

//That is rarely needed, but gives us more control over the process than for..of. For instance, 
//we can split the iteration process: iterate a bit, then stop, do something else, and then resume later.



let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
  };

let makeArray = Array.from(arrayLike);
console.log(makeArray);
console.log(makeArray.length);
for(let item of makeArray){
    console.log(item)
}

let makeArray1=Array.from(person);
console.log(makeArray1);
for (let items of makeArray1){
    console.log(items)
}
let me = {
    f:"Jayed",
    l:"Junayed"
}



me[Symbol.iterator]=function(){
    let count=0;
    let isDone=false ;
    let prop = Object.keys(me);
    let next=()=>{
        if(count >= prop.length){
            isDone=true;
        }
        return {done:isDone , value : this[prop[count++]]}
    }
    return {next};
}

for (p of me){
    console.log(p)
};

let makeArray2 = Array.from(me);
console.log(makeArray2);

let range = {
    from: 1,
    to: 5,
  
    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },
  
    next() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };

  let makeArray4=Array.from(range);
  console.log(makeArray4);

  let makeArStr = Array.from(str);
  console.log(makeArStr);

  let string = '𝒳😂';

let chars = []; // Array.from internally does the same loop
for (let char of string) {
  chars.push(char);
}

console.log(chars);
