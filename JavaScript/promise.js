
// fetching daily updates repo followed by go update repo followed by data-structures repo

// let result = fetch("git@github.com:nirav-improwised/Daily-Update.git")

// result.then(()=>{console.log(result);console.log("fetch 1 complete")})

// .then(function(){
//     let result1 = fetch("git@github.com:nirav-improwised/Go-Updates.git")
//     result1.then(()=>{console.log(result1);console.log("fetch 2 complete")})
// })
// .then(function(){
//     let result2 = fetch("git@github.com:nirav-improwised/Data-Structures.git")
//     result2.then(()=>{console.log(result2);console.log("fetch 3 complete")})
// })

// ----------------------------------------------------------------------------------------------------------------

// let cart = ["Shoes", "Perfumes", "Caps"];

let a= createOrder()
a.then(function(orderId){
    console.log(orderId);
    console.log(a)
    return orderId
})
.catch(function(){
    console.log("createOrder catch")
})
let b = payment(145)
b.then(function(person){
    console.log(b)
    console.log("name is " + person.name);
    console.log("age is " + person.age);
    console.log("nationality is " + person.nationality);
    // return b + person.age
})
b.then(function(name){
    // console.log(name)
})
b.catch(function(pr){
    console.log("catch" + " " + pr.st);
})

function createOrder(){
    let promise = new Promise(function(resolve, reject){
        let formValidation = true;
        if (formValidation){
            let orderId = 145
            resolve(orderId);
        }
        if (!formValidation){
            reject("formValidation failed");
        }
    })
    return promise
}

function payment(orderId){
    let promise = new Promise(function(resolve, reject){
        let paymentFlag = true;
        let st = orderId + " " + "payment successful";
        let person={
            name: "nirav",
            age: 22,
            nationality: "Indian"
        }

        if (paymentFlag){
            st="successfull"
            resolve(person)
            // resolve(st)
            // resolve(name)
        }else{
            st="failed"
            reject(st)
        }
    })
    return promise
}