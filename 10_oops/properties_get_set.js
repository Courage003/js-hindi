function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get : function(){
            return this._email.toUpperCase()
        },
        set : function(value){
            this._email = value
        }
    })
}

const user = new User("abc@xyz.com", "chai")

console.log(user.email)