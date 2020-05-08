const University = require('../../model/university')

module.exports = async (req, res)=>{
	try{
		const univers = await University.find()
		res.send(univers);
	}
	catch(e){
		res.status(500).send('Error server')
	}
}