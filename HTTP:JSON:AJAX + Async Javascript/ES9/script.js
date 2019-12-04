// 1) Object spread operator (...)

const animals = {
	tiger: 23,
	lion: 5,
	monkey: 2,
	bird: 40
}

function objectSpread(p1, p2, p3) {
	console.log(p1)
	console.log(p2)
	console.log(p3)
}

const { tiger, lion, ...rest } = animals;     // rest = {monkey: 2, bird: 40}}

objectSpread ( tiger, lion, rest ) = animals;

// ---------------------------------------------------------------------------------- //

const array = [1,2,3,4,5];
function sum (a, b, c, d, e) {
	return a + b + c + d + e;
}
// sum (...array) = 15



//------------------------------------------------------------------------------------- //

// 2) finally : need to run a piece of code no matter what after promise
const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
	return fetch(url).then(resp => resp.json())
}))
	.then(results => {
		throw Error;
		console.log(results[0])
		console.log(results[1])
		console.log(results[2])
})
.catch(() => console.log('error'))
.finally(() => console.log('extra'));

// --------------------------------------------------------------------------------------- //

// 3) for await of: allow us to loop throught async call (await)

const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums'
]


const getData = async function() {
	try {
		const [ users, posts, albums ] = await Promise.all(urls.map(url => 
			fetch(url).then(resp => resp.json())
		))
		console.log('users', users)
		console.log('posts', posts)
		console.log('albums', albums)
	} catch (err){
		console.log('oopss', err)
	}
}

const getData2 = async function() {
	const arrayOfPromises = urls.map(url => fetch(url));
	for await (let request of arrayOfPromises) {
		const data = await request.json();
		console.log(data);
	}
}
 









