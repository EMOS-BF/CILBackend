const mongoose = require('mongoose');

const statusSchema = mongoose.Schema({
        titre: {type: String, required:true },
        description: { type: String, required: true},
        images: {type: Array, required: true},
});

module.exports = mongoose.model('Conseils', statusSchema);