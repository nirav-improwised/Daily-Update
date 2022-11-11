// function x(y){
//     console.log("I am x")
//     y();
// }
// function y(){
//     console.log("I am y")
// }
// x(y());
// x(function y(){
//     console.log("I am y")
// })
// ----------------------------------------------------

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // expected output: "resolved"
//   }
  
//   asyncCall();

// -------------------------------------------------------------------
//Arrays are passed by value in JavaScript
// let arr = [1,2,3,4,5]

// function change(arr){
//   arr=[1,1,1,1,1]
//   // return arr
// }

// console.log(arr)
// change(arr)
// console.log(arr)

// ----------------------------------------------------------------------------------------
// function x (){
//   let object={
//             y: function(){
// 				console.log("I am function y inside x: ", this);
// 			}
//   }
//   object.y();
// }
// x();
// ---------------------------------------
// let alien={
// 	person : {
// 	name: "Nirav",
// 	age: 22,
// 	sentence: function(){
// 		console.log(this)
// 	}
// }
// }
// alien.person.sentence();

// function s(x) {
	// if (isNaN(x)) {
	//   return NaN;
	// }
	// return x;
	// return isNaN(x)
  // }
  
  // console.log(s('1.1'));
  // expected output: "1"
  
  // console.log(s('NotANumber'));
  // expected output: NaN

  // if (NaN){
	// console.log("This statement will NOT get logged as NaN is Falsy")
  // }
  
  // console.log(typeof null)
  // console.log(typeof undefined)
  // console.log(typeof NaN)
  // console.log(typeof 10)

  // let h = {}
  // console.log(h)
  // console.log(typeof h)

  // let g = []
  // console.log(g)
  // console.log(typeof g)

  // let k=[1,2,3]
  // console.log("k", typeof k)