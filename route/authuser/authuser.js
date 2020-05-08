const express = require('express');
const { check, validationResult } = require('express-validator/check');

const router = express.Router();
// middleware
const auth = require('../../middleware/auth')
// User schema
const User = require('../../model/user');
// User modules
const login = require('./login');
const signup = require('./signup')

router.post('/signup', [
		check('username', 'Не корректный username').not().isEmpty(),
		check('email','Не корректный email').isEmail(),
		check('password','Длина меньше чем 6').isLength({min:6})
		],
    signup
	)
router.post("/login",[
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6
    })
  ],
  login
);

router.get("/me", auth, async (req, res) => {
  try {
    // request.user is getting fetched from Middleware after token authentication
    const user = await User.findById(req.user.id);
    
    res.json({
      username: user.username,
      email: user.email,
      createAt: user.createAt
    })
  } catch (e) {
    res.send({ message: "Error in Fetching user" });
  }
});

module.exports = router;
