// SPREAD SYNTAX
// let a,b;
// [a, b] = [10, 20];
// console.log(a, b)

// let a, b, rest;
// [a,b, ...rest] = [10, 20, 30, 40, 50] 
// console.log(rest)

// let arr1=[1,2,3]
// let arr2=[4,5,6]
// arr1 = [...arr2, ...arr1]
// console.log(arr1)

// let obj1={
//     x:1,
//     y:2
// }
// let obj2={
//     x:5,
//     y:10,
//     z:15
// }
// obj1 = {...obj2, ...obj1}
// console.log(obj1)

// DESTRUCTURING ASSIGNMENT
// const name={
//     first: "Nirav",
//     last: "Gaglani"
// };
// const {first:f, last:l} = name;
// console.log(l.length)
// console.log(f, l)

// OPTIONAL CHAINING
let obj1 = {
    name: "Nirav",
    details: {
        age: 22,
        nationality: "Indian",
        gender:{
            male: true,
            female: false
        }
    }
}
console.log(obj1?.details?.nationality);