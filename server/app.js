const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser())
dotenv.config({path: './config.env'});
require('./db/conn')
const User = require('./model/userSchema')

app.use(express.json())

app.use(require('./router/auth'));
 

const PORT = process.env.PORT

app.get('/contact', (req, res) => {
    res.send(`Hello contact world from the server`)
});

app.get('/home', async(req, res) => {
    console.log("Hello from app.js in server")
    const user = User.find()
    res.send(user)
});

app.get('/signin', (req, res) => {
    res.send(`Hello Login world from the server`)
});

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
})

