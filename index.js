const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const router = express.Router();
const app = express();
const port = process.env.PORT || 3000;

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post('/test',(request,response) => {
	//code to perform particular action.
	//To access POST variable use req.body()methods.
	console.log(request.body);
	response.end("success!!!");
	var options = { method: 'POST',
	url: 'https://f4rr3ll-98fc.restdb.io/rest/wikihow',
	headers: { 'cache-control': 'no-cache',
	'x-apikey': 'f597576043e3cd21d1e6755024f8fe4821e3b',
	'content-type': 'application/json' },
	body: { id: request.body.result.id, text: request.body.result.rewrite },
	json: true
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});
});

// add router in the Express app.
app.use("/", router);




app.listen(port,() => {
	console.log("Started on PORT 3000");
})