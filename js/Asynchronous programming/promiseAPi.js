console.log(`Promise API`)

let promise1 = Promise.resolve(`promise-1`) ;

let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(`promise-2`) , 2000)
});

let promise3 = Promise.resolve('promise-3') ;

let promise4 = Promise.reject(new Error(`error in promise-4`));

let promiseAll = Promise.all([promise1 , promise2 , promise3 ]);

let arrayOfResults = [] ;

console.log(promiseAll) ;

promiseAll.then((res)=>{
    arrayOfResults = [...res]
    console.log(arrayOfResults)
})

let promiseALlSet = Promise.allSettled([promise1,promise2,promise3,promise4]);
console.log(`all set->`,promiseALlSet);

let race = Promise.race([promise1,promise2,promise3,promise4]);
console.log(`Race-`,race)




