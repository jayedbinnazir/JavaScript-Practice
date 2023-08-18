console.log(`Destructuring Assignment`);
/*
Destructuring assignment
The two most used data structures in JavaScript are Object and Array.

Objects allow us to create a single entity that stores data items by key.
Arrays allow us to gather data items into an ordered list.
Although, when we pass those to a function, it may need not an object/array as a whole. It may need individual pieces.

Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, 
as sometimes that’s more convenient.

Destructuring also works great with complex functions that have a lot of parameters, default values, 
and so on. Soon we’ll see that.
*/

let arr1 = ['John' ,  'Smith'];
console.log(`1 - Array1 -` , arr1);

//Destructuring means , Simply store The Value Into the Variable .

//SYNTAX - let [var1 , var2 , and so on] = [element1,element2,element3 , and so on]

let [firstName , lastName] = arr1 ; 
console.log (`2 - Destructring Var FirstName `, firstName);
console.log (`3 - Destructring Var LastName `, lastName);

// We Actually Doing This
    firstName = arr1[0];
    lastName = arr1[1];

   // Now we can work with variables instead of array members.

//It looks great when combined with ***split or other array-returning methods:

let arr2 = "John Smith".split(' ');
console.log(`4 - Array2 By Split -`,arr2);
let [firstName1 , sureName] = arr2;

console.log(`4 - Destructring Var FirstName1 applied split - `, firstName1);
console.log(`5 - Destructring Var sureName applied split - `, sureName);

// U Can Ignore Unwanted Items paasing Via Extra Commas 

let [ a , , b ] = [ 1 , 2 , 3 ] ;

console.log(`5 - Skipped via comma -`, b);

// Destructure Actually Works With every Iterable On The Right Side 

let [ c , d , e ] = 'str' ; 
console.log(`6 - Destructuring String` , c ,d ,e );
let set1 = new Set([1,2,3 , ['s','p','d']]);
console.log(`'''''''''''''''''''''''''''-` , set1)

let [ f , g , h ]=  new Set([1,2,3]);

console.log(`7 - Destructuring Set - `, f , g , h );

//That works, because internally a destructuring assignment works by iterating over the right value. 
//It’s kind of syntax sugar for calling for..of over the value to the right of = and assigning the values.

//Assign to anything at the 'Left' Side - 
//We can use any “assignables” at the left side
let user1 = {};
console.log('8 - user1-', user1);
[user1.name , user1.sureName] = "John Smith".split(' ');
console.log("Assigning Values - ");
console.log(`9 - user1.name -`,user1.name );
console.log(`10 - user1.sureName -`,user1.sureName );

//Iterating Map - 
let user2 = new Map();
user2.set("name", "John");
user2.set("age", "30");

let [key , value] = user2;     `[
                                       [], 
                                       [] 
                                 ]`
console.log('11 - ',key);
console.log('12 - ',value);
     

// Map iterates as [key, value] pairs, very convenient for destructuring
for (let [key, value] of user2) {
  console.log(`13 - ${key}:${value}`); // name:John, then age:30
}

//Looping Over Object By Object.entries(obj) Call - 

let user3 = {
    name :'John',
    age :30
} ;
for (let [key , value] of Object.entries(user3) ){
    console.log(`14 - user3 # - ${key}:${value}`);
}

//Swap variables trick
//There’s a well-known trick for swapping values of two variables using a destructuring assignment:

let guest = "jane" ;
let admin = "Pete";

[guest , admin] = [admin , guest];
console.log(`15 - Guest -` ,guest);
console.log(`16 - Admin -` ,guest);

//Here we create a temporary array of two variables and immediately destructure it in swapped order.
//We can swap more than two variables this way.

//The ...Rest ParaMeter 
let [k , l , m] = [1,2,3,4,5] ;
console.log( `17 - k , l , m - `,k,l,m , `the element 4 , 5  is  ignored` );

// If we also want to gather the rest elements we have to use rest  ...var  variable ;

let [n , o , ...p] = [1, 2 , 3 , 4 , 6 , 7 , 8 , 9]

