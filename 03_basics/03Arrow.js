const user = {
    username : "Dhruv",
    price : 999,
    //this is used to handle current contexts inside the closure

    welcomeMessage : function(){
        console.log(`${this.username} ,Welcome to website`);
        console.log(this);
    }
}

/*user.welcomeMessage()
user.username="Swami"  //context changed
user.welcomeMessage()*/

//console.log(this)  //it will be empty as globally object will be empty

//In browser. global object is the window object

/*function chai(){
    let username = "Dhruv"
    console.log(this.username);  //this context works only in object
}

chai()*/


/*const chai = function(){
    let username = "Dhruv"
    console.log(this.username);
}

chai()*/


const chai = ()=> {   //Arrow function
    let username = "Dhruv"
    console.log(this.username);
}

//chai()

// =()=>{}  Arrow function paranthesis

/*const addTwo = (num1,num2) =>{
    return num1 + num2;
}*/

//console.log(addTwo(3,9));


//Implicit return
const addTwo = (num1,num2) => (num1 + num2);  //() doesn't require to use return
console.log(addTwo(3,9));

//It is taken in use while returning object
const objdede = (num1,num2) => ({username: "Dhruv"})
console.log(objdede(3,4));


/*const myArray = [2,5,3,7,8]
myArray.forEach(()=>())*/

    



