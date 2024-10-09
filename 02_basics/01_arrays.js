//array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["Bose", "Singh"];

const newArrs = new Array("Ashwani", "Shivam");
// console.log(myArr[1])
// console.log(myHeros[1])

//Array Methods

//add value is last in array
// myArr.push(6);
// remove last value in array
// myArr.pop();

//the unshift can add a value in starting of array
// myArr.unshift('john')
// ['john', 0,1,2,3,4,5]
// they remove starting value of array they dont need any parameter 
// myArr.shift();
[ 0, 1, 2, 3, 4, 5 ]

//they behave like a question they check Singh are found this heros array or not they return boolean
// console.log(myHeros.includes('Singh'));
// true

// console.log(myHeros.indexOf('hitesh'));
// -1  means they not found value and index in this array

// const newArr = myArr.join()
// console.log(myArr);
// [ 0, 1, 2, 3, 4, 5 ]
// console.log(typeof newArr)
// 0,1,2,3,4,5  //they bind the value and change array to string


//slice splice

// console.log("A ",myArr.slice(1,4))
// console.log("B ",myArr)

//output:- they return specific value starting location and ending location  they not change or manipulate original array
// A  [ 1, 2, 3 ]
// B  [ 0, 1, 2, 3, 4, 5 ]

//splice

console.log("C ",myArr.splice(1,3))
console.log(myArr);

// output:- they change there original array this is difference b/w splice and slice 
// C  [ 1, 2, 3 ]
// [ 0, 4, 5 ]