console.log(`18 -  n , o  ,and the rest ...p ` , n , o , p);
console.log( `19 -  p[2]-`, p[2]);

//The value of rest is the array of the remaining array elements.

//Default values : -

///f the array is shorter than the list of variables at the left, 
//there’ll be no errors. Absent values are considered undefined:

let [firstName2, surename2] = [];

console.log(`20 - firstName2 -`,firstName2); // undefined
console.log(`21 - sureName10  -`,surename2); // undefined

//If we want a “default” value to replace the missing one, we can provide it using =:

// default values
let [name1 = "Guest", surname3 = "Anonymous"] = ["Julius"];

console.log(`22 - Julius (from array)`,name1);    // 
console.log(`23 - Anonymous (default used)`,surname3); //

//Default values can be more complex expressions or even function calls. 
//They are evaluated only if the value is not provided.

//For instance, here we use the prompt function for two defaults:

// runs only prompt for surname
let [name2 = prompt('name?2'), surname4 = prompt('surname4?')] = ["Julius"];

console.log(`24 - Julius (from array)`,name2); 
console.log(`25 - Anonymous (default used) Whatever Propmpt Gets -`,surname4); //
console.log("");

//Please note: the prompt will run only for the missing value (surname).

//Object destructuring : -

//The destructuring assignment also works with objects.

//The basic syntax is:

// ***let {var1, var2} = {var1:…, var2:…}
//We should have an existing object at the right side, that we want to split into variables. 
//The left side contains an object-like “pattern” for corresponding properties. ***
//In the simplest case, that’s a list of variable names in {...}.

//For instance:

let options1 = {
    title1 : "Menu" ,
    width1: 100 ,
    height1 : 200,
};
      // the keys can be different in order , but key names must be same as variable
let {title1 , height1 , width1 } = options1;
console.log(`26 - Title1`,title1);
console.log(`26 - Width1`,width1);
console.log(`26 - height1`,height1);

//Properties options.title, options.width and options.height are assigned to the corresponding variables.
//The order does not matter. This works too:

//Some Rules:-
/*
    1) we can also customize variable name by adding a colon after the variable {key:var_name , ......}
    2)We can set default Values & customize var_name Togather {key:VarName = default ...}
    3)Just like with arrays or function parameters, default values can be any expressions or even function calls. 
      They will be evaluated if the value is not provided.
*/
//For instance : -
let options2 = {
    title2 : "Menue",
    height2 : 200 ,
    gaja : 100 ,
    shorisha :200 

    
}

let { title2= "Untitled" , height2:H , width2 = prompt("Width ?") , tomato2:T=20 , ...rest }  = options2 ; //Gaja, shorisha is 
                                                                                                    //ignored

console.log('27 - title2', title2 );
//console.log('28 - height2', height2 ); //Can not Access By the Height2 var it's an error
console.log('29 -Accessing  height2  by  H', H );
console.log('30 - Width default is A func Input -',width2 );
console.log('31 - Tomato using Default With another var name T -',T );

// we can only access those we need -
let {gaja , shorisha} = options2 ;
console.log(`32 - gaja`, gaja);
console.log(`33 - shorisha`, shorisha);

//We can access the rest of properties by ...Rest Pattern

console.log(`34 - restPattern`, rest);
console.log(`35 - restPattern.gaja`, rest.gaja);
console.log(`36 - restPattern.shorisha`, rest.shorisha);

/*
    Gotcha if there’s no let
In the examples above variables were declared right in the assignment: let {…} = {…}. Of course, we could use existing variables too, without let. But there’s a catch.

This won’t work:

let title, width, height;

// error in this line
{title, width, height} = {title: "Menu", width: 200, height: 100};
The problem is that JavaScript treats {...} in the main code flow (not inside another expression) as a code block. Such code blocks can be used to group statements, like this:

{
  // a code block
  let message = "Hello";
  // ...
  alert( message );
}
So here JavaScript assumes that we have a code block, that’s why there’s an error. We want destructuring instead.

To show JavaScript that it’s not a code block, we can wrap the expression in parentheses (...):

let title, width, height;

// okay now
({title, width, height} = {title: "Menu", width: 200, height: 100});

alert( title ); // Menu
*/

