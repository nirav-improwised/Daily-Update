var a=10;

let b=20;
b=55;//overwriting variable b as 55
//let b=40;//Re-declaration is NOT allowed. This will giveSyntaxError

{
    let b=40; //This is NOT allowed as it will be declared in the block scope
    console.log(b);
}

{
    let b=100;
    {
        let b=300;
        console.log(b);
    }
}

console.log(b); //It will log b as 55

{
    let a=25;//Another
    console.log("a in {}", a)
}

const c=30;
//c=40;//This will give TypeError

console.log(a);
console.log(b);
console.log(c);