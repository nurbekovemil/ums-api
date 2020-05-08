const { check, validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../model/user');

module.exports = async (req, res)=>{
			const errors = validationResult(req);
			if(!errors.isEmpty()){
				return res.status(500).send(errors);
			}
			try {
				let user = await User.findOne({email: req.body.email});
				if(user) return res.send('Email уже есть');

				user = new User({
					username: req.body.username,
					email: req.body.email,
					password: req.body.password
				});
				const salt = await bcrypt.genSalt(10);
				user.password = await bcrypt.hash(user.password, salt);
				user.save();
				const payload = {
	                user: {
	                    id: user.id
	                }
	            };
				jwt.sign(
	                payload,
	                "secret", {
	                    expiresIn: 3600
	                },
	                (err, token) => {
	                    if (err) throw err;
	                    res.status(200).json({
	                        token
	                    });
	                }
	            );
				
			}catch(e){
				res.send(e);
			}
		}