console.log('Promise Finalley');


// A promise is a special JavaScript object that links the “producing code” and the “consuming code” together.
// In terms of our analogy: this is the “subscription list”.The “producing code” takes whatever time it needs to produce 
// the promised result, and the “promise” makes that result available to all of the subscribed code when it’s ready.

//--consumer function <--> Promise[Object] <--> executor function/resolver ;

// the call [new Promise((resolve,reject)=>{}) new promise object is created <pending> state ]

let promise1 = new Promise((resolve,reject)=>{
    // resolver function/executor--> runs auto when Promise constructor is called
    // the executor do something and produce a result
    //then sooner or later it must called resolve(result) or reject(result)

});
console.log(promise1);
//The promise object returned by the new Promise constructor has these [internal properties]

// there r three state of promise object [state_property]:-> pending(initially created)/fullfilled(resolve(result) is called)
                                    //   -> rejected(reject() is called when error occures)
                                    // [result-property] -> undefined(initially-when it is jst created without call resolve/reject)
                                                       //-> value (when resolve(valued) is called)
                                                       //-> error (when reject (value) is called)

let promise2 = new Promise((resolve,reject)=>{
    console.log(`inside Promise 2`) ;
    setTimeout(()=>{
        console.log('inside setTiomout in promise 2 ')
        let bool = true ;
        let value="jayed";
   
    if(bool) {
        console.log(`resolve is called`)
        resolve(value)
    } else {
        console.log('reject is called')
        reject(value)
    }
    },2000)
})
console.log('After creation Of promise-2');
console.log(`promise-2->`,promise2) ;
setTimeout(()=>console.log(promise2),3000);
/*
my analysis for resolve and reject function -->
they r given us by the javascript internally
they will set the [result:value]

function resolve(a) {  
    return a
}

function reject(a){
    return a
}


*/

let t2 = promise2.then(response=>console.log('response of t2-->',response));

//then is waitingg for the response of resolving result-->

console.log('after calling the first then');

let promise3 = new Promise((resolve,reject)=>{
    resolve(2)
});

console.log(`promise 3 ->`,promise3)

let t3 = promise3.then(res=>{
    console.log('inside t3')
    return new Promise((resolve,reject)=>{
        console.log(`----------------------------------------------------------------`)
        resolve(res)
    })
})

console.log(`----------> t3`,t3)

let promise4 = new Promise((resolve,reject)=>{
    resolve(5)
});

setTimeout(()=>console.log(`promise-4--->`,promise4.then((res)=>{
    return new Promise((resolve,reject)=>{
        resolve(res)
    })
})),2000)

