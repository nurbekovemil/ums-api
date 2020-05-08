// University schmema
const University = require('../../model/university')

module.exports = async (req, res)=>{
	const {
		title,
		description,
		email,
		website
	} = req.body;
	
	try{
		let univer = await University.findOne({title})
		if(univer) return res.status(400).send('Такой университеть уже есть!')
		univer = new University({
			title,
			description,
			email,
			website
		})
		univer.save();
		res.status(200).send({
			message:'Университеть успешно добавлен!'
		});
	}
	catch(e){
		res.send(e)
	}
}