// 1) If Else 
// 2) || && !
// 3) ?
// 4)??
// 5)Switch-case
// 6)while, do-while, for, break,continue

//Print Odd and Even Number from 1 to 20


console.log('jayed');


// for(let i = 0 ; i<=20 ; i++) {
//     if(i%2==0) {
//         continue
//     }
//     console.log(i)
// }
// let number = 0 ;

// while(number<=20) {
//     let a = number++
//     if(a%2 == 0 ) {
//         continue
//     }
//     console.log(a)

// }

// let n = 0 ;
// do {
//     s = n++
//     if(s%2==0) continue
//     console.log(s)
// } while(n<=20)

// 5 er naamta 

let count = 5 ;
let i = 1 ;
while(i<=10) {
    let value = count*i
    console.log(`${count} * ${i} = `,value)
    i++
}
let n = 5 ;

for(let i = 1; i<=10 ; i++ ) {
    let value = n*i ;
    console.log(`${n} * ${i} = `,value)
}

console.log("Namta 20 prjntw") ;

for(let i=1 ; i<=20 ; i++) {
    for(let j=1 ; j<=10 ; j++ ) {
        console.log(`${i}* ${j} = `, i*j )
    }
}


 



