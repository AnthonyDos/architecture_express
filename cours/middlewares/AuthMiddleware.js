const jwt = require('jsonwebtoken');
const Dico = require('../dico/Dico');
require('dotenv').config();

exports.authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]; 
        const decodedToken = jwt.verify(token, process.env.JWT_TOKEN);
        const userId = decodedToken.userId; 
        
        if (req.body.userId && req.body.userId !== userId) { 
            throw Dico.USER_ID_NOT_VALID;
        } else {
            next()
        }
    }catch (error) {
        res.status(401).json({code: 401, error: Dico.AUTHENTICATION_FAILED});
    }
}