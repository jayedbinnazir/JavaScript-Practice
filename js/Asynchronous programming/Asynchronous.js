console.log("Asynchronous-Programming-Knowledge") ;

// Javascrip has a Blocking-Code behaviour 
// --> it read line by line code and execute them line by line. 
// without executig one line it will nor go to the next line . 
// it's a single threaded programming --> Read and execute line by line .

console.log('Task-1'); 
console.log('Task-2'); 
console.log('Task-3'); 
console.log('Task-4');
console.log('Task-5');

//Sequencially done the work .
// or, 

let taskOne=()=>{
    console.log("Task-1")
};

let dataLoading=()=>{
    console.log("Task-2 , data-loading")
}


let taskTwo=()=>{
    setTimeout(dataLoading , 2000)
};

let taskThree=()=>{
    console.log("Task-3")
};

let taskFour=()=>{
    console.log("Task-4")
};

let taskFive=()=>{
    console.log("Task-5")
};
console.log("Function execution");

taskOne();
taskTwo(); // this task will complete after 2 second . it will not hang the execution . it waits for data . gives the execution flow to the next line 
taskThree();
taskFour();
taskFive();