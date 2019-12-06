const express = require('express');

const app = express();

app.use((req, res, next) => {
	console.log('<h1> HHHHEEEELLOO </h1>')
	next();
})


app.get('/', (req, res) => {
	res.send("testetst");
})


app.listen(3000);