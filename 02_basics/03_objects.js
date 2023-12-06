//singleton using constructor
//Object.create


// object literals
//In objects keys can be defined as well unlike arrays

const mySym = Symbol("key1")   //use the symbol in object and print its value (Interview Question)
const JsUser = {
    name: "Dhruv",
    age: "20",
    [mySym] : "myKey1",
    "full_name": "Dhruv Rohatgi",   //can't be denoted by dot notation preferrable square notation
    location: "Agra",
    email: "rastogidhruv28@gmail.com",
    isLoggedIn: false,
    lastlogindays: ["Monday","Wednesday","Saturday"]

}

//Object access
console.log(JsUser.name)   //not a good practice although
console.log(JsUser["name"]);

console.log(typeof JsUser.mySym);   //this will return as string but we were asked to use symbol
console.log(typeof JsUser[mySym]);  //apply square brackets on both areas to answer correctly 

JsUser.email = "dhruv@chatgpt.com"

// to lock the objects so that no changes can be done
//Object.freeze(JsUser)

JsUser.email = "pehlapyaar@chatgpt.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello You are the best");
}

console.log(JsUser.greeting());  //returns the appropriate

console.log(JsUser.greeting); //returns function back without exceution

//If we want to access object elements
JsUser.greetingtwo = function(){
    console.log(`Hello the best youtuber, ${this.name}`);   //this
}

console.log(JsUser.greetingtwo());
