const fs = require('fs');

// readFile:
fs.readFile('./hello.txt', (err, data) => {
	if (err) {
		console.log('errrrooorrr');
	}
	console.log('Async', data.toString());    // toString('utf8') => a type of encoding
})


// readFileSync:
const file = fs.readFileSync('./hello.txt');
console.log('Sync', file.toString());

// appendFile: 
fs.appendFile('./hello.txt', ' This is so cool!', err => {
	if (err) {
		console.log(err)
	}
})

// writeFile:
fs.writeFile('bye.txt', 'Sad to see you go', err => {
	if (err) {
		console.log(err)
	}
})

// deleteFile:
fs.unlink('./bye.txt', err => {
	if (err) {
		console.log(err)
	}
	console.log('Inception')
})





