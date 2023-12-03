const name = "Dhruv"
const repoCount = 20
console.log(name + repoCount + "Value");  //outdated syntax

//modern - use backticks (string Interpolation)
console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const Insta= new String('drastogi-003') //another method to declare string using object
console.log(Insta[0]); //accessing key-value pair
console.log(Insta.__proto__);  //output object is actually not empty as it is showing

console.log(Insta.length);
console.log(Insta.toUpperCase());  //original value not changes as toUpperCase is a function  which ulitmately falls in the category of heaps
console.log(Insta.charAt(2));
console.log(Insta.indexOf('a'));

const newString= Insta.substring(0,4)  //last value is not included
console.log(newString);

const anotherString =Insta.slice(-11,4) //can take negative values as well
console.log(anotherString);

const newStringOne = "      Dhruv     "
console.log(newStringOne);
console.log(newStringOne.trim());   //eject out unwanted spacings
//Read Trim documentations

const url ="https://dhruv.com/dhruv%03rastogi"
console.log(url.replace('%03','-'));

console.log(url.includes('dhruv'));

console.log(Insta.split('-'));  //split into array on the basis of separator