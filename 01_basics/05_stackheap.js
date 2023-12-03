// stack (Primitive) and heap (Non-Primitive)

let myyoutubeName = "Mowgli Vloggers"
let anothername = myyoutubeName
anothername = "drastogi003"
console.log(myyoutubeName);
console.log(anothername);

//All this is going on stack where original value refernce is not taken and value can be altered

let userOne = {
    email: "abs@google.com",
    upi : "abs@ybl"
}

let userTwo =userOne
userTwo.email = "rastogidhruv28@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

//Stored in heap, takes reference from original and change values simultaneously
//Diagram built in Notes