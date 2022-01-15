const express = require('express'),
	bodyParser = require('body-parser')
	exampleRouter = require('../routes/example.routes.js')
	path = require('path')
	mongoose = require('mongoose');

// Exports init function..
module.exports.init = () => {
	const databaseURI = process.env.DB_URI || require('./config').db.uri;

	// Connecting the mongoose and with it's Promise..
	const mongoOptions = {
    	useNewUrlParser: true,
    	useUnifiedTopology: true,
    	// useCreateIndex: true,
	};

	// Mongoose Promise..
	mongoose.Promise = global.Promise;

	// Mongoose Connection..
	mongoose.connect(databaseURI, mongoOptions, function (error) {
    	if (error) return console.log(error);
    	console.log('------ Mongoose is connected! -------');
	});


	// initialize app..
	const app = express();

	// use body-parsing middleware..
	app.use(bodyParser.json());

	// add a router..
	app.use('/api/example', exampleRouter);


	if (process.env.NODE_ENV === "production") {
		// Serve any static files..
		app.use(express.static(path.join(__dirname, '../../client/build')));

		// Handle react routing, return all requests to React App..
		app.get('*', function(req, res){
			res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
		});
	}

	return app;
};