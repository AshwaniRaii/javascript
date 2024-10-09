const marvel_heros = ["thor","IronMan","spiderMan"]
const dc_heros = ["superMan","flash","batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// output:- arrays kisi bhi type ka data store kr lete hai jaruri nahi hai ki sirf "thor" string type hi data entry kare
// they also store boolean and object string number arrays also
 // [ 'thor', 'IronMan', 'spiderMan', [ 'superMan', 'flash', 'batman' ] ]

 //concat

// const allheros =  marvel_heros.concat(dc_heros) //but here limitation of 1 value
// console.log(allheros)
// output:- merge two arrays or more than return a new array
// [ 'thor', 'IronMan', 'spiderMan', 'superMan', 'flash', 'batman' ]


//spread ... => example a "If we break a glass made of glass, will it drop or will it spread. 
//ex-: kanch ka glass leke usko drop kr denge than wo toot jayega or spread ho jayega 

// const newAllHeros = [...marvel_heros,...dc_heros] //here we can give mutliple value 
// console.log(newAllHeros)
// output:
// [ 'thor', 'IronMan', 'spiderMan', 'superMan', 'flash', 'batman' ]


//flatarray =>  sabko ek hi array me return kar dega 
//flat() => depth deni hoti hai 1 ,2 ya infinity
const another_array = [1,2,3,[4,5,6],7,[11,12,[4,5,6,[1,2,3,['mango','banana',['audi','bmw',['india','newdelhi']]]]]]];

// const arr1 = [1,2,3,[4,5,6],7,[11,12,[4,5,6]]]
// const usable_another_array = arr1.flat(1); //when 1 depth output
// console.log(usable_another_array)
// // [ 1, 2, 3, 4, 5, 6, 7, 11, 12, [ 4, 5, 6 ] ]
const new_usable_array = another_array.flat(Infinity) //infinite depth
// console.log(new_usable_array)
// [1,2, 3,4,5,6,7,11,12,4,5, 6,1,2,3,'mango','banana','audi','bmw','india','newdelhi']

//console.log(Array.isArray("Ashwani")) //false

//convert to array
// console.log(Array.from("Ashwani"))
// [
//     'A', 's', 'h',
//     'w', 'a', 'n',
//     'i'
//   ]

//console.log(Array.from({name:"ashwani"}))  //we define as key wise array or value wise

const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1,score2,score3)) //iske andar variable bhi ho sakte hai array bhi ho sakte hai

//[ 100, 200, 300 ]
