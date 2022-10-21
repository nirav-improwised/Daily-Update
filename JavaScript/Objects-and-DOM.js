let person = {
    age: 22,
    name: "nirav",
    employementType: "full-time",
    getSentence: function(){
        console.log(`${this.name} is ${this.age} years old and is employed ${this.employementType}`)
    }
}

person.getSentence();

// -----------------------------------------------

let nj = document.getElementById('namasteJS');

let changeBtn = document.getElementById('changeBG');

let btnSH = document.getElementById('btnSH')
let paraSH = document.getElementById('showHide')

changeBtn.addEventListener('click', function(){
    nj.style.backgroundColor="#bdf5bd";
    nj.innerHTML="&#128591 Namaste JavaScript &#128591";
});

btnSH.addEventListener('click', function(){
    if(!paraSH.classList.contains('d-none')){
        paraSH.classList.add('d-none');
    }else{
        paraSH.classList.remove('d-none');
    }
})
