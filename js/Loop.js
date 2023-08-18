// let obj = {
//   "name":"jayed",
//   "age":34 ,
//   "ocupassion":"business"
// };

// console.log(obj);

// let obj_Keyarr = Object.keys(obj); 
// console.log(obj_Keyarr);

// for(let i = 0 ; i < obj_Keyarr.length ; i++) {
//   console.log( obj[obj_Keyarr[i]])
// }

let company = {
  sales: [{
    name: 'John',
    salary: 1000
  }, {
    name: 'Alice',
    salary: 1600
  }],

  development: {
    sites: [{
      name: 'Peter',
      salary: 2000
    }, {
      name: 'Alex',
      salary: 1800
    }],

    internals: [{
      name: 'Jack',
      salary: 1300
    }]
  }
};

let arraykey = Object.keys(company);
console.log(arraykey);

for(let i = 0 ; i<arraykey.length ; i++) {
  console.log(`${i} iteration -` , company[arraykey[i]] )

  if(Array.isArray(company[arraykey[i]])){

    for(let j = 0; j<company[arraykey[i]].length ; j++) {
      console.log(`sites${j} -`,company[arraykey[i]][j])
    }

  } else {
    let keyarrays = Object.keys(company[arraykey[i]]);
    for (let k = 0 ; k<keyarrays.length ; k++ ) {
      console.log(`nested Object iteration${k}`,company[arraykey[i]][keyarrays[k]])
    }
  } 

}

console.log(`RECURSION`);
function sumSalaries(department) {
  if(Array.isArray(department)){
    for (dep of department) {
      console.log(dep);
    }
  } else {
      for (let dp of Object.values(department)){
          sumSalaries(dp);

      }
  }
}

sumSalaries(company)
console.log(`RECURSION END`)

console.log("-------------------------------");
console.log("Linked-List");
console.log("");

let arr = [1,2,3,4,5,6];
console.log(`array-`,arr);

let list = {
  value:1 ,
  next:{
    value:2,
    next:{
      value:3,
      next:{
        value:4,
        next:null,
      }
    }
  }
}

console.log(`Linked-List ->`,list);


let list1={value:1};
list1.next = {value:2};
list1.next.next = {value:3};
list1.next.next.next = {value:4};
list1.next.next.next.next = null ;

console.log(`Linked-list-1-->`,list1);

let secondlist = list.next.next;
list.next.next = null ;

list1={value:'newValue',next:list1};
console.log(list1);

let list3 = {
  value:1,
  next:{
    value:2,
    next:{
      value:3,
      next:{
        value:4,
        next:{
          value:5,
          next:null,
        }
      }
    }
  }
}
console.log(`LinkedList3-->`,list3);

list3.next.next=list3.next.next.next;

let company2 = {
  sales: [{
    name: 'John',
    salary: 1000
  }, {
    name: 'Alice',
    salary: 1600
  }],

  development: {
    sites: [{
      name: 'Peter',
      salary: 2000
    }, {
      name: 'Alex',
      salary: 1800
    }],

    internals: [{
      name: 'Jack',
      salary: 1300
    }]
  }
};

for (department of Object.values(company2)) {
  if(Array.isArray(department)){
    console.log(department)
  } else {
    for (dep of Object.values(department)){
      console.log(dep)
    }
  }
}

