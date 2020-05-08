const mongoose = require('mongoose');
const universutySchema = mongoose.Schema({
	title: {
		type: String,
		require: true
	},
	description: {
		type: String,
		require: true
	},
	website: {
		type: String,
		require: true
	},
	email: {
		type: String,
		require: true
	}
})

module.exports = mongoose.model('universities', universutySchema)