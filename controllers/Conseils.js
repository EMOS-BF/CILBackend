const conseils = require('../models/Conseils');

exports.createConseil = (req, res, next) => {
    const newConseils = new conseils({
      ...req.body
    });
    newConseils.save()
      .then(() => res.status(201).json({ message: "Objet enregistré !"}))
      .catch(error => res.status(400).json({ error }));
     
  };

  exports.getOneConseil = (req, res, next) => {
    conseils.findOne({ _id: req.params.id })
      .then(conseil => res.status(200).json(conseil))
      .catch(error => res.status(404).json({ error }));
  };

  exports.modifyOneConseil = (req, res, next) => {
    conseil.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
  }

  exports.deleteConseil = (req, res, next) => {
    conseils.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  }

  exports.getAllConseils = (req, res, next) => {
    conseils.find()
      .then(conseils => res.status(200).json(conseils))
      .catch(error => res.status(400).json({ error }));
  }