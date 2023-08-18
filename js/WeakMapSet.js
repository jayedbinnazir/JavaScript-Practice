console.log(`Weak Map and Weak Set`);

/*As we know from the chapter Garbage collection, 
JavaScript engine stores a value in memory while it is reachable (and can potentially be used).
*/

// Simply put, “reachable” values are those that are accessible or usable somehow. 
//They are guaranteed to be stored in memory.

// user has a reference to the object
let user1 = {
    name: "John"
};

//If the value of user is overwritten, the reference is lost:1

user1 = null;

console.log("1-User1 Lost His value Object - ", user1);  //This will give an error as object was lost from memory

// And if we have anothe refference then it can be accessed 
//Foe Example :-

let user2 = {
    name: "John"
};

let admin2 = user2; // Copied the refference  , Now admin can also Reach the object

user2 = null; // user2 Lost The Refference  .  It Can not Access the Object 
console.log('2-User2 Can Not access The Object -', user2);

// Admin Can still Access The Object 
console.log(`3-admin access The Object - `, admin2.name);
console.log("");

//Usually, properties of an object or elements of an array or another data structure are considered reachable 
//and kept in memory while that data structure is in memory.

//For instance, if we put an object into an array,
// then while the array is alive, the object will be alive as well, even if there are no other references to it.

let john1 = { name: "John" };

let array1 = [john1];

john1 = null;
console.log("4-John1 is lost his Referrence-", john1);
// but we can still access john 1 bu array1 

console.log("5-array1 accessed the object-", array1[0]);


//Similar to that, if we use an object as the key in a regular Map, 
//then while the Map exists, that object exists as well. It occupies memory and may not be garbage collected.

//For instance:

let john2 = { name: "John2" };
let john3 = { name: "John3" };

let map1 = new Map();
map1.set(john2, "27");
map1.set(john3, "29");

john2 = null; // overwrite the reference

console.log("6-John2 Lost  The Ref-", john2, john3);

//john is stored inside the map,
//we can get it by using map.keys()
let newMap = map1.keys(); //returns an iterator for keys

console.log('7-Key Iterator', newMap);

for (let key of newMap) {
    console.log("8-Accessing Properties By iteration -", key);
};
console.log("");

//***WeakMap
//The first difference between Map and WeakMap is that keys must be objects, not primitive values:

let weakMap1 = new WeakMap();

let obj1 = {};

weakMap1.set(obj1, "ok"); // works fine (object key)
console.log("9 -The WeakMap1 - ", weakMap1);


// can't use a string as the key
//weakMap.set("test", "Whoops");   // Error, because "test" is not an object 


//Now, if we use an object as the key in it, 
//and there are no other references to that object – it will be removed from memory (and from the map) automatically.

let john4 = { name: "John" };

let weakMap2 = new WeakMap();
weakMap2.set(john4, "...");

john4 = null; // overwrite the reference

// john is removed from memory!
//Compare it with the regular Map example above. 
//Now if john only exists as the key of WeakMap – it will be automatically deleted from the map (and memory).

//WeakMap does not support iteration and methods keys(), values(), entries(), 
//so there’s no way to get all keys or values from it.
/*
WeakMap has only the following methods:

weakMap.get(key)
weakMap.set(key, value)
weakMap.delete(key)
weakMap.has(key)
Why such a limitation? That’s for technical reasons. If an object has lost all other references (like john in the code above), then it is to be garbage-collected automatically. But technically it’s not exactly specified when the cleanup happens.

The JavaScript engine decides that. It may choose to perform the memory cleanup immediately or to wait and do the cleaning later when more deletions happen. So, technically, the current element count of a WeakMap is not known. The engine may have cleaned it up or not, or did it partially. For that reason, methods that access all keys/values are not supported.

Now, where do we need such a data structure?

*/
// The visitCount Mechanism******

let visitCountMap = new Map();

function countUser(user) {
    let count = visitCountMap.get(user) || 0;
    visitCountMap.set(user, count + 1)
};

let John = { name: 'John' };
countUser(John);
countUser(John);
countUser(John);
console.log(`10 - User John Visits Count -`, visitCountMap);
/*
    when John is Passed as the key without the value
    then visitcount.get(user) call returns value of undefined  , so the OR operator
    returns the last falsy value 0 ;
*/

//Use case: additional data******

//The main area of application for WeakMap is an additional data storage.

//If we’re working with an object that “belongs” to another code,
// maybe even a third - party library, and would like to store some data associated with it, 
//that should only exist while the object is alive – then WeakMap is exactly what’s needed.

//We put the data to a WeakMap, using the object as the key, and when the object is garbage collected,
// that data will automatically disappear as well.

  //********* */  weakMap.set(john, "secret documents");

// if john dies, secret documents will be destroyed automatically

//Let’s look at an example.

//For instance, we have code that keeps a visit count for users.The information is 
//stored in a map: a user object is the key and the visit count is the value.When a 
//user leaves(its object gets garbage collected), we don’t want to store their visit count anymore.

   // Here’s an example of a counting function with Map:

    // 📁 visitsCount.js
    let visitsCountMap1 = new Map(); // map: user => visits count

// increase the visits count
function countUser1(user) {
    let count = visitsCountMap1.get(user) || 0;
    visitsCountMap1.set(user, count + 1);
}
//And here’s another part of the code, maybe another file using it:

// 📁 main.js
let john5 = { name: "John" };

countUser1(john5); // count his visits

// later john leaves us
john = null;

//Now, john object should be garbage collected, but remains in memory, as it’s a key in visitsCountMap.

//We need to clean visitsCountMap when we remove users, \
//otherwise it will grow in memory indefinitely.Such cleaning can become a tedious task in complex architectures.


//We can avoid it by switching to WeakMap instead:

// 📁 visitsCount.js
let visitsCountMap2 = new WeakMap(); // weakmap: user => visits count

// increase the visits count
function countUser2(user) {
  let count = visitsCountMap2.get(user) || 0;
  visitsCountMap2.set(user, count + 1);
}
//Now we don’t have to clean visitsCountMap. After john object becomes unreachable, 
//by all means except as a key of WeakMap, it gets removed from memory, 
//along with the information by that key from WeakMap.

/*  
    The Part  , it should be read from the DOCS
*/