//array

const myArr = [1,2,3,4,5,true,"dhruv"]

console.log(myArr[0]);

const cartoons = ["shinchan","doraemon"];
const myArr2 = new Array(1,2,3,4,5)


//Array Methods
myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(0)  //pushes at the start but time consuming method in long arrays
myArr.shift()
console.log(myArr.includes(9));  //return boolean
console.log(myArr.indexOf(9));  //-1 means doesn't exist

const newArr = myArr.join()
console.log(myArr);
console.log(typeof newArr);  //string


//slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B ",myArr)

const myn2 = myArr.splice(1,3)
console.log("c ",myArr)  //splice manipulates the original array while slice doesn't. Never answer to the interviewer on the basis of range
console.log(myn2);

//B gives same array while C gets manipulated in splice