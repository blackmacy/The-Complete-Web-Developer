var database = [
	{
		username: "andrei",
		password: "supersecret"
	},
	{
		username: "sally",
		password: "123"
	},
	{
		username: "Ingrid",
		password: "777"
	}
];

var newsFeed = [
	{
		username: "Bobby",
		timeline: "SO tired!"
	},
	{
		username: "Sally",
		timeline: "Javascript is so cool"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preettyyy cool"
	}
];

function isUserValid(username, password) {
	for (var i=0; i < database.length; i++) {
		if(database[i].username === username &&
			database[i].password === password) {
			return true;
		} 
	}
	return false;
}

function signIn(username, password) {
	if (isUserValid(username, password)) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and password");
	}
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password");

signIn(userNamePrompt, passwordPrompt);