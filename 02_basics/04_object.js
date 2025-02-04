//singleton object 

const tinderUser = new Object();
// const tinderUser = {}
tinderUser.name = 'Ashwani Rai'
tinderUser.email = 'ashwani@google.com'

obj1 = new Object({
    name:'shivam',
    designation:'js dev'
})

obj2 = {
    username:'abc',
    email:'abc@google.com'
}

// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
// console.log(obj3);

const tinderUserKeys = Object.keys(tinderUser)
const tinderUserValues = Object.values(tinderUser)
const tinderUserKeyandValuesinArray = Object.entries(tinderUser)
// console.log(tinderUserKeys);
// console.log(tinderUserValues)
// console.log(tinderUserKeyandValuesinArray)


const U= [
    {
        id:101,
        email:'ashwani@mail.com',
    },
    {
        id:102,
        email:'shiv@mail.com'
    }
]