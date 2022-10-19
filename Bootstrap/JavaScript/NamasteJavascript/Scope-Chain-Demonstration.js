var c=10;
a()

function a(){
    d();
    function d(){
        console.log(a)
        f();
        function f(){
            console.log(b);
        }
    }
}