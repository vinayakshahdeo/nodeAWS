	const express = require('express');
	const app = express();
	const tasks = require('./routes')

	const port = 5000;

	//middleware

	app.use(express.json());

	//routes
	app.get('/hello', (req, res) => {
		res.send('hello')
	})

	app.use('/api/v1/tasks', tasks);

	app.listen(port, console.log(`server is listening on port ${port}...`))