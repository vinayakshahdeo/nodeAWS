		const express = require('express');
		const app = express();
		const tasks = require('./routes')
		const connectDB = require('./db')
		const notFound = require('./middleWare/notFound')
		const port = process.env.PORT || 5000;
		require('dotenv').config();
		const errorHandler = require('./middleWare/errorHandler')
		app.use(express.json());
		//middleware

		//routes

		app.use('/api/v1/tasks', tasks);

		app.use(notFound);

		app.use(errorHandler)
		const start = async () => {
			try {
				await connectDB(process.env.MONGO_URI);
				app.listen(port, console.log(`server is listening on port ${port}...`))
			} catch (error) {
				console.log(error)
			}
		}
		start();