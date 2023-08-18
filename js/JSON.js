console.log("JSON To JSOON");


let room ={
  Number :23 
};

let meetup = {
  title :"Conference",
  participants : ['John','Ann'],
  place:room,
};

room.occupiedBy =  meetup ;

console.log(meetup);

let ajson = JSON.stringify(meetup ,['title','participants','place' ,'Number']);

console.log(ajson);

let fjson = JSON.stringify(meetup ,function replacer(key,value){
  return (key=='occupiedBy')?undefined:value ;
},7 );

console.log(fjson);

// console.log(JSON.stringify(meetup));