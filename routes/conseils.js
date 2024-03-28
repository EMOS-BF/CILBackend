
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const stuffCtrl = require('../controllers/conseils');

router.post('/',auth,stuffCtrl.createConseil);
router.put('/:id',auth ,stuffCtrl.modifyOneConseil);
router.delete('/:id',auth,stuffCtrl.deleteConseil);
router.get('/:id',auth,stuffCtrl.getOneConseil);
//pour app mobile
router.get('/mobile/:id',stuffCtrl.getAllConseil);

router.get('/',auth, stuffCtrl.getAllConseils);

module.exports = router;
