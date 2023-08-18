//cachingDecorator is a decorator: a special function 
//that takes another function and alters its behavior.

//***
//The result of cachingDecorator(func) is a “wrapper”: function(x) that “wraps” the call of func(x) into caching logic

function slow(x){
    console.log(`Called With ${x}`);
    return x ;
};


function cachingDecorator(func){

    let map=new Map()

    return function(x){
        if(map.has(x)){
            return map.get(x)
        } 

        let result= func(x); 
        map.set(x,result)

        return result;
    }
}

slow=cachingDecorator(slow)

console.log(slow(1)); //slow(1) is cached and the result returned
console.log(slow(1)); //slow(1) result returned from cache
console.log(slow(2)); //slow(2) is cached and the result returned
console.log(slow(2)); // slow(2) result returned from cache

/*

From an outside code, the wrapped slow function still does the same. It just got a caching aspect added to its behavior.

To summarize, there are several benefits of using a separate cachingDecorator instead of altering the code of slow itself:

The cachingDecorator is reusable. We can apply it to another function.
The caching logic is separate, it did not increase the complexity of slow itself (if there was any).
We can combine multiple decorators if needed (other decorators will follow).

*/
