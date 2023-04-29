class CustomAPIError extends Error {
	constructor(message, statusCode) {
		super(message);
		console.log({
			statusCode
		})
		this.statusCode = statusCode;
	}
}

const createCustomError = (msg, statusCode) => new CustomAPIError(msg, statusCode)

module.exports = {
	createCustomError,
	CustomAPIError
}