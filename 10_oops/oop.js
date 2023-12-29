//Object Literal
const user = {
    username : "Dhruv",
    loginCount : 8,
    signedIn : true,


    getUserDetails : function(){
        //console.log("Deatils captured from database")
        //console.log(`Username: ${this.username}`)   //this actually defines the context of the method or variable being taken under use
        console.log(this)  //returns current context
    }
}


//console.log(user.username)
//console.log(user.getUserDetails())

//this keyword basically tells the new sandbox execution context about its username to be occupied
//console.log(this)  //empty global context

//In browser window is returned

/*const PromiseOne = new Promise()
const date = new Date()*/

//new keyword is constructor function which allows building multiple instances from single object literal


function User(username, loginCount, isLoggedIn){
    this.username = username //to differentiate variable and passed value
    this.loginCount= loginCount
    this.isLoggedIn=isLoggedIn

    this.greeting= function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}

const userOne = new User("Dhruv",12,true)
const userTwo = new User("Aditya", 10, false)
console.log(userOne.constructor)  //constructor property is just a reference to itself
//console.log(userTwo)  //its also overwrites above code

//new keyword resolves the issue

//After use of new keyword, an empty object is created
//Constructor function is called
//this keyword injects all arguments
//returns required output


//Learn about instanceof