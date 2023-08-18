console.log(`Fetch-Api`) ;

let url = 'https://jsonplaceholder.typicode.com/posts/1';


let getData;
console.log('before getData')
console.log(getData)
getData = fetch(url);
console.log(`after getData`)
console.log(getData)

let getJsonString = getData.then(res=>res.text());

console.log(getJsonString)

getJsonString.then(res=>console.log(res));

// function postData(){
//     url='http://dummy.restapiexample.com/api/v1/create';
//     let data = '{"name":"jayed","salary":"123","age":"23"}'
//     params ={
//         method:'post',
//         headers:{
//             'content-type':'application/json'
//         },
//         body:data
//     }
//     fetch(url,params).then((res)=>{
//         res.json()
//     }).then(data=>console.log(data))
// }

// postData()

async function sayHi(){
    return function(){
        return 2
    }
}

