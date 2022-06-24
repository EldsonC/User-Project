const express = require('express');
const router = express.Router();
const AccountController = require('../controller/AccountControll')

router.post('/register', AccountController.register)
router.get('/users', AccountController.getUsers)

module.exports = router