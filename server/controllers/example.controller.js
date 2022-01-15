const ExampleModel = require('../models/Example.model.js');

// Home Controller function..
exports.home = function(req, res){
	res.send('Welcome to home -- goto (/about) to see data from mongoDB!');
};

// About Controller function..
exports.about = function(req, res){
	ExampleModel.find({}, function(err, examples){
		var userMap = {};

		examples.forEach(function(example){
			userMap[example._id] = example;
		});

		res.send(userMap);
	});
};