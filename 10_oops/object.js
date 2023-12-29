function multiplyby5(num){
    return num*5
}


multiplyby5.power =2

console.log(multiplyby5(4))
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment= function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Score is : ${this.score}`)    //jis ne bhi bulaaya use this
}

const samosa = new createUser("Samosa", 5)
const chai = createUser("Chai", 15)

samosa.printMe()


/*

Here's what happens behind the scene when new keyword is used:

A new object is created: The new keyword initiates the creation of new Javascript object.

A prototype is linked: The newly created object gets linked to the newly created prototype property of constructor function. This means it has access to its properties and methods defined on the constructor's prototype.

The constructor is called.

The new object is returned.

*/




