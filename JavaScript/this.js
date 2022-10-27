let o={
    name: "Nirav",
    sentence: function(){
        console.log(this)
        return this.name + " is a human";
    },
};
console.log(o.sentence())