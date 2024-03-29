const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const stuffCtrl = require('../controllers/Quiz');

router.post('/',auth,stuffCtrl.createQuiz);
router.put('/:id',auth ,stuffCtrl.modifyOneQuiz);
router.delete('/:id',auth,stuffCtrl.deleteQuiz);
router.get('/:id',auth,stuffCtrl.getOneQuiz);
//pour app mobile
router.get('/mobile/:id',stuffCtrl.getAllQuiz);

router.get('/',auth, stuffCtrl.getAllQuiz);

module.exports = router;
