const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const User = require('../models/User');

require('dotenv/config');


module.exports = {
    async register(req, res, next) {
        try {
            const { name, status } = req.body;
            

            if (!(name && status)) {
                return res.status(409).send({ message: "All input is required. " })
            }

            const user = await User.create({
               name, status
            })
            return res.status(201).send({
                userId: user.id,
                message: "User created successfully."
            });
        } catch (error) {
            if (error instanceof Sequelize.UniqueConstraintError) {
                return res.status(409).send({ message: `${Object.keys(error.fields)} alredy existe.` })
            }
            return res.status(500).send({ message: error.message })
        }
    },

    async getUsers(req, res, next) {
        const user = await User.findAll()
        
        res.json(user)
        
    }
}