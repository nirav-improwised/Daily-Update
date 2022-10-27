function x(y){
    console.log("I am x")
    y();
}
// function y(){
//     console.log("I am y")
// }
// x(y());
x(function y(){
    console.log("I am y")
})