function first() {
	var greet = 'Hi';
	function second() {
		alert(greet);
	}
	return second;
}

var newFunc = first();
newFunc();

//Also written as in modern way:

const first = () => {
	const greet = 'Hi';
	const second = () => {
		const name = 'bobby';
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

// 1) Closures - a function run, the function executed. It's never going to execute again.
// BUT it's going to remember that there are references to those variables
// so the child scope always has access to the parent scope.


// 2) Currying - a process of converting a function with multiple arguments to a function that
// takes one at a time.
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;  //function in a function
curriedMultiply(3)(4) // 12
const multiplyBy5 = curriedMultiply(5); 
// multiplyBy5(5); ==> 25
// multiplyBy5(10); ==> 50


// 3) Compose -  the act of putting 2 functions together to form the third function
// where the input of one function is the input of the other
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);

// Avoiding Side Effects, and have functional purity.

// Side Effects: affct the things outside the function
var a = 1;
function b() {
	a = 2;
}

// Functional purity: the function will always return the SAME value no matter 
// what input you put in (DETERMINISTIC), so that you'll know that what the function
// is executing

