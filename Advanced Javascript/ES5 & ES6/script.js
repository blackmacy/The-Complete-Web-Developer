// 1) let + const:

// const: - cannot reassign the variable, cannot be updated
//		  - can be used for function, too
// 		  - can change the properties of the object, but cannot reassign the object itself

// let: anytime it wrap in a curly bracket, it creates a new scope
// var: it will bring over the change variable (after modified). 

For exp:

let experience = 100;
var wizardLevel = false;

if(experience > 90) {
	var wizardLevel = true;
}
console.log("outside bracket:", wizardLevel); // true

// ** "const" use for something unchanged, and "let" used for something that need to be updated

const player = "bobby";
let experience = 100;
let wizardLevel = false;

if(experience > 90) {
	let wizardLevel = true;
	console.log("inside bracket:", wizardLevel); // true
}

console.log("outside bracket:", wizardLevel); // false

// 2) Destructuring:

const obj = {
	player: "bobby",
	experience: 100,
	wizardLevel: false,
}

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

const { player, experience } = obj. // same as line 31 & 32
let { wizardLevel } = 30

// 3) Object properties:
// 		-dynamic property values

const name = "john snow";

const obj = {
	[name]: "hello",
	[1 + 2]: "hihi"
} 

const a = "Simon";
const b = true;
const c = {};

const obj = {
	a,
	b,
	c,
}

// 4) Template Strings:

const name = "Salle";
const age = 34;
const pet = "horse";

// const greeting = "Hello" + name + "you seem to be doing" + greeting + "!";

const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;

// 5) Default Arguments:

function greet(name=" ", age=30, pet="cat"){
	return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;
}

// Symbol: create completely unique type

var sym1 = Symbol();
var sym2 = Symbol("foo");
var sym3 = Symbol("foo");

// sym2 === sym3   will return False


// 6) arrow functions:

function add(a, b) {
	return a + b;
}
// can be written as
const add2 = (a, b) => a + b;