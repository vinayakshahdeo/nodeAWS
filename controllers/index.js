const Task = require('../models/task')
const asyncWrapper = require('../middleWare/async');

const {
	createCustomError
} = require('../errors')

const getAllTasks = asyncWrapper(async (req, res) => {
	const tasks = await Task.find({});
	res.status(201).json({
		tasks
	});

})

const createTask = asyncWrapper(async (req, res) => {
	const task = await Task.create(req.body);
	res.status(201).json({
		task
	});

})

const getSingleTask = asyncWrapper(async (req, res, next) => {
	const task = await Task.findOne({
		_id: req.params.id
	});
	if (!task) {
		const error = new Error('Not Found');
		error.status = 404
		return next(createCustomError(`No Task with id : ${req.body.id}`, 404));
	}
	res.status(200).json({
		task
	});
})

const deleteTask = asyncWrapper(async (req, res, next) => {
	const task = await Task.findOneAndDelete({
		_id: req.params.id
	});
	if (!task) {
		return next(createCustomError(`No Task with id : ${req.body.id}`, 404));
	}
	res.status(201).json({
		task
	});
	// res.status(200).send()
	// res.status(200).json({
	// 	task: null,
	// 	status: 'success'
	// });
})


const updateTask = asyncWrapper(async (req, res) => {
	const {
		params: {
			id
		},
		body
	} = req
	const task = await Task.findOneAndUpdate({
			_id: id
		},
		body, {
			new: true,
			runValidators: true
		})
	if (!task) {
		return next(createCustomError(`No Task with id : ${req.body.id}`, 404));
	}
	res.status(200).json({
		task
	})
})

const editTask = asyncWrapper(async (req, res) => {
	const {
		params: {
			id
		},
		body
	} = req
	const task = await Task.findOneAndUpdate({
			_id: id
		},
		body, {
			new: true,
			runValidators: true,
			overwrite: true
		})
	if (!task) {
		return res.status(404).json({
			msg: `No Task with id : ${id}`
		})
	}
	res.status(200).json({
		task
	})
})


module.exports = {
	getAllTasks,
	getSingleTask,
	createTask,
	updateTask,
	editTask,
	deleteTask
}