class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)  //takes bts this from inherited class parent
        this.email = email
        this.password= password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const user=new Teacher("Harsh","abc@gmail.com","123")

user.addCourse()

const user1 = new User("Dhruv")
//user1.addCourse()
//don't have access

user.logMe()
//Inherited class have properties of parent class

console.log(user===user1)
console.log(user===Teacher)

console.log(user instanceof Teacher)
console.log(user instanceof User)
