const myNums = [1,2,3,4,5,6,7,8,9,10]

//map for returning while filter for providing some conditions

/*const newNums=myNums.map( (num)=> num+10)
console.log(newNums)*/

//Chaining
const newNums=myNums
            .map((num)=>num*10)   //result will pass on to next chain
            .map((num)=>num+1)
            .filter((num)=>num>=50)
console.log(newNums)            