  //In past Q or BlueBird libraries were frequently used before ES6
 
 const promiseOne= new Promise(function(resolve, reject){
    //Do any async task
    //DB calls, cryptographic tasks, network calls
    setTimeout(function(){
        console.log('Async task is complete')
        resolve() //connected with .then()
    },1000)
 })

promiseOne.then(function(){
    console.log("Promise one completed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Task 2 resolved")
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Dhruv",email:"rastogidhruv28@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    let error = false
    if(!error){
        resolve({username: "Mowgli", email:"hunt4edu@gmail.com"})
    }
    else{
        reject('ERROR: Something went wrong')
    }
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);   //chaining during db connections mostly

}).catch(function(error){
    console.log(error)
}).finally(()=> console.log("Promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve,reject){
    let error = true
    if(!error){
        resolve({username: "Kanu", email:"kanu@gmail.com"})
    }
    else{
        reject('ERROR: Kanu went wrong')
    }
})

//new syntax approach using async await
/*async function consumePromisefive(){
    const response=await promiseFive
    console.log(response)

}

consumePromisefive()  */
    ///generates output for error less

    async function consumePromisefive(){
        try {
            const response=await promiseFive
        console.log(response)
        }
        catch(error){
            console.log(error)
        }
    
    }
    
    consumePromisefive()    


   /* async function getAllusers(){
        try{
            const result= await fetch('https://jsonplaceholder.typicode.com/users')
            const data= await result.json()
            console.log(data)
        }
        catch(error){
            console.log("E: ",error)
        }
    }

    getAllusers()*/

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((error)=>console.log(error))




