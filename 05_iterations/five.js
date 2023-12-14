const coding = ["js","py","cpp","java"]

//most frequent used loop (high order)

/*coding.forEach( function(item) {     //callback function doesn't have name
    console.log(item)
} )*/



/*coding.forEach( (val)=> {
    console.log(val)
})*/


/*function printme(item){
    console.log(item);
}

coding.forEach(printme)*/

/*coding.forEach( (item,index,arr)=>{
    console.log(item,index,arr);
})*/


const myCoding = [   //helpful in databases
    {
        language : "javascript",
        file_name: "js"
    },
    {
        language : "python",
        file_name: "py"
    },
    {
        language : "c++",
        file_name: "cpp"
    }
]


myCoding.forEach( (item)=>{
    console.log(item.language);
})