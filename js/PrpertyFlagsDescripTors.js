console.log("Property Flags And DescripTors");


//Object properties,--- besides a value, have three special attributes --- (so-called “flags”):

// object er propertyr kichu attribute ache , ederke propertyr flags bola hoy
// era internally property te active thake . 


//Flags Are
/*

writable – if true, the value can be changed, otherwise it’s read-only.
enumerable – if true, then listed in loops, otherwise not listed.
configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.

*/

// era byDefault true thake object e .  Kintu amra ederke chgange kortge pari


//let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);  
//  Object.getOwnPropertyDescriptor(obj, propertyName) method ekta object return kore ... 
      //(object , propertyName)
        // 1) j object er jnno method
        // 2) shei object er kon propertyr information flag ber korte hybe

// Return houa Object kei (property_descriptor_Object) bloe

//Example -1

let user1 = {
    name: "John"
  };

  let descriptor1 = Object.getOwnPropertyDescriptor(user1 , 'name');

  console.log( "1- Property DesCriptor -", JSON.stringify(descriptor1,null,2))

  /* property descriptor:
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/


//Flag Change Korar Jnno MetHod Holo
//Object.defineProperty(obj, propertyName, descriptor)
    //Parameters
    // --- obj holo target object ,  (propertyName) Holo Target Obj er j property te amra nijeder descriptor appply korbo , 
    //---(descriptor) amader dea banano descriptor object


// Let’s make user.name non-writable (can’t be reassigned) by changing writable flag:

let user2 = {
  name: "John"
};

Object.defineProperty(user2, "name", {
  writable: false
});

//user2.name = "Pete";----- // Error: Cannot assign to read only property 'name'
//Now no one can change the name of our user, unless they apply their own defineProperty to override ours.

//ERR)R ------ non-strict mode e error silently ignore kora hoy


//Object.defineProperty(obj, propertyName, descriptor) Method  Jodi Property Exist kore tbe sheta given 
// descriptor object diye flag gulo update kore ,  

// otherwise property jdi object er bhitor exist na kore tobe (propertyName ) er notun property 
// toiri kore ,  descriptor object e value diye value(it;s an attribute , flags er moto e) o set kore .
// tobe tokhn descriptor flags gulo false hy shb jodi flags externally set na kora hoy

let user3 = {};

Object.defineProperty(user3, "name", {
  value: "John"
});

let descriptor3 = Object.getOwnPropertyDescriptor(user3, 'name');

console.log("2 - ", JSON.stringify(descriptor3, null, 2 ) );
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */

// /Compare it with “normally created” user.name above: now all flags are falsy.
// If that’s not what we want then we’d better set them to true in descriptor.



//Here’s the same example, but the property is created from scratch:

let user4 = { };

Object.defineProperty(user4, "name", {
  value: "John",
  // for new properties we need to explicitly list what's true
  enumerable: true,
  configurable: true
});

console.log("3 -",user4.name); // John
//user4.name = "Pete"; // Error----


//***Non-enumerable */ if true, then listed in loops, otherwise not listed.

 // Enumerable flag by default true thake , tai for in loop e object er property gulo listed hoy ,
    // Kiintu (toString()) built-in object method er enumerable-false thake tai shhow hy na  for in loop e ,
    // jodi amra amader custom toString() likhi taile for in loop e sghow korbe

    let user5 = {
        name: "John",
        toString() {
          return this.name;
        }
      };
      
      // By default, both our properties are listed:
      for (let key in user5) console.log("4 - " , key); // name, toString

      // amra jodi eta na chai tbe  er enumerable flag attribute k false kore dibo 
      //defineProperty(object,propertyName , custom descriptor object ) Method diye

      // Like This

      let user6 ={
          name:"John",
          toString(){
              return this.name;
          }

      }
      Object.defineProperty(user6 ,'toString', { enumerable:false } );

      for(key in user6) console.log("5-" , key ) ; // name

     // Non-enumerable properties are also excluded from Object.keys:

     console.log("6-" ,Object.keys(user6)); // name



//***Non-configurable */ (configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.)

//The idea of “configurable: false” is to prevent changes 
//of property flags and its deletion, while allowing to change its value.

