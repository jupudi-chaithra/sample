const express = require('express');
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authenticate =  require("../middleware/authenticate")

require('../db/conn')
const User = require('../model/userSchema')

router.get('/', (req, res) => {
    res.send(`Hello world from the server router.js`)
});

router.post('/register', async(req, res) => {
    const {name, email, type} = req.body;
    try{
        const user = new User({name, email, type})
        const userRegister = await user.save();
        if(userRegister){
            res.status(201).json({message: "User registration successful"})
        }
        else{
            res.status(500).json({error: "Failed to register"})
        }
    }
    catch(err){
        console.log(err);
    }
})


//home
router.get('/home', (req, res) => {
    res.send(req.rootUser)
});

module.exports = router;