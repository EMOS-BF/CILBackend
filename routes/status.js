
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const stuffCtrl = require('../controllers/status');

router.post('/',auth,stuffCtrl.createStatus);
router.put('/:id',auth ,stuffCtrl.modifyOneStatus);
router.delete('/:id',auth,stuffCtrl.deleteStatus);
router.get('/:id',auth,stuffCtrl.getOneStatus);
//pour app mobile
router.get('/mobile',stuffCtrl.getAllStatus);

router.get('/',auth, stuffCtrl.getAllStatus);

module.exports = router;
