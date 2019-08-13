//scope

var fun = 5;

function funFunction() {
	//child scope
	var fun = "helloo";
	console.log(1, fun);
}

function funerFunction() {
	//child scope
	var fun = "Byee";
	console.log(2, fun);
}

function funnestFunction() {
	//child scope
	var fun = "AHHH";
	console.log(3, fun);
}

console.log("window", fun);
funFunction();
funerFunction();
funnestFunction();
