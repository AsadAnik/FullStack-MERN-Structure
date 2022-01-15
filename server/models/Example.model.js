const mongoose = require('mongoose');

// Schema..
const exampleSchema = mongoose.Schema({
	title: { type: String, required: true, maxLength: 150 },
	about: { type: String, required: false, maxLength: 200 }
}, {
	timestamps: true 
});

// Model..
const Example = mongoose.model('Example', exampleSchema);

module.exports = Example;