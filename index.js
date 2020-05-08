const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoServer = require('./config/db');

const authuser = require('./route/authuser/authuser.js');
const university = require('./route/university/university.js')

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

app.get('/', (req, res)=>{
	res.json({message: "API Working"})
})

app.use('/user', authuser);
app.use('/university', university);


mongoServer();
app.listen(PORT, (req, res)=>{
	console.log('server started')
})