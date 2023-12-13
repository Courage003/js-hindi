// for loop
/*for (let index = 0; index < 10; index++) {
    const element = index;
    if(element == "5"){
        console.log("5 is best number");
    }
    console.log(element);
    
}*/


for (let i = 0; i <= 10; i++) {
    //console.log(`Outer loop: ${i}`)
    for (let j = 0; j <= 10; j++) {
        //console.log(`Inner loop: ${j} and outer loop: ${i}`)
        //console.log(i + '*' + j + '=' + i*j)
        
    }
}

let myArr= ['Flash','Batman','SpiderMan']
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    //console.log(element);
    
}


//break and continue


for (let index = 1; index <=20 ; index++) {
    if(index==5){
        console.log("detected 5");
        break
    }
    console.log(`value of i is ${index}`);
    
}

for (let index = 1; index <=20 ; index++) {
    if(index==5){
        console.log("detected 5");
        continue
    }
    console.log(`value of i is ${index}`);
    
}