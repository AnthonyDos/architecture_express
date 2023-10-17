const mongoose = require('mongoose');

const PkmSchema = mongoose.Schema({
    name: {type: String, require: true},
    type: {type: String, require: true},
    level: {type: Number, require: true}
})

module.exports = mongoose.model('PKM', PkmSchema);