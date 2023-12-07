

function saymyName() {
    console.log("D");
    console.log("H");
    console.log("R");
    console.log("U");
    console.log("V");
}

//saymyName()

/*function addTwoNumbers(number1,number2){   //number1 and number 2 are parameters 
    console.log(number1 + number2);          //its just console.log not a return type
}*/

function addTwoNumbers(number1,number2){    
    /*let result= number1 + number2
    return result  //now result will be returned*/
    //console.log("Dhruv")   //this will never work
    return number1+number2       //it can be stored in any variable only if return is used
}

//Function stops executing every code once return is passed

const result = addTwoNumbers(3,5)  //3 and null are arguments
//console.log("Result :",result);  //why this result is giving undefined?

function loginUserMessage(username = "Dhuvi"){ //if no values passed then Dhuvi will be obtained
    if(username===undefined){   //!username
        console.log("Please enter username")
        return
    }
    return `${username} just logged in`
}

//loginUserMessage("Dhruv")  //nothing run because no variable stored or neither console.log
//console.log(loginUserMessage()); //when no values passed inside arguments, then undefined output is obtained

function calculateCartPrice(v1,v2,...num1){   //Rest operator (includes all arguments)
    return num1
}
//400,600 taken by v1 and v2

//console.log(calculateCartPrice(400,600,500));  //returns an array

const user = {
    userName : "drastogi003",
    email : "rastogidhruv28@gmail.com",
    price : "199"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and email is ${anyobject.email}`);

}

//handleObject(user) or
handleObject({
    userName: "Aditya",
    email: "kanu69@gmail.com"
})

const myNewArray = [200,300,400,500]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));