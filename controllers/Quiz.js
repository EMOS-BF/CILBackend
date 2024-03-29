const quiz = require('../models/Quiz');

exports.createQuiz = (req, res, next) => {
    const newQuiz = new quiz({
      ...req.body
    });
    newQuiz.save()
      .then(() => res.status(201).json({ message: "Objet enregistré !"}))
      .catch(error => res.status(400).json({ error }));
      
  };

  exports.getOneQuiz = (req, res, next) => {
    quiz.findOne({ _id: req.params.id })
      .then(quiz => res.status(200).json(quiz))
      .catch(error => res.status(404).json({ error }));
  };

  exports.modifyOneQuiz = (req, res, next) => {
    quiz.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: "Objet modifié !"}))
      .catch(error => res.status(400).json({ error }));
  }

  exports.deleteQuiz = (req, res, next) => {
    quiz.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: "Objet supprimé !"}))
      .catch(error => res.status(400).json({ error }));
  }

  exports.getAllQuiz = (req, res, next) => {
    quiz.find()
      .then(quizs => res.status(200).json(quizs))
      .catch(error => res.status(400).json({ error }));
  }