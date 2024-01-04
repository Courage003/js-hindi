const User = {
    _email : 'abc@xyz.com',
    _password : 'abc',


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    
    }
}

const user = Object.create(User)
console.log(user.email);

//getter and setter are methods to overwrite something from the memory

//new proposal passed in es2022 to use # in place of _
//private access usage