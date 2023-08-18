//Array.from takes an iterable or ArrayLike Objects as an arguments
// copy their values and return a arry of them
//Array Like
let arrayLike1={
    0:"Bilbo",
    1:"Gandlaf",
    2:"Nazgul",
    length:3,
};

let makeArray1=Array.from(arrayLike1);

console.log("1",arrayLike1);
console.log("2",makeArray1);

//Iterables

let itObj = {
    fName:"Jarin",
    lName:"Tasnim",
    age:25,
    [Symbol.iterator](){
        let count = 0;
        let props=Object.keys(itObj);
        // let isDone=false;
        
           let next=()=>{
               if(count<props.length){
                   return {done:false , value:this[props[count++]] }
               } else {
                   return {done:true }
               }
            }
            return {next}
        
    }
};

let myIterator = itObj[Symbol.iterator]();

// console.log(myIterator.next());

for(let props of itObj){
    console.log(props)
}

let makeArray2 = Array.from(itObj);

console.log("3",makeArray2);

//map.keys() – returns an iterable for keys,
//  map.values() – returns an iterable for values,
 // map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
  

 // For instance:
 console.log("");
 console.log("27Iteration Over Map");

 let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);
  console.log(`28The RecipeMap-`,recipeMap);
  console.log("");

  let mapKeys = recipeMap.keys();
  let mapValues = recipeMap.values();
  let mapEntries = recipeMap.entries();

  for(let item of recipeMap){
      console.log("ddd", item)
  }

  console.log("mapKeys",mapKeys);
  console.log("mapValues",mapValues);
  console.log("mapEntries",mapEntries);

// Map ---> Object 
//Method --> Object.entries(plainObj) returns a array of [[key,value],[key,valuue]] pairs what map needs

let plainObj={
    fName:"Bilbo",
    lName:"Gandlaff",
    name:"Nazgul",
};

let plainObjectMap = Object.entries(plainObj);
console.log("33", plainObjectMap )

let plainMap = new Map(plainObjectMap);
console.log(plainMap)

//Object--->Map
//Method---> Object.fromEntries(Map/Array Of [[key,value]] pairs)

let objectAgain=Object.fromEntries(plainMap);
console.log("34 objectagayn-" , objectAgain)


let arr=[1,2,3,4,5];

console.log(arr.keys());
console.log(arr.values());
console.log(arr.entries());



