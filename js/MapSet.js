// Object  
console.log("OBJECTS-------")

let objVar = { name: 'Jarin' }; // for showing what happens if objects r converted to string
let arrVar = ['name', 'Jarin', 'age'];// for showing what happens if Arrays r converted to string

let plain_Object = {
    John: 23,
    Pete: 25,
    Mary: 27,
    [objVar]: 13, //it shows `[object object]` as string ; You can alert objVar also
    [arrVar]: 13 // it shows `name , Jarin , age `;
};
console.log("1Plain Object-", plain_Object);
console.log('2Converted To Array-', Array.from(plain_Object));
console.log("");

// let objObj = {
//     {John : 23},
//     {John : 23},  //Invalid Format , You Need Key,Value Pair
//     {John : 23},
// };

let arrayLike1 = {
    0: 'John',
    1: 'Pete',
    2: 'Mary',
    length: 3
};

console.log("3ArrayLikeObject-", arrayLike1);
console.log('4Converted To Array-', Array.from(arrayLike1));
console.log("");

let arrayLike2 = {
    0: { 'John': 23 },
    1: { 'Pete': 25 },
    2: { 'Mary': 27 },
    length: 3
};

console.log('5ArrayLikeWith Holdin The Object-', arrayLike2);
console.log('6Converted To Array-', Array.from(arrayLike2));
console.log("");

let ObjectArray = {
    John: [1, 2, 3],
    Pete: [4, 5, 6],
    Mary: [7, 8, 9],
}
console.log('7ObjectHoldingThe Array -', ObjectArray);
console.log('8Converted To Array-', Array.from(ObjectArray));
console.log("");

let ArrayLike3 = {
    0: ['John', 23],
    1: ['Pete', 25],
    2: ['Mary', 27],
    length: 3
};

console.log("9ArrayLike Object Holding The Array-", ArrayLike3);
console.log('10Converted To Array-', Array.from(ArrayLike3));
console.log('');

// Array
console.log("ARRAYS---");

let plainArr = [1, 2, 3];
console.log("11Plain Array-", plainArr);
console.log("");

let arrObj = [
    { 'John': 23 },
    { 'Pete': 25 },
    { 'Mary': 27 },
]
console.log("12arrObj/JSON Arry-", arrObj);
console.log("");

let arrObjarrayLike = [
    { 0: { 'Jhon': 23, length: 1 } },
    { 1: { 'Pete': 25, length: 1 } },
    { 2: { 'Mary': 27, length: 1 } },
];
console.log("13ArrayHoldingObjectNestedArrayLike-", arrObjarrayLike);
console.log("");

console.log(`This format is Used Directly in Map([ [], [], [] ])`);
let ArrayOfArray = [
    ['John', 23],
    ['Pete', 25],
    ['Mary', 27],
];
console.log("14ArrayOfArray-", ArrayOfArray);
console.log(`15Used In Map- `, new Map(ArrayOfArray));
console.log(`16If Used In Set- `, new Set(ArrayOfArray));
console.log(`
    This Type Of Format Making is Not Possible WthOut Map--
    let mapLikeObj = {
        [
            {... },
            { ...},
            {... },
        ]
    };
`);
console.log("");


//Map Is Started ---
console.log(`Map Is Started ---`);

// Map is a collection of keyed data items, just like an Object. But the main difference is that Map 
//allows keys of any type.

// Methods and properties are:

// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the value by the key. returns True if the key exists at moment of calling
// map.clear() – removes everything from the map.
// map.size – returns the current element count.

let map = new Map();

map.set('John', 23);
map.set('Pete', 25);
map.set('Mary', 27);
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key
console.log('17Pure Map-', map);

console.log("18Map Size", map.size); // 3

console.log(`19John is a Key of map?-`, map.has('John')); //Case Sensetive 

let deletedKey = map.delete('Pete');

console.log("20deleting returns The Boolean & Removes Values By The key-", deletedKey);

console.log('21After DeleTion-', map);

// map[key] isn’t the right way to use a Map
// Although map[key] also works, e.g. we can set map[key] = 2, 
// this is treating map as a plain JavaScript object, 
// so it implies all corresponding limitations (only string/symbol keys and so on).

// So we should use map methods: set, get and so on.
let map2 = new Map();
map2.Jayed = 25;
map2.John = 23;
console.log("22After Appendind KeyValue Pair Like Plain Object", map2); //

// Map can also use objects as keys.

//For instance:

let john1 = { name: "John" };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john1, 123);

console.log("23Appendeing Object As Keys-", visitsCountMap ); // 123

//Using objects as keys is one of the most notable and important Map features.
// The same does not count for Object. 
//String as a key in Object is fine, but we can’t use another Object as a key in Object.

//Let’s try:

let john2 = { name: "John" };
let ben = { name: "Ben" };

let visitsCountObj = {}; // try to use an object

visitsCountObj[ben] = 234; // try to use ben object as the key
visitsCountObj[john2] = 123; // try to use john object as the key, ben object will get replaced

// That's what got written!
console.log( `24[Object Object]-`,visitsCountObj["[object Object]"] ); // 123
console.log("25Appending Object As Key In Object -",visitsCountObj)
//As visitsCountObj is an object, it converts all Object keys,
// such as john and ben above, to same string "[object Object]". Definitely not what we want.

/* 
    How Map compares keys
To test keys for equivalence, Map uses the algorithm SameValueZero.
 It is roughly the same as strict equality ===, but the difference is that NaN is considered equal to NaN. 
 So NaN can be used as the key as well.

This algorithm can’t be changed or customized.
*/

