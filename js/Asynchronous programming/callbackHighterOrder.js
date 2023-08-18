console.log("CallBack And Higher Order Function");

//--> j Funtion onnofunction e parameter hishebe use hoy shetaie call-back . 
//when we need to execute a task and after that we declaritively want to execute a particular task
// we use this callBack too ;
//--> which recieves callback that fnction is a higherOrder function

function square(x){
    console.log(`square of ${x}:`,x*x)
}

square(2) ;

function highreOrder(num , square){
    square(num)
}

highreOrder(7,square); 

// control The execution one after another with callBack ==>

let taskOne=(callBack)=>{
    console.log("Task-1");
    callBack()
};

let dataLoading=()=>{
    console.log("Task-2 , data-loading")
}


let taskTwo=(callBack)=>{
    setTimeout(()=>{
        dataLoading();
        callBack()
    }, 2000)
   
};

let taskThree=(callBack)=>{
    console.log("Task-3")
    callBack()
};

let taskFour=()=>{
    console.log("Task-4")
};

let taskFive=(callBack)=>{
    console.log("Task-5")
    callBack()
};

taskOne(()=>{
    taskTwo(()=>{
        taskThree(()=>{
            taskFive(()=>{
                taskFour()
            })
        })
    })
})