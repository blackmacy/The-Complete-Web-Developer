// debugger:

const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
	(accumulator, array) => {
		debugger; // -> stop when come across debugger
		// console.log('array', array);
		// console.log('accumulator', accumulator);    
		return accumulator.concat(array);
		accumulator.concat(array)}, []);