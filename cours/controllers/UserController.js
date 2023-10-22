const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const USER = require('../models/user');
const User = require('../models/user'); 
const Dico = require('../dico/Dico');

require('dotenv').config();



exports.create = (req, res) => {

    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new USER({
                name: req.body.name,
                email: req.body.email,
                password: hash
            });
            user.save()
                .then(savedUser => {
                    const userId = savedUser._id.toString();

                    const tokenData = {
                        _id: userId,
                        name: savedUser.name,
                        email: savedUser.email
                    };

                    const token = jwt.sign(
                        tokenData,
                        process.env.JWT_TOKEN,
                        { expiresIn: process.env.EXPIRE_TOKEN }
                    );

                    res.status(201).json({
                        email: savedUser.email,
                        _id: userId,
                        token: token,
                        success: Dico.SUCCESS_USER_CREATED,
                    });
                })
                .catch(err => {
                    res.status(400).json({ error: err.message });
                });
        }).catch(error => res.status(500).json({error: error.message}));
}

exports.login = (req, res) => {
    const { email, password } = req.body;

    USER.findOne({ email }) 
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: Dico.NOT_FOUND_USER });
            }
            bcrypt.compare(password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: Dico.INCORRECT_PASSWORD });
                    }

                    const token = jwt.sign(
                        { userId: user._id },
                        process.env.JWT_TOKEN,
                        { expiresIn: process.env.EXPIRE_TOKEN }
                    );

                    res.status(200).json({
                        userId: user._id,
                        token: token
                    });
                })
                .catch(error => res.status(500).json({ error: error, message: Dico.INTERNAL_SERVER_ERROR }));
        })
        .catch(error => res.status(500).json({ error: error, message: Dico.INTERNAL_SERVER_ERROR }));
};

exports.profileUser = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params._id });

        if (!user) {
            return res.status(401).json({ error: Dico.NOT_FOUND_USER });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error, message: Dico.INTERNAL_SERVER_ERROR });
    }
};

exports.allUsers = async (req, res) => {
    try {
        const users = await User.find();

        if (!users || users.length === 0) {
            return res.status(401).json({ error: Dico.NOT_FOUND_USERS_LIST});
        }

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error, message: Dico.INTERNAL_SERVER_ERROR });
    }
};

exports.updateUser = async (req, res) => {
    try {
      const userId = req.params._id;
      const updateData = req.body; 
      const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });
  
      if (!updatedUser) {
        return res.status(404).json({ error: Dico.NOT_FOUND_USER });
      }
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};
  
exports.deleteUser = async (req, res) => {
    try {
      const userId = req.params._id;
      const deletedUser = await User.findByIdAndRemove(userId);
  
      if (!deletedUser) {
        return res.status(404).json({ error: Dico.NOT_FOUND_USER });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};
  
  
  
  