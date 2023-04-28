const getAllTasks = (req, res) => {
	res.send('get all tasks from controller')
}

const createTask = (req, res) => {
	res.json(req.body)
}

const getSingleTask = (req, res) => {
	res.send({
		id: req.params.id
	})
}

const deleteTask = (req, res) => {
	res.send('delete task from controller')
}


const updateTask = (req, res) => {
	res.send('update Task from controller')
}


module.exports = {
	getAllTasks,
	getSingleTask,
	createTask,
	updateTask,
	deleteTask
}