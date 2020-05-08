const University = require('../../model/university');

module.exports = async (req, res)=>{
	const {
		_id,
		title, 
		description, 
		email,
		website
	} = req.body;
	University.findByIdAndUpdate(_id,{title, description, email, website}, (err, univer)=>{
		if(err) return res.status(500).send({message: 'Ошибка при обновление!:('})
		res.status(200).send({message: 'Успешно обновлено!:)'})
	})
}