/*
Making a property non-configurable is a one-way road. We cannot change it back with defineProperty.

To be precise, non-configurability imposes several restrictions on defineProperty:

************
1)Can’t change configurable flag.
2)Can’t change enumerable flag.
3)Can’t change writable: false to true (the other way round works).
4)Can’t change get/set for an accessor property (but can assign them if absent).

*********************
*/

//Summaraizing - (
// amra jdi configurable :false set kori tbe age theke j flag gulo set kora ache ta r 
//defineProperty( , ,) method diye change korte parbo na,  kono property delete o korte parbona
//. shudhu value change korte parbo (Not Delete).
// configurable:false set korar por ta r change kora jabe na)

//Example ---

//The non-configurable flag (configurable:false) is sometimes preset for built-in objects and properties.

//A non-configurable property can not be deleted.

//For instance, Math.PI is non-writable, non-enumerable and non-configurable:

let descriptor4 = Object.getOwnPropertyDescriptor(Math, 'PI');

console.log("7 -", JSON.stringify(descriptor4, null, 2 ) );
/*
{
  "value": 3.141592653589793,
  "writable": false,
  "enumerable": false,
  "configurable": false
}
*/

//So, a programmer is unable to change the value of Math.PI or overwrite it.

//****** Math.PI = 3; // Error

// delete Math.PI won't work either

let user7 = {
  name: "John"
};

Object.defineProperty(user7, "name", {
  configurable: false
});

user7.name = "Pete"; // works fine
console.log("8 -", user7.name)
//**** delete user7.name; // Error


//And here we make user.name a “forever sealed” constant:

let user8 = {
  name: "John"
};

Object.defineProperty(user8, "name", {
  writable: false,
  configurable: false
});

// won't be able to change user.name or its flags
// all this won't work:

 // user8.name = "Pete"; 
 // delete user.name; 
 //Object.defineProperty(user, "name", { value: "Pete" });


//************************************************************************************************************* */
/*

There’s a method ***Object.defineProperties(obj, descriptors)*** that allows to define many properties at once.

The syntax is:

Object.defineProperties(obj, {
  prop1: descriptor1,
  prop2: descriptor2
  // ...
});

*/

//For instance:
let user9 = {}

Object.defineProperties(user9, {
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false },
  // ...
});
console.log("9 -" , user9 )
//So, we can set many properties at once.

//*****Object.getOwnPropertyDescriptors
//To get all property descriptors at once, we can use the method ****Object.getOwnPropertyDescriptors(obj)*******.

let user10 = {
  name :"John",
  job:"SoftwereEngineer",
};

let descriptors10 = Object.getOwnPropertyDescriptors(user10);

console.log("11 -", JSON.stringify(descriptors10) ); 


//Flag-Aware Way*****

//Together with Object.defineProperties it can be used as a “flags-aware” way of cloning an object:

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user10));

console.log("12 - ", JSON.stringify(clone));

/*

Normally when we clone an object, we use an assignment to copy properties, like this:

for (let key in user) {
  clone[key] = user[key]
}
…But that does not copy flags. So if we want a “better” clone 
then Object.defineProperties is preferred.

Another difference is that for..in ignores symbolic properties,
 but Object.getOwnPropertyDescriptors returns all property descriptors including symbolic ones.

 */

/*

----Sealing an object globally---

Property descriptors work at the level of individual properties.

There are also methods that limit access to the whole object:

1) Object.preventExtensions(obj)
-->Forbids the addition of new properties to the object.

2) Object.seal(obj)
-->Forbids adding/removing of properties. Sets configurable: false for all existing properties.

3) Object.freeze(obj)
-->Forbids adding/removing/changing of properties. Sets configurable: false,
   writable: false for all existing properties.
   And also there are tests for them:

1) Object.isExtensible(obj)
-->Returns false if adding properties is forbidden, otherwise true.

2) Object.isSealed(obj)
-->Returns true if adding/removing properties is forbidden, 
   and all existing properties have configurable: false.

3) Object.isFrozen(obj)
-->Returns true if adding/removing/changing properties is forbidden, 
   and all current properties are configurable: false, writable: false.
   
    These methods are rarely used in practice.

    */