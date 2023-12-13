// if

/*if(true){

}*/

/*if(false){  //will never get into scope
    
}*/

const isUserLoggedIn = true
const temp=41

/*if(temp===40){
    console.log("Executed");
}
else{
    console.log("Temp>50");
}*/


// <, > , <=, >=, ==, = (assigning value), !=, === (strict equality), !==

/*const score = 200
if(score>100){
    const power = "fly"
    console.log(`User power ${power}`);
}

//var causes scope problems (Warning)*/


/*const balance =1000
if(balance>500) console.log("test"),  //Implicit scope
console.log("test2")   //not recommended*/

/*const balance = 1000
if(balance>500){
    console.log("less than 500")
}else if(balance<750){
    console.log("less than 750")
}
else if(balance<900){
    console.log("less than 900")
}
else{
    console.log("less than 1200")
}*/


const userLoggedIn = true
const debitCard =true
const loggedInfromGoogle = false
const loggedInfromEmail = true

if(userLoggedIn && debitCard){   //both needs to true
    console.log("Allowed to buy courses");
}

if(loggedInfromEmail || loggedInfromGoogle){  //one of them needs to be true
    console.log("Now allowed to create account");
}




