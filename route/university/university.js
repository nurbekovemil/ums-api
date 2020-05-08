const express = require('express');
const router = express.Router();
// middleware auth
const auth = require('../../middleware/auth')

// University modules
const adduniversity = require('./adduniversity');
const alluniversity = require('./alluniversity');
const updateuniversity = require('./updateuniversity');

router.post('/add',auth, adduniversity);
router.post('/update', auth, updateuniversity);
router.get('/all', auth, alluniversity);

module.exports = router;