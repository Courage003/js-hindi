/*console.log(2>1);
console.log(2>=1)
console.log(2<1)
console.log(2<=1)
console.log(2==1)
console.log(2!=1)*/

//Datatypes not same during conversions case
console.log("2">1);
console.log("02">1);

console.log(null >0);
console.log(null==0);
console.log(null>=0);  //problem of value conversion

console.log(undefined==0)
console.log(undefined>0)
console.log(undefined<0);

console.log("2"===2);  //Strict equality doesn't let the datatype conversion by default