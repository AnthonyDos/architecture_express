const Dico = require('../dico/Dico');
const PKM = require('../models/pkm');

exports.create = (req, res) => {
    const postPkm = req.body;

    const pkm = new PKM({
        name: postPkm.name,
        type: postPkm.type,
        level: postPkm.level
    });
    pkm.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
}

exports.findAll = (req, res) => {
    PKM.find()
        .then(pkms => {
            res.send(pkms);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

exports.findById = (req, res) => {
    const pkm_id = req.params._id;
    
    PKM.findById(pkm_id)
        .then(pkm => {
            if (!pkm) {
                return res.status(404).send({
                    message: Dico.NOT_FOUND_POKEMON
                });
            }
            res.send(pkm);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

exports.updateById = (req, res) => {
    const pkm_id = req.params._id;
    
    PKM.findByIdAndUpdate(pkm_id, req.body,{new: true})
        .then(pkm => {
            res.send(pkm);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

exports.deleteById = (req, res) => {
    const pkm_id = req.params._id;
    
    PKM.findByIdAndRemove(pkm_id)
        .then(pkm => {
            res.send({ message: `Pokémon ${pkm.name} supprimé avec succès.` });
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}