/*
    Nested destructuring
If an object or an array contain other nested objects and arrays,
 we can use more complex left-side patterns to extract deeper portions.

In the code below options has another object in the property size and an array in the property items. 
The pattern at the left side of the assignment has the same structure to extract values from them:
*/

//For instance :-
console.log("");
console.log( "Nested Destructuring");

let options3 = {
    size: {
        height3 : 100 ,
        width3 : 300
    },
    items3:["Cake" , " IceCream" ],
    Menue : true ,
};

console.log('37 Options3', options3);

console.log("Nested Destructuring");

let {
    size : {
        height3: hit ,
        width3 :w

    },
    items3 :[item1 , item2  ],

    Menue,
    title3= "Menue" //Setting Dafeault

}= options3;

console.log(`38 - size Height -` ,h);
console.log(`39 - size Width -` ,w);
console.log(`40 - items item1 -` , item1);
console.log(`41 - items item2 -` , item2);
console.log(`42 - Menue -` ,Menue);
console.log(`42 - Title3-` ,title3);
//

//Smart Functions : -

//There are times when a function has many parameters, most of which are optional.
// That’s especially true for user interfaces. 
//Imagine a function that creates a menu. It may have a width, a height, a title, items list and so on.

//Here’s a bad way to write such function:



function showMenu(title4 = "Untitled", width4 = 200, height4 = 100, items4 = []) {
    console.log('43 defaulft in func',title4);
    console.log('43 defaulft in func',width4);
    console.log('43 defaulft in func',height4);
    console.log('43 defaulft in func',items4);
  }

  showMenu();
  //In real-life, the problem is how to remember the order of arguments.
  // Usually IDEs try to help us, especially if the code is well-documented, 
  //but still… Another problem is how to call a function when most parameters are ok by default.

 //Like this?

  // We don't need height , width
  // undefined where default values are fine
showMenu("Menu", undefined, undefined, ["Item1", "Item2"])

//That’s ugly. And becomes unreadable when we deal with more parameters.

//Destructuring comes to the rescue!

//We can pass parameters as an object, and the function immediately destructurizes them into variables:

// we pass object to function
let options6 = {
    title6: "My menu",
    items6: ["Item1", "Item2"]
  };
  
  // ...and it immediately expands it to variables
  function showMenu2({title6 = "Untitled", width6 = 200, height6 = 100, items6 = []}) {
    // title, items – taken from options,
    // width, height – defaults used
    console.log( `45 - showMenu2 ${title6} ${width6} ${height6}` ); // My Menu 200 100
    console.log(`46 - ShowMenu2`, items6 ); // Item1, Item2
  }
  
  showMenu2(options6);

  //We can also use more complex destructuring with nested objects and colon mappings:

let options7 = {
  title7: "My menu",
  items7: ["Item1", "Item2"]
};

function showMenu3({
  title7 = "Untitled",
  width7: w7 = 100,  // width goes to w
  height7: h7= 200, // height goes to h
  items7: [item1, item2] // items first element goes to item1, second to item2
}) {
  console.log( `47 - showMenue3 ${title7} ${w7} ${h7}` ); // My Menu 100 200
  console.log('48 - showMenue3 ', item1 ); // Item1
  console.log('49 - showMenue3 ', item2 ); // Item2
}

showMenu3(options7);

//The full syntax is the same as for a destructuring assignment:


//Please note that such destructuring assumes that showMenu() does have an argument. 
//If we want all values by default, then we should specify an empty object:

//showMenu({})***; // ok, all values are default

//***showMenu(); // this would give an error
//We can fix this by making {} the default value for the whole object of parameters:
/*
function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
  alert( `${title} ${width} ${height}` );
}

showMenu(); // Menu 100 200
In the code above, the whole arguments object is {} by default, so there’s always something to destructurize.

*/