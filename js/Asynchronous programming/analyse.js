// console.log('analyseing');

// let promise = Promise.resolve(1);
// console.log(promise);

// function promised(){
//     return new Promise((resolve,reject)=>{
//         resolve(1)
//     })
// }

// console.log(promised())

// // Actually Promise is a class, calling it by new Promise we call it's constructor.
// //and create a promise object
// // resolve is it's static methood. 
// // we can call that static method anywhere by the class name--> Promise.resolve(value)
// // we don't need an executor for that. executor function is
// //actually for run a resolve() in conditional way

// function mul(a,b){
//     console.log("inside mul function")
//     return a+b;
// }

// async function func(){
//     return mul;
// }

// console.log(func().then(res=>console.log(res(2,3))))

// what ever returned by a async funtion that calls the [resolve(returned)]

// let promise1 = new Promise((resolve,reject)=>{
//     console.log(`inside promise 1 executor function`) ;
//     setTimeout(()=>{
//         console.log('inside setTimeOut of promise 1');
//         resolve(2)
//         console.log(`after Calling resolve in promise 1`)
//     },2000)

//     console.log('after calling setTimeOut')
    
// })
// console.log(promise1)

// promise1.then(()=>{
//     console.log('calling then')
// })

// error object 




// let err = new ReferenceError('sdd')
// console.log(err);

// let json1 = `{"user":"jayed","age":"25"}`;
// let json2 = `{"age":"25"}`;

// try {

//     let user1 = JSON.parse(json2)
//     jsjn
//     user2 =JSON.parse(json1);
//  if(!user2.name) {
//      throw new ReferenceError('inComplete Data')
//  }
//  console.log(user1);

// } catch(err) {
//     console.log(`JSON error:${err.message}`);
//     if(err instanceof ReferenceError) {
//         throw new ReferenceError('jayed')
//     }
    
// } 




