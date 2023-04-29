const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'must provide name of task'],
		trim: true,
		maxlength: [200, `name can't be more than 200 characters`]
	},
	completed: {
		type: Boolean,
		default: false
	}
})

module.exports = mongoose.model('Task', TaskSchema)