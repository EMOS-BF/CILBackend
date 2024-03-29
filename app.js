const express = require('express');
const mongoose = require('mongoose');
const app = express();
const adminRoutes = require('./routes/admin');
const quizzRoutes = require('./routes/quiz');
const conseilsRoutes = require('./routes/conseils');
const statusRoutes = require('./routes/status');

mongoose.connect('mongodb+srv://admin:chidra10@atlascluster.w9r5a4w.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  app.use('/api/conseils',conseilsRoutes);
  app.use('/api/quiz',quizzRoutes);
  app.use('/api/auth',adminRoutes);
  app.use('/api/status', statusRoutes);

  module.exports = app;