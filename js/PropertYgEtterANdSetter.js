//This is From Other Tutorial
// Accessor holo object er property ja existing property guloke manipulate kore access korte ba 
// set (Update korte ) bebohar kora jay

//accessor (Get) ;-->witout parameter use Hoy ,  tar mane kono input chara update kora .

let user1 = {
    name: "John",

    //Now, when we want to access it we want "John" to be upper case
    get upperName() { //addiing a manipulate property & get it by it's own Name uppername
        return this.name.toUpperCase();
    }
};

console.log("1 -", user1.upperName); // do not access it like a funtion as it's an accessor property

// accessor (set) --> propertyguloke manipulate kore set korte pare .  parameter shoho use hoy , 
//tar mane input shoho --> ja input diibo ta modify kore ber kora jabe

let user2 = {
    name: "Jayed",

    get upperName() {
        return this.name.toUpperCase();
    },
    // we can not use set without having get

    set upperName(value) {
        return this.name = value.toUpperCase();
    }
};
user2.upperName = user2.name;
console.log(user2.upperName);

// we can have more control over the real property with thi stoo methods ;

let user3 = {
    get name() {
        return this._name; // _underScorre is used for internal work only , it don't affect our code 
    },

    set name(v) {
        return this._name = v.toUpperCase();
    }
};

user3.name = "stephenie";

console.log(user3.name);


// --> Now, Info Tutorial Begins

// Property getters and setters -----

// There are two kinds of object properties.
// 1) Data Properties (Till Now we r working with this);
// 2) Accessor Properties ---> 1)Getter , 2)Setter

//--> Getter And Setter They are essentially functions  , 
//--> that execute on getting and setting a value, 
//--> but look like regular properties to an external code and access like normal props
// not like a function


//-->Accessor properties are represented by “getter” and “setter” ***methods***.
// In an object literal they are denoted by *get and *set:

/*
    let obj = {
  get propName() {
    // getter, the code executed on getting (obj.propName)
  },

  set propName(value) {
    // setter, the code executed on setting (obj.propName = value)
  }
};
*/

//-->The getter works when obj.propName is read by -> (obj.propName) ,
//-->the setter – when it is assigned by -> (obj.propName = value)


//For instance, we have a user object with name and surname:

let user4 = {
    name: "John",
    surname: "Smith",

    //Now we want to add a fullName property, that should be "John Smith".
    // Of course, we don’t want to copy-paste existing information, so we can implement it as an accessor:


    get fullName() {
        return `${this.name} ${this.surname}`;
    }

};

console.log("4 -", user4.fullName);

//From the outside, an accessor property looks like a regular one. That’s the idea of accessor properties. 
//***We don’t call --user.fullName as a function---, we read it normally: the getter runs behind the scenes.

//As of now, fullName has only a getter. If we attempt to assign ***user.fullName=, there will be an error:

//---> user.fullName = "Test"; //Error !!! (property has only a getter)

//Let’s fix it by adding a setter for user.fullName:

let user5 = {
    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
};

// set fullName is executed with the given value.
user5.fullName = "Alice Cooper";

console.log("5 - ", user5.name); // Alice
console.log("6-", user5.surname); // Cooper

for (let key in user5) console.log("6.1 -", key)

//As the result, we have a “virtual” property fullName. (It is readable and writable.)

// --> get – a function without arguments, that works when a property is read,
// --> set – a function with one argument, that is called when the property is set,


//Accessor descriptors***
let descriptors = Object.getOwnPropertyDescriptors(user5)
console.log("7 -", JSON.stringify(descriptors, null, 2));

/*

Descriptors for accessor properties are different from those for data properties.

For accessor properties, there is no value or writable, but instead there are get and set functions.

That is, an accessor descriptor may have:

get – a function without arguments, that works when a property is read,
set – a function with one argument, that is called when the property is set,
enumerable – same as for data properties,
configurable – same as for data properties.
For instance, to create an accessor fullName with defineProperty, we can pass a descriptor with get and set:

*/

let user6 = {
    name: "John",
    surname: "Smith"
};

Object.defineProperty(user6, 'fullName', {
    get() {
        return `${this.name} ${this.surname}`;
    },

    set(value) {
        [this.name, this.surname] = value.split(" ");
    }
});

console.log("8 -", user6.fullName); // John Smith

for (let key in user6) console.log("9 - ", key); // name, surname

//Please note that a property can be either an accessor (has get/set methods)
// or a data property (has a value ,  writable), not both.

// If we try to supply both get and value in the same descriptor, there will be an error:

// Error: Invalid property descriptor.

/* ------

Object.defineProperty({}, 'prop', {
    get() {
        return 1
    },

    value: 2
});

*/ //------


//*****Smarter getters/setters

//Getters/setters can be used as wrappers over “real” property values 
//to gain more control over operations with them.

//For instance, if we want to forbid too short names for user,
// we can have a setter name and keep the value in a separate property _name:

let user7 = {
    get name() {
      return this._name;
    },
  
    set name(value) {
      if (value.length < 4) {
        console.log("11 - Name is too short, need at least 4 characters");
        return;
      }
      this._name = value;
    }
  };
  
  user7.name = "Pete";
  console.log("10 - ",user7.name); // Pete
  
  user7.name = ""; // Name is too short...
  //So, the name is stored in _name property, and the access is done via getter and setter.
  
  //Technically, external code is able to access the name directly by using user._name.
  // But there is a widely known convention that properties starting with an underscore "_" are internal
  // and should not be touched from outside the object.

 // *** Using for compatibility
//One of the great uses of accessors is that they allow to take control over a “regular” data property 
//at any moment by replacing it with a getter and a setter and tweak its behavior.

//

//Imagine we started implementing user objects using data properties name and age:

function User(name, age) {
  this.name = name;
  this.age = age;
}

let john = new User("John", 25);

console.log("12 -", john.age ); // 25

//…But sooner or later, things may change. Instead of age we may decide to store birthday,
// because it’s more precise and convenient:

function User1(name, birthday) {
  this.name = name;
  this.birthday = birthday;
}

let john1 = new User1("John1", new Date(1992, 6, 1));

//Now what to do with the old code that still uses age property?

//We can try to find all such places and fix them, but that takes time and can be hard to do if 
//that code is used by many other people. And besides, age is a nice thing to have in user, right?

//Let’s keep it.

//Adding a getter for age solves the problem:

function User2(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // age is calculated from the current date and birthday
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}

let john2 = new User("John2", new Date(1992, 6, 1));

console.log("13 -", john2.birthday ); // birthday is available
console.log("14 -", john2.age );      // ...as well as the age
console.log("15 - end")

//Now the old code works too and we’ve got a nice additional property.