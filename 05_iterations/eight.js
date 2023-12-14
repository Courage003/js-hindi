const myNums = [1,2,3]
//using in shopping carts bills

/*const myTotal= myNums.reduce( function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc+currval
},0)*/


const myTotal= myNums.reduce( (acc,currval)=>acc+currval,0)

console.log(myTotal)

const shoppingCart = [
    {
        name: "shirt",
        price: 299
    },
    {
        name: "hoodie",
        price: 799
    },
    {
        name: "rose",
        price: 79
    }
]

const totalbill= shoppingCart.reduce( (acc,currval)=>acc+currval.price,0)
console.log(totalbill)