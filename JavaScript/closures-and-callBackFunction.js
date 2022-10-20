function x(){
    var b=15;
    function y(){
        var c=25;
        return function z(){
            console.log(b, c)
        }
    }
    let rValue = y();
    return y()
    // return z
}
let result = x();
console.log(result);
result()
// ----------------------------------------
// function x(){
//     var a=10;
//     function y(){
//         console.log(a);
//     }
//     return y
// }
// let z=x()
// console.log(z)
// z()