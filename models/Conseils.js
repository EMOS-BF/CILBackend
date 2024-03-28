const mongoose = require('mongoose');

const conseilsSchema = mongoose.Schema({
        titre: {type: String, required:true },
        description: { type: String, required: true},
        image: {type: String, required: false},
});

module.exports = mongoose.model('Conseils', conseilsSchema);