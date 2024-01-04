//ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const user = new User("Dhruv", "rastogidhruv28@gmail.com", "182")

console.log(user.encryptPassword())
console.log(user.changeUsername())


//BTS

function User(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}