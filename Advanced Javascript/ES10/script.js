// 1) flat

const array = [1,2,3,4,5]
const array2 = [1,[2,3],[4,5]]
const array3 = [1,2[3,4,[5]]]

array.flat()    // [1,2,3,4,5]
array2.flat()   // [1,2,3,4,5]
array3.flat()   // [1,2,3,4,[5]]
array3.flat(2)  // [1,2,3,4,5]

// use to clean data
const entries = ['bob', 'salle',,,,,,'cindy']
entries.flat()   //["bob", "salle", "cindy"]


// 2 ) flatmap:

const numbers = [['1', '3'],'10', '12', ['23', '11'], ['21', '45', ['34']]]
const numbersWithZero = numbers.flatMap(num => num + "0");

numbersWithZero  // ["1,30", "100", "120", "23,110", "21,45,340"]

// 3) trimStart & trimEnd
userEmail = '      eddyeagle@gmail.com'
userEmail2 = 'jonnydanger@gmail        '
console.log(userEmail.trimStart());   // eddyeagle@gmail.com
console.log(userEmail2.trimEnd());    // jonnydanger@gmail


// 4) fromEntries: transfer a key value pair to an object

userProfile =[['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]]

const obj = Object.fromEntries(userProfile)   // {commanderTom: 23, derekZlander: 40, hansel: 18}
Object.entries(obj)
// 0: (2) ["commanderTom", 23]
// 1: (2) ["derekZlander", 40]
// 2: (2) ["hansel", 18]


// 5) try, catch

try {
	true + 'hi'
} catch {
	console.log('you messed up')
}   
//  "truehi"

try {
	true + 'hi'
} catch {
	console.log('you messed up')
}

// 'you messed up'






