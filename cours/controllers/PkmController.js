const PKM = require('../models/pkm');

exports.create = (req, res) => {

    console.log(req.body);
    const postPkm = req.body;

    const pkm = new PKM({
        name: postPkm.name,
        type: postPkm.type,
        level: postPkm.level
    });
    console.log(postPkm);
    pkm.save()
        .then(data => {
            console.log(data)
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
    console.log(pkm_id);
    
    PKM.findById(pkm_id)
        .then(pkm => {
            if (!pkm) {
                return res.status(404).send({
                    message: "Aucun Pokémon trouvé avec cet ID."
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
    console.log(pkm_id);
    
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
    console.log(pkm_id);
    
    PKM.findByIdAndRemove(pkm_id)
        .then(pkm => {
            res.send({ message: `Pokémon ${pkm.name} supprimé avec succès.` });
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}