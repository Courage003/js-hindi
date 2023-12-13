const userEmail = "rastogidhruv28@gmail.com"

if(userEmail){   //assumed that string has truth value
    console.log("Got the email");
}
else{
    console.log("Don't have user email");
}

//falsy values

//false, 0, -0, BigInt 0n, "", null, undefined, NaN


//truthy values

//true, 1, "0", 'false', " ",[], {}, function(){}

const Arr = []

if(Arr.length===0){
    console.log("Array is empty");
}

const obj = {}
if(Object.keys(obj).length===0){
    console.log("Object is empty");
}


//Nullish Coalescing Operator (??): null undefined
let val1;
//val1= 5 ?? 10   //basically this operator is the safety checker to prevent null or undefined
//val1 = null ?? 10

val1= null ?? 10 ?? 20 //goes for the first value


console.log(val1);


//Terniary operator

//condition ? true : false

const price = 100
price<=80 ? console.log("Will buy") : console.log("Paisa tera Baap dega?")