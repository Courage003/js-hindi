class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
//to reduce max stack exceed error
    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}.toUpperCase()`
    }

    set password(value){
        this._password= value.toUpperCase()

    }
}

const dhruv = new User("dhruv@gmail.com", "abc")
console.log(dhruv.password)