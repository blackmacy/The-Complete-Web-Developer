// Advanced Arrays

const array = [1, 2, 10, 16]


const double = []
const newArray = array.forEach((num) => {
	double.push(num * 2);
})

console.log('forEach', double);

// map, filter, reduce

// 1) Map: always need to return something
// for each loop just iterate throught every element in the array and applying operation on each element,
// so need to create a new array.
// Map has restriction, which is to return the element. 

const mapArray = array.map((num) => {
	return num * 2
});

console.log('map', mapArray);

// Because only one input, dont need bracket, can also be written as:

// const mapArray = array.map(num => num * 2);


// 2) Filter: always return something

const filterArray = array.filter(num => num > 5);

console.log('filter', filterArray);


// 3) Reduce: always return something
// Every time it iterates, it accumulates in accumulator

const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num
}, 0);

console.log('reduce', reduceArray);




