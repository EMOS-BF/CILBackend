const status = require('../models/Status');

exports.createStatus = (req, res, next) => {
    const newStatus = new status({
      ...req.body
    });
    newStatus.save()
      .then(() => res.status(201).json({ message: "Objet enregistré !"}))
      .catch(error => res.status(400).json({ error }));
     
  };

  exports.getOneStatus = (req, res, next) => {
    status.findOne({ _id: req.params.id })
      .then(status => res.status(200).json(status))
      .catch(error => res.status(404).json({ error }));
  };

  exports.modifyOneStatus = (req, res, next) => {
    status.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: "Objet modifié !"}))
      .catch(error => res.status(400).json({ error }));
  }

  exports.deleteStatus = (req, res, next) => {
    status.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: "Objet supprimé !"}))
      .catch(error => res.status(400).json({ error }));
  }

  exports.getAllStatus = (req, res, next) => {
    status.find()
      .then(status => res.status(200).json(status))
      .catch(error => res.status(400).json({ error }));
  }