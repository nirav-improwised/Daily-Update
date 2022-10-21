let a=[]
console.log(a)
console.log(typeof a)

let b=[1, 2, 3]

b.push(4)
console.log(b)

b.pop()
console.log(b)
console.log(b.pop())
console.log(b)

b.push(3, 4)
console.log(b)

b.shift()
console.log(b)

b.unshift(1)
console.log(b)

b.unshift(0)
console.log(b)

console.log(b.length)
b.pop()
console.log(b)
console.log(b.length)
//--------------------- Slice() and Splice() ------------------------------------------
let c = b.slice(0, 2)
console.log(c)
console.log(b)

// Using splice to delete items
b.splice(2,1)
console.log(b)

// Using splice() to add items
console.log(b)
b.splice(2, 0, 2)
console.log(b)

// filter() find() -----------------
let newb = b.filter(function(item){
    return item>1 && item<3
})
console.log(newb)

newb = b.find(function(item){
    return item>1
})
console.log(newb)

//---------------------------- arrays in DOM ------------------------------
containerArray = document.getElementsByClassName('container')
console.log(containerArray)
containerArray[1].classList.add("d-none")

// if (containerArray[1].classList.contains('d-none')){
//     containerArray[1].classList.remove('d-none')
// }