/*Chaining
Every map.set call returns the map itself, so we can “chain” the calls:
*/
let map3= new Map();
map3.set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');

  console.log("26Chaining Add In MAp3 -",map3);

 /* Iteration over Map
  For looping over a map, there are 3 methods:
  
  map.keys() – returns an iterable for keys,
  map.values() – returns an iterable for values,
  map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
  */

 // For instance:
 console.log("");
 console.log("27Iteration Over Map");
 let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);
  console.log(`28The RecipeMap-`,recipeMap);
  console.log("");
  
  // iterate over keys (vegetables)
  for (let vegetable of recipeMap.keys()) {
    console.log("29Iteration over Keys-",vegetable); // cucumber, tomatoes, onion
  }
  console.log("");
  
  // iterate over values (amounts)
  for (let amount of recipeMap.values()) {
    console.log("30Iteration Over Values-",amount); // 500, 350, 50
  }
  console.log("");
  
  // iterate over [key, value] entries
  for (let entry of recipeMap) { // the same as of recipeMap.entries()
    console.log("31Iteration Over Key Values -",entry); // cucumber,500 (and so on)
  }
  console.log("");

  /*
    The insertion order is used
    The iteration goes in the same order as the values were inserted. 
    Map preserves this order, unlike a regular Object.
  */



//Besides that, Map has a built-in forEach method, similar to Array:

// runs the function for each (key, value) pair
recipeMap.forEach( (value, key, map) => {
    console.log(`32Using ForEachMetHod - ${key}: ${value}`); // cucumber: 500 etc
  });
  console.log("");

//***Object.entries: Map from Object
/*When a Map is created, we can pass an array (or another iterable) with key/value pairs for initialization, 
like this:
*/
// array of [key, value] pairs
let map4 = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);
console.log(`33 map4`,map4);
console.log("34Map4GetValue 1-", map4.get('1') ); // str1
console.log("");
/*If we have a plain object, and we’d like to create a Map from it, 
then we can use built-in method ***Object.entries(obj) 
that returns an array of key/value pairs for an object exactly in that format.
*/

//Here, Object.entries returns the array of key/value pairs:*** [ ["name","John"], ["age", 30] ].
// That’s what Map needs.

let plainObj = {
    name: 'John',
    age:23 ,
};
console.log("35PlainObj-", plainObj);
//Make it Map ,
let map5 = new Map(Object.entries(plainObj));
console.log(`36ConvertedToMap5-`, map5);
console.log(`37Getting Converted Map5 Values-`, map5.get('name') ); // John
console.log("");

//***Object.fromEntries: Object from Map
//We’ve just seen how to create Map from a plain object with Object.entries(obj).

/*There’s ***Object.fromEntries method that does the reverse: given an array of [key, value] pairs, 
it creates an object from them:
*/

let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);

// now prices = { banana: 1, orange: 2, meat: 4 }
console.log(`38-Getting an Object from ArrayOfArray-`,prices);
console.log('39Getting Values Like Object Method-',prices.orange); // 2
console.log("");

/*We can use Object.fromEntries to get a plain object from Map.
E.g. we store the data in a Map, but we need to pass it to a 3rd-party code that expects a plain object.
*/
//Here we go:

let map6 = new Map();
map6.set('banana', 1);
map6.set('orange', 2);
map6.set('meat', 4);

let objFromMap = Object.fromEntries(map6.entries()); // make a plain object (*)
console.log("40object From Map-",objFromMap);
// done!
// obj = { banana: 1, orange: 2, meat: 4 }

console.log(`41Getting Values From it-`,objFromMap.orange); // 2
//A call to map.entries() returns an iterable of key/value pairs, exactly in the right format for Object.fromEntries.

//We could also make line (*) shorter:

let obj1 = Object.fromEntries(map6); // omit .entries()
//That’s the same, because Object.fromEntries expects an iterable object as the argument. 
//Not necessarily an array. And the standard iteration for map returns same key/value pairs as map.entries().
// So we get a plain object with same key/values as the map.

console.log("");
console.log("");

//***Set
console.log("Set---");
/*
A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

Its main methods are:

new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), 
                    copies values from it into the set.

set.add(value) – adds a value, returns the set itself.

set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.

set.has(value) – returns true if the value exists in the set, otherwise false.

set.clear() – removes everything from the set.

set.size – is the elements count.

The main feature is that repeated calls of set.add(value) with the same value don’t do anything. 
            That’s the reason why each value appears in a Set only once.
*/

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
let jayed = [ 'nas' , "Jayed"];

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
set.add(jayed);

console.log("42 Set-",set);

let set1 = new Set([
  john ,
  pete,
  mary,
  jayed
]);
console.log('4Set-1', set1);
/* 
The alternative to Set could be an array of users, and the code to check for duplicates on every insertion using 
***arr.find.
 But the performance would be much worse, because this method walks through the whole array checking every element. 
Set is much better optimized internally for uniqueness checks.

*/

//Iteration over Set

//We can loop over a set either with for..of or using forEach:

let set2 = new Set(["oranges", "apples", "bananas"]);

for (let value of set2) console.log(`Using For Of`,value);

// the same with forEach:
set.forEach((value, valueAgain, set2) => {
  console.log(`Using For Each -`,value);
});
//Note the funny thing. The callback function passed in forEach has 3 arguments: 
// a value, then the same value valueAgain, and then the target object. Indeed, 
//the same value appears in the arguments twice.

//That’s for compatibility with Map where the callback passed forEach has three arguments. 
//looks a bit strange, for sure. But may help to replace Map with Set in certain cases with ease, and vice versa.

//The same methods Map has for iterators are also supported:
/*
set.keys() – returns an iterable object for values,
set.values() – same as set.keys(), for compatibility with Map,
set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.
*/