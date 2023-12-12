//Immediately Invoked Function Expressions(IIFE)

(function chai(){
    //named iife
    console.log(`DB connected`)
})(); //semi-colon is required to terminate iife

//chai()

// () first one is for function definiton ()second for execution
//iife is used for prevention against the pollution caused due to global scope


((name)=>{
    //unnamed iife with passed perimeters
    console.log(`DB connected2 ${name}`)
})('Dhruv');
