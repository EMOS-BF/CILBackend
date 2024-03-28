const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  pseudo: {type: String, require: true},
});

module.exports = mongoose.model('User', userSchema);
