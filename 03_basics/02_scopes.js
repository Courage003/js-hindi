var c=300  //this will never be taken in consideration since mentioned inside if
let a=300  //gobally accepted
if(true){
    let a=10  //inside if - Block scope   oustide if - Global Scope
    const b=20
    var c=30  //only 30 is printed outside the scope, might create multi-user problems when they using same variable
}

//console.log(a);
//console.log(b);
//console.log(c);


//The value written in Block scope must not go outside while vice versa for other one

//scope is different in codespace and browser

function one(){
    const username = "Dhruv"
    
    
    function two(){
        website : "Youtube"
        console.log(username);
    }
    //console.log(website);  //will not be accessed (line by line execution, hence will not further execute anything)
    two()
}

//one()

if(true){
    const username = "dhruv"
    if(username === "dhruv"){
        const website = "youtube"
        console.log(username + website)
    }
    //console.log(website)  //not accessed
}
//console.log(username);


//+++++++++++++++++++++++++++++++++++++++++Interesting+++++++++++++++++++++++++++++++++++++++++++//


console.log(addOne(5));
function addOne(num){
    return num + 1

}


addTwo(5)   //can't be accessed now ( concept of mini hoisting)
const addTwo = function(num){   //Function expression
    return num + 2
}

