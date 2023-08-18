console.log(`AsyncAwait`);

function taskOne(callBack) {
    console.log(`Complete-1`)
    callBack()
}

function taskTwo(callBack) {
    setTimeout(() => { console.log(`Complete-2`); callBack() }, 2000)

}


function taskThree(callBack) {
    console.log(`Complete-3`)
    callBack()
}


function taskFour() {
    console.log(`Complete-4`)
}

// taskOne(()=>{
//     taskTwo(()=>{
//         taskThree(()=>{
//             taskFour()
//         })
//     })
// })

function taskFive(){
    return new Promise((resolve,reject)=>{
        resolve(`task-5`) ;
        console.log(`task five promiise executed`)
    })
}

function taskSix(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`Task-6`)
            console.log(`task 6 promiise executed`)
        },2000)
    })
}
function taskSeven(){
    return new Promise((resolve,reject)=>{
        resolve(`task-7`)
        console.log(`task 7 promiise executed`)
    })
}
function taskEight(){
    return new Promise((resolve,reject)=>{
        resolve(`task-8`)
        console.log(`task 8 promiise executed`)
    })
}

taskFive().then(res=>console.log(res))
          .then(taskSix).then(res=>console.log(res))
          .then(taskSeven).then(res=>console.log(res))


// function taskNine() {
//     console.log(`Task-9`)
// }

// function taskTen() {
//     setTimeout(() => console.log(`Task-10`), 2000);
//     console.log(`execution forwarded`)
// }
// function taskEleven() {
//     console.log(`Task-11`)
// }

// function tasktwelve() {
//     console.log(`Task-12`)
// }

// let promise = new Promise((resolve, reject) => {
//     resolve()
// });

// promise.then(taskNine).then(taskTen).then(taskEleven).then(tasktwelve)


// console.log(`welcome`) ;

// let promise = new Promise((resolve,reject)=>{
//     console.log(`execution in resolve`);
//     resolve(`task is done`)
// });

// promise.then(res=>console.log(res))
// console.log(`Bye`)
