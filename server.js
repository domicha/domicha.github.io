// initialize Express in project
const express = require('express');
const app = express();

// // NEW CODE
// // when the server receives a GET request to '/'
// app.get('/', (req, res) => {
// 	// send some text back as a response
// 	res.send('Express is running!');
// });
// // END OF NEW CODE

// NEW CODE
app.use(express.static('public'));
// END OF NEW CODE

// start Express on port 8080
const PORT = process.env.PORT || 8080;

app.listen(PORT,() => {
	console.log("Listening on Port:%s",PORT)
	console.log("Stop with Ctrl+C");
});