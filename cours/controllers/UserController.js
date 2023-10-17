const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const USER = require('../models/user');
require('dotenv').config();



exports.create = (req, res) => {

    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new USER({
                name: req.body.name,
                email: req.body.email,
                password: hash
            });
            console.log(user)
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
                        { expiresIn: '1h' }
                    );

                    res.status(201).json({
                        email: savedUser.email,
                        _id: userId,
                        token: token,
                        success: "Utilisateur créé !",
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
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }

            bcrypt.compare(password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }

                    const token = jwt.sign(
                        { userId: user._id },
                        process.env.JWT_TOKEN,
                        { expiresIn: '24h' }
                    );

                    res.status(200).json({
                        userId: user._id,
                        token: token
                    });
                })
                .catch(error => res.status(500).json({ error: error }));
        })
        .catch(error => res.status(500).json({ error: 'Erreur serveur' }));
};


exports.authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]; 
        const decodedToken = jwt.verify(token, process.env.JWT_TOKEN);
        const userId = decodedToken.userId; 
        console.log(userId)
        if (req.body.userId && req.body.userId !== userId) { 
            console.log(req.body.userId)
            throw 'User id non valide ! ';
        } else {
            next()
        }
    }catch (error) {
        res.status(401).json({ error: error | 'Requête non authentifiée !'});
    }
}