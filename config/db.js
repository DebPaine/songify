const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

module.exports = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false
		});
		console.log('MongoDB connected!');
	} catch (err) {
		console.error('MongoDB not connected');
		process.exit(1);
	}
};
