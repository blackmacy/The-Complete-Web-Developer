// Method 1 (for):

const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
	apples: 5,
	oranges: 10,
	grapes: 1000
}

for ( let i = 0; i < basket.length; i ++) {
	console.log(basket[i]);
}


// Method 2 (for each):

basket.forEach(item => {
	console.log(item);
})


// Method 3 (for or):
// Iterating : arrays, strings
for (item of basket) {
	console.log(item);
}


// Method 4 (for in) - for object:
// loop over and check the object properties
// Enumerating : if it allows us to see the properties (not iterating)
for (item in detailedBasket) {
	console.log(item)
}
// apples, oranges, grapes