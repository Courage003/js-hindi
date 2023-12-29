/*let myName = "Dhruv     "

console.log(myName.truelength);*/

//can be returned through
//console.log(myName.trim().length)


let myHeros = ["Thor", "Spiderman"]


let heropower = {
    Thor: "hammer",
    Spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is : ${this.Spiderman}`)
    }
}


Object.prototype.dhruv= function(){
    console.log(`Dhruv is present in all object`)
}
//heropower.dhruv()

//myHeros.dhruv()

Array.prototype.heydhruv = function(){
    console.log(`Hey dhruv keep working hard`)
}

/*myHeros.heydhruv()
heropower.heydhruv() */ //object property unmodified through array pathway


//Inheritance

const User= {
    name: "Dhruv",
    email: "abc@google.com"
}


const Teacher = {
    makeVideo: true
}

const TeachingAssistant = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingAssistant    //prototypal inheritance
}


Teacher.__proto__= User


//modern syntax

Object.setPrototypeOf(TeachingAssistant,Teacher)


let anotherUsername = "Chaiaurcode   "

String.prototype.truelength= function(){
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`True length is: ${this.trim().length}`)
}


anotherUsername.truelength()


"Dhruv    ".truelength()