const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User = require('../models/Admin');

exports.signup = (req,res,next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash =>{
        const user = new User({
            username: req.body.username,
            password: hash
        });
        user.save()
        .then(()=> res.status(201).json({message: "utilisateur créer"}))
        .catch(error => res.status(400).json({error}));
    })
    .catch(error => res.status(500).json({error}));
};

exports.login = (req, res, next) => {
    User.findOne({ username: req.body.username })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
 };