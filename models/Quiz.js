const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
        questionText: {type: String, required:true },
        options: { type: Array, required: true},
        correctAnswerIndex: {type:Number , required: true},
});

module.exports = mongoose.model('Quiz', quizSchema);