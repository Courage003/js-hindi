function setUsername(username){
    //complex DB calls
    this.username= username
    console.log("called")
}


function createUser(username, email, password){
    setUsername.call(this, username)   //.call holds reference and this passed as argument to stop outsourcing
    this.email= email
    this.password=password
}

const user= new createUser("Dhruv", "rastogidhruv28@gmail.com","123")
console.log(user)