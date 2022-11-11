function fullName(nationality, age){
    console.log(this.firstName + " " + this.lastName + " " +nationality + " " + age);
}

const p1 = {
    firstName: "Nirav",
    lastName: "Gaglani"
}

const p2 = {
    firstName: "Aarsh",
    lastName: "Shah"
}

//call
fullName.call(p1, "Indian", 22);

//apply
fullName.apply(p2, ["Indian", 22]);

//bind
const p = fullName.bind(p1, "Indian", 222);
console.log(p)
p()