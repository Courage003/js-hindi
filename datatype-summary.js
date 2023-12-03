//Primitive

//7 types => String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score=100
const scoreVal=100.3
const outsideTemp=null
let userEmail; //undefined

const id=Symbol('182')
const anotherId=Symbol('182')

//Output of both would not be same inspite of same string values

console.log(id===anotherId);

const bigNumber=373347726337282n   //implementation of BigInt

//Reference (non-primitive)

//3types => Arrays, Objects, Functions

const cartoons = ["Shinchan","Doraemon","Kiteretsu"]; //Arrays
let myObj = {       //Objects
    name : "Dhruv",
    age : 22,
}


const myFunction = function(){  //Functions
    console.log("Hello World");
}

console.log(typeof bigNumber)
console.log(typeof cartoons)
console.log(typeof myObj)
console.log(typeof myFunction)  //Object Function




//JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. 
//You can assign different types of values to a variable during its lifetime.

