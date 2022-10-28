function wait5sec(){
    return new Promise(function(resolve, reject){
        let flag = false;
        if (flag){
        setTimeout(()=>{
            resolve('resolved wait5sec function')
        }, 5000)
    }else{
        setTimeout(()=>{
            reject('rejected wait5sec function')
        }, 5000)
    }
})
}

function wait1sec(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve('resolved wait1sec function')
        }, 1000)
    })
}


async function Details(){
    try{
        let a = await wait5sec()
        console.log(a)
        console.log("I am in next line of await a.")
    }catch(error){
        console.log(error)
    }

    let b = await wait1sec()
    console.log(b)
    console.log("I am in next line of await b.")

    console.log("I am a normal line")
}

function normal(){
    let c = Details()
    console.log("I am a normal function.")
}
normal()