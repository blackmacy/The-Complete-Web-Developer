
const fs = require('fs');

// Part 1:
// var total = 0
// fs.readFile('./santa.txt', (err, data) => {
// 	console.time('santa')
// 	if (err) {
// 		console.log(err)
// 	}
// 	const fullData = data.toString();
// 	for (parenthesis of fullData) {
// 		if (parenthesis === '(') {
// 			total = total + 1
// 		} else if (parenthesis === ')')  {
// 			total = total - 1
// 		}
// 	}
// 	console.log('Floor ended up at: ', total)
// 	console.timeEnd('santa')
// })


// Part 2:
var total = 0
var floor = 1
fs.readFile('./santa.txt', (err, data) => {
	console.time('santa')
	if (err) {
		console.log(err)
	}
	const fullData = data.toString();
	for (parenthesis of fullData) {
		if (parenthesis === '(') {
			total += 1
		} else if (parenthesis === ')') {
			total -= 1
			if (total < 0) {
				console.log('First enter basement at floor:', floor)
				console.timeEnd('santa')
				process.exit();
			}	
		}
		floor += 1
	}
})


// Teacher's solutions:
// Part 1:

function question1() {
	fs.readFile('./santa.txt', (err, data) => {
		console.time('santa-time');
		const directions = data.toString();
		const directionsArray = directions.split('');
		const answer = directionsArray.reduce((acc, currentValue) => {
			if (currentValue === '(') {
				return acc += 1
			} else if (currentValue === ')') {
				return acc -= 1
			}
		}, 0)
		console.timeEnd('santa-time');
		console.log('floor:', answer);
	})
}


question1()


// Part 2:
function question2() {
	fs.readFile('./santa.txt', (err, data) => {
		console.time('santa-time2');
		const directions = data.toString();
		const directionsArray = directions.split('');
		let accumulator = 0
		let counter = 0
		const answer = directionsArray.some((currentValue) => {
			if (currentValue === '(') {
				accumulator += 1
			} else if (currentValue === ')') {
				accumulator -= 1
			}
			counter ++
			return accumulator < 0;
		})
		console.timeEnd('santa-time2')
		console.log('basement entered at:', counter);
	})
}


question2()




