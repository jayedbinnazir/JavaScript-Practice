// let arr = [1,2,3,4,5];

// let createIterator=(array)=>{
//     let count=0;
//     return {
//         next(){
//             if(count<arr.length){
//                 return {done:false , value:arr[count++] }
//             } else {
//                 return {done:true ,value:arr[count++]}
//             }
//         }
//     }
// }

// let myIterator=createIterator(arr);

// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());

// let obj={
//     fname:"Chandler",
//     lname:"Bing"
// };

// obj[Symbol.iterator]=function(){
//     let props = Object.keys(obj);
//     let count=0;
//     return {
//         next:()=>{
//             if(count<props.length){
//                 return {done:false , value:this[props[count++]] }
//             }else return {done:true ,value:this[props[count++]]}
//         }
//     }
// }

// // for (p of obj ){
// //     console.log(p)
// // }

// let objIterator = obj[Symbol.iterator]();

// console.log(objIterator.next())
// console.log(objIterator.next())
// console.log(objIterator.next())
// console.log(objIterator.next())

// let objects = {
//     fname:"Chandler",
//     lName:"Bing"
// };

// let anIterator=(ob)=>{
//     let property=Object.keys(ob);
//     let count=0;
//     let isDone=false;

//     let next=function(){
//         if(count>=property.length){
//             isDone=true;
//         } 
//         return {done:isDone,value:ob[property[count++]] }
//     }
//     return {next};
// }

// let theIterator=anIterator(objects);
// console.log(`ff`,theIterator.next() )
// console.log(`ff`,theIterator.next() )
// console.log(`ff`,theIterator.next() )


// let str = 'Chandler';

// let strIterator = str[Symbol.iterator]();
//  while(true){
//      let result = strIterator.next();
//      if(result.done) break ;
//      console.log(result.value)
//  }

//  let arrayLike = {
//      0:"Gandlaf",
//      1:"Nazgul",
//      length:2
//  };

//  let plainObj = {
//      fname:"Jayed",
//      lName:"Bin",
//      Name:"Nazir",

//      [Symbol.iterator](){
//         let count=0;
//         let item=Object.keys(plainObj);
//         let isDone=false;
//         return {
//             next:()=>{
//                 if(count>=item.length){
//                     isDone=true;
//                 }
//                 return {done:isDone , value: this[item[count++]] }
//             }
//         }
//      }
//  }

//  let makeArray=Array.from(arrayLike);
//  console.log(makeArray);

//  let PlainObjArray = Array.from(plainObj);
//  console.log(PlainObjArray)

// let army = {
//     minAge: 18,
//     maxAge: 27,
//     canJoin(user) {
//       return user.age >= this.minAge && user.age < this.maxAge;
//     }
//   };
  
//   let users = [
//     {age: 16},
//     {age: 20},
//     {age: 23},
//     {age: 30}
//   ];

// //   let soldier = users.filter(use=>{
// //      return army.canJoin(use)
// //   })


// let soldiers = users.filter( army.canJoin , army )
// console.log(soldiers)

// let recipeMap = new Map([
//   ['cucumber', 500],
//   ['tomatoes', 350],
//   ['onion',    50]
// ]);

// let keys = recipeMap.keys();
// let values = recipeMap.values();
// let entries = recipeMap.entries();

// console.log(keys);
// console.log(values);
// console.log(entries);

// recipeMap.forEach( (value, key, map) => {
//   console.log(`32Using ForEachMetHod - ${key}: ${value}`); // cucumber: 500 etc
// });

// let room ={
//   hello(){
//     console.log("Hello")
//   },
//   toJSON(){
//     return this.hello
//   }
  
// };

// console.log(room);

// let json= JSON.stringify(room);

// console.log(json)

// function makeCounter() {
//   let count = 0;

//   return function() {
//     return count++;
//   };
// }

// let counter1 = makeCounter();

// console.log(counter1())
// console.log(counter1())
// let counter2 = makeCounter();
// console.log(counter2())
// console.log(counter2())

// let cache = new Map();


// let c=new Map();
// c.set("max",30)

// cache.set("min" , c)
// console.log(cache)

// console.log(cache.get("min").get("max"))

// function sum(a,b){
//   console.log("Called");
//   return a+b;
// };


// function another(func,f1){

//   return function sayHi(){
//     let key=f1(arguments)
//     console.log("i m called ")
//     let result = func(...arguments)
//     console.log(arguments)
//     return result
//   }

// };

// function f(args){
//  console.log("sdnksdnkdksjdksjksjdksdj",args[0]+','+args[1])
// }

// sum = another(sum,f);

// console.log(sum(1,2));
// console.log(sum(1,2));
// console.log(sum(1,2));

// let user = {
//   firstName:"Anderson",
//   sayHi(){
//     console.log("hellow Mr.!", this.firstName)
//   }
// };

// let sayHi= user.sayHi.bind(user)

// console.log(sayHi());