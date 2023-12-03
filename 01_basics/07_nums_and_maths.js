const score =352

const balance = new Number(350) //guaranteed assigning of data type
//console.log(balance);

//console.log(balance.toString());  //Now all string properties can be applied
//console.log(balance.toFixed(2)); //for precision values in some E-commerce sites

const otherNumber = 23.8966
//console.log(otherNumber.toPrecision(3));

const otherNumber1 = 123.8966
//console.log(otherNumber1.toPrecision(3));  //round off specifically first mentioned digits in the argument

const hundreds=1000000
//console.log(hundreds.toLocaleString()); //make the 0's readable for viewers as per US standard
//console.log(hundreds.toLocaleString('en-IN')); //Indian Standard


//++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++//
/*console.log(Math);
console.log(Math.abs(-3));
console.log(Math.round(4.3));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(1,2,3,4));
console.log(Math.max(1,2,3,4));*/

/*console.log(Math.random());  //randomly produce values between 0 and 1
console.log((Math.random()*10) +1);  // to get rid of 0 as answer in case of 0.04........*/

const min=10
const max=20
console.log(Math.floor(Math.random()* (max-min+1)) + min);  //generate values randomly between alloted digits
//Remeember the formula
