const mongoose = require('mongoose');
const dburl = "mongodb://localhost:27017/user-auth";
const mongoServer = async ()=>{
	try {
		await mongoose.connect(dburl, {
			useNewUrlParser: true,
			useFindAndModify: false
		});
		console.log('Connected to db');
	}catch(e){
		console.log(e);
		throw e;
	}
}

module.exports = mongoServer;