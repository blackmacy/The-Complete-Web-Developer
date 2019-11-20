// memory leak:

const a = 1;
const b = 2
const c = 1000;

// call stack:
console.log('1');
console.log('2');
console.log('3');

const one = () => {
	const two = () => {
		console.log('4');
	}
two();
}

//stack
console.log('4')
two()
one()

// Recursion:
function foo() {
	foo()
}
foo()

//asynchoronous langauge:
console.log('1');
setTimeout(() => {
	console.log('2');
}, 2000)
console.log('3')


// CALL STACK


// WEB API



// CALLBACK QUEUE



// EVENT LOOP
// - check is the stack empty





