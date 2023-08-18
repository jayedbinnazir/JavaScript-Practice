// ekti bekti bollo , tumi amake (kaje) lagale ami (promise) korchi ,
// Kaaj_ta_Kore_dibo -> 1) Hoy kaaj ta hye jabe , 2) noile kaaj ta reject hye jabe 

// 1)-->kaaj = run me = pending ;
// 2)--> successfull = resolved;
// else 3)-->failed=give error = reject

// --> first create a funtion that will return a promise 
// --> that promise will recieve a executor function that acpts two arguments-> (resolve,reject)
// --. if there were no error then call the resolve() ; else call the reject()
        //-> `resolve` and `reject` is a function that we created in the promise call
                //--> Promise.then(create a resolve funtion).catch(create a reject function)

function func() {
    return new Promise((resolve,reject)=>{ // --> this executor function automatic executed while the promise is created
        let error = false ;
        if(!error) {
            console.log(`resolved successfully`);
            resolve(`Thanks Jayed`);
        } else {
            console.log(`Rejected :3 `)
            reject(`Hey Jayed`);
        }
    })
}

func().then((r)=>{
    console.log(`${r} now i hv a good understanding of promises`)
}).catch((e)=>{
    console.log(`${e} bad tutorial, i dn't understand`)
})


const taskOne=()=>{
   return new Promise((resolve,reject)=>{
       resolve(`2`)
   })
}

const taskTwo=()=>{
   return new Promise((resolve,reject)=>{
       resolve(`Task-Two-Completed`)
   })
}

const taskThree=()=>{
   return new Promise((resolve,reject)=>{
       resolve(`Task-Three-Completed`)
   })
}

const taskFour=()=>{
   return new Promise((resolve,reject)=>{
       resolve(`Task-Four-Completed`)
   })
}

taskOne().then(res=>console.log(res))
         .then(taskTwo).then(res=>console.log(res))
         .then(taskThree).then(res=>console.log(res)).
         then(taskFour).then(res=>console.log(res))

console.log(taskOne())

console.log(`Detailed About Promise`) ;

// --> When new Promise() is constructed it automatically call the executor function and returns 
        // an object with - two properties -> "state": and "result": 
                            //initially-----> "state":"pending" , result:'undefined'
                    //resolved successfull -> "state":"fullfilled" , result:"return by resolve function"
                    //rejected Error------ -> "state":"rejected" , result:"return by reject function"

        let promise = new Promise((resolve,reject)=>{
            console.log(`promise constructor called`)
            // can call either resolve() or reject() only once . and give only one state changes .
            // if we call resolve or reject many times they r ignored
            resolve(`it immidiately produces the result`);
            reject(`it will also`); 
            resolve('sdbsdhb')
        });

        console.log(`promiseState-->`,promise);

        // There is a consuming function . the promise object is a link btween 
        //                                                  [consumingFunc----->executorFunc]
        // the result,or an error produces by the executor setteleed in promise object,
        //--> and then recieved by the consuming function. 

        // The 'ConsumerFunc' subscribed as `.then\.catch\.finally method ` 

        // .then(f(result),f(error)) --> if resolved-->f(result) is called
                                    // --> if rejected-->func(error) is called
        //if we r only interested in resolved
        //----> use .then(f(result))
        // if we r only interested in error 
        //----> use .then(null, f(error)) or --> .catch(f(error));

        // .finally(f()) has no arguments . it runs when the object is settled

        promise.catch(err=>console.log(err)).finally(()=>console.log(`Good analysis`)).then(res=>console.log(res))
        // ofcourse the r executed one after another


        

let chainPromise = new Promise((resolve,reject)=>{
        resolve(1) ;
})

console.log(`ChainPromise1 ->`,chainPromise) ;

let pr1 = chainPromise.then()
console.log(`pr1 ->`,pr1) ;

//-----------------------Actual .

//--consumer function <--> Promise[Object] <--> executor function 

let promise1 = new Promise() ;

console.log(promise1)
