// object laterals

const mySymbols1 = Symbol('key1')
const JsUser = {
    name:'Ashwani',
    [mySymbols1]:"this is key1",
    email:"ashwani@google.com",
    "full name":"Ashwani Rai",
    designation:'software engineer' 
}

// Object.freeze(JsUser)
// JsUser.name = "Shivam Rai";
// console.log(JsUser.name);

// console.log(JsUser['full name'])
// console.log(JsUser.email)
// console.log(JsUser[mySymbols1])
// console.log(JsUser);


JsUser.greeting = function(){
    console.log('hello js user');
}
// console.log(JsUser.greeting())


JsUser.printName = function(){
    console.log(`Full name is , ${this.name}`)
}

console.log(JsUser.